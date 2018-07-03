class IcalConverter
  
  FREQ = {'D' => 'DAILY', 'W' => 'WEEKLY', 'M' => 'MONTHLY', 'Y' => 'YEARLY'}
  WKST = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA']

  def self.new_mysmartday_calendar
    cal = RiCal.Calendar
    cal.prodid = 'mysmartday.com'
    return cal
  end
  
  def self.task_to_ical(task, sequence = nil, uri = nil)
    #add time zone for event before convert 
    if (task.timezone_key and task.timezone_key != 0)
      tzsp = TimeZoneSupport.find_by_timezone_key(task.timezone_key)
      if tzsp
        Time.zone = tzsp.timezone_name[11, tzsp.timezone_name.to_s.length]
      end
    end
    ######### end support time zone ####
    
    start_time = Utils.at_utc(task.start_time)
    if task.task_type == WORK_TYPE_EVENT
      # obj = cal.event
      obj = RiCal.Event
      # obj.dtend = Utils.at_utc(task.end_time)
      if task.ade
        obj.dtstart = start_time.to_date
        obj.dtend = Utils.at_utc(task.end_time + 24*3600).to_date
        obj.transp = "TRANSPARENT"
      else
        obj.dtstart = start_time
        obj.dtend = Utils.at_utc(task.end_time)
      end
    elsif task.task_type == WORK_TYPE_TODO
      obj = RiCal.Todo
      obj.dtstart = start_time
      if task.completed# or task.completed == 1
        obj.completed = "#{Utils.at_utc(task.completed_date.to_i).strftime('%Y%m%dT%H%M%SZ')}"
      end 
      #obj.duration = "PT#{task.duration}M" if task.duration
      if task.due
        obj.due = "#{Utils.at_utc(task.end_time.to_i).strftime('%Y%m%d')}"
      end
    end
    
    if task.group_id and task.group_id != 0
      #obj.uid = task.group_id.to_s + '@mysmartday.com' #Cong comment 9 April 2013
      obj.recurrence_id = start_time
    else
      #obj.uid = task.id.to_s + '@mysmartday.com'
    end
    #set uuid
    obj.uid = task.id.to_s + '@mysmartday.com'
    obj.uid = uri if uri
    obj.sequence = sequence.to_s if sequence
    
    obj.description = (task.content || '')
    # dtstart(start_time.in_time_zone('UTC'))
    # obj.dtstart = start_time
    #check title for Ptask
    tt = task.title
    #if task[:stask] and task[:stask].to_i == 1
      #tt = PUSHPIN.to_s + " " + task.title
    #end
    obj.location = (task.location || '')
    obj.created = Utils.at_utc(task.create_time)
    obj.summary = tt if task.title
    obj.url = URI.decode(task.url.to_s)
    
    #obj.url = URI.decode(task.url.to_s)
    # obj.url = "mysmartday.com"
  
    # alarm
    if task.alerts
      alerts = task.alerts
      alerts.each do |alert|
        valarm = RiCal.Alarm
        valarm.description = task.title
        valarm.trigger = "-PT#{alert.minutes}M" #if task.duration
        obj.add_subcomponent(valarm)
      end
    end
    
    #participants
    if task.participants
      pps = task.participants
      arr = Array.new()
      pps.each do |p|
        options = {'CN' => p.email,'CUTYPE' => 'INDIVIDUAL'}
        obj.attendee_property << RiCal::PropertyValue::CalAddress.new(nil, :value => 'mailto:'+p.email, :params => options)
      end
    end
    
    obj
  end
  
  # convert ical object to task
  def self.ical_to_task(i_obj, user_id, cate_id, type)
    task = Task.new
    task.user_id = user_id
    task.category_id = cate_id
    task.app_id = 2
    task.order_number = Task.get_max_order(user_id) + 1
    
    task.task_type = type
    tt = i_obj.summary
    tt = tt.to_s.strip
    # task.start_time = i_obj.dtstart.to_i
    task.start_time = Utils.transparent_tz(i_obj.dtstart).to_i
    if type == WORK_TYPE_EVENT
      if i_obj.dtend.is_a?(Time) or i_obj.dtend.is_a?(DateTime)
        task.end_time = Utils.transparent_tz(i_obj.dtend).to_i
        
      else
        # is ADE
        et = i_obj.dtend - 1
        #for old version
        #task.end_time = Time.utc(et.year, et.month, et.day, 23, 59, 59)
        #for caldav 10 april 2013
        #Note: - 60000s, because iCal will save beginning of day for next day
        task.end_time = Utils.transparent_tz(i_obj.dtend).to_i - 60000
        task.ade = 1
        # tt = tt[PUSHPIN.to_s.length, tt.length].to_s.strip
        # task.stask = 0
      end
    else #task
      # set duration
      if i_obj.duration
        duration = i_obj.duration_property
        task.duration = duration.days*60*24 + duration.hours*60 + duration.minutes
      end
      if i_obj.due
        task.end_time = Utils.transparent_tz(i_obj.due).to_i
        task.due = true
      end
      #set done task
      if i_obj.completed
        task.completed = 1
        task.completed_date = Utils.transparent_tz(i_obj.completed).to_i
      end
    end
    
    task.title = tt
    #task.url = i_obj.url.strip if i_obj.url
    task.url = URI.decode(i_obj.url.strip) if i_obj.url
    task.content = i_obj.description if i_obj.description
    task.location = i_obj.location if i_obj.location
    
    # repeat info
    if i_obj.rrule_property and i_obj.rrule_property.first
      rule = i_obj.rrule_property.first
      repeat = Repeat.new
      
      repeat.repeat_interval = rule.interval || 1
      repeat.repeat_type = FREQ.key(rule.freq)
      repeat.repeat_end = rule.until ? Utils.transparent_tz(rule.until.ruby_value).to_i : 0  
      if repeat.repeat_type == REPEAT_TYPE_WEEKLY
        # days = rule.wkst.split(',')
        days = rule.to_options_hash[:byday]
        arrdays = Array.new()
        arrdays = WKST
        if days and days.length > 2
          days.each do |d|
            repeat.repeat_flag[arrdays.index(d)] = '1'
          end
        elsif days and days.length > 0 and days.length <= 2
          repeat.repeat_flag[arrdays.index(days)] = '1'
        end
      elsif repeat.repeat_type == REPEAT_TYPE_MONTHLY
        hasDayOfWeek = rule.to_options_hash[:byday]
        if hasDayOfWeek
          repeat.repeat_flag[0] = '1'
        end
        # unless rule.to_options_hash[:byday] #rule.byday
          # repeat.repeat_flag[0] = '1'
        # end
      end
      
      task.repeat = repeat
    end
    
    # alert
    if i_obj.alarms
      i_obj.alarms.each do |al|
        trig_pro = al.trigger_property
        if RiCal::PropertyValue::Duration.valid_string?(al.trigger)
          alert = Alert.new
          alert.minutes = ((trig_pro.days*60*24) + (trig_pro.hours*60) + trig_pro.minutes).abs
          task.alerts << alert
        end
      end
    end
    
    #attendee
    if i_obj.attendee
      #participants
      i_obj.attendee.each do |p|
        if p and p.to_s.strip != ''
          #get email
          arr = p.to_s.split(':')
          pp = Participant.new()
          pp.email = arr[1].to_s.strip
          task.participants << pp
        end
      end
    end
    
    task
  end
  
  def self.email_to_attendee(email)
    # return ";CN=#{email};RSVP=TRUE:mailto:#{email}"
    return ";CUTYPE=INDIVIDUAL;ROLE=REQ-PARTICIPANT;PARTSTAT=NEEDS-ACTION;RSVP=TRUE;CN=#{email};X-NUM-GUESTS=0:mailto:#{email}"
  end
end