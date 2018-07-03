# require 'base64'

class Utils
  require 'digest/md5'
  require 'digest'
  
  # include Hominid

  def self.username_to_folder_name (username)
    Base64.decode64(username).gsub(/[.@]/, '_')
  end
  
  def self.email_to_folder_name (email)
    email.gsub(/[.@]/, '_')
  end

  #aes
  def self.encrypt_aes(str, key, iv)
    data = AES.encrypt(str.to_s, key, {:iv => iv})
    return data
  end
  
  def self.valid_url(url)
    begin
      uri = URI.parse(url)
      if uri.class != URI::HTTP
        return true
      end
    rescue URI::InvalidURIError
      return false
    end
  end
  
  ####################
  #user_name: email of email@gmail.com
  #real_name_dav: this is constant of DAV
  #pass: password of user 
  def self.dav_md5_password(user_name, real_name_dav, pass)
    strFormat = user_name.to_s + ':' + real_name_dav + ':' + pass
    p = Digest::MD5.hexdigest(strFormat)
    return p
  end
  ####################
  
  # convert format js date to ruby
  # return DateTime object
  def self.js_date_to_ruby_date js_date
    # format from javascript: "Mon May 16 2011 13:48:57 GMT+0700 (ICT)"
    str_datetime = js_date["Mon ".length, "May 16 2011 13:48:57".length]
    DateTime.strptime(js_date, "%a %b %d %Y %H:%M:%S")
  end
  
  #decode base64
  def self.decodeBase64 encode_text
    begin
      return Base64.strict_decode64(encode_text)
    rescue
      return encode_text
    end
  end
  
  #return color for due
  def self.due_color(tooltip)
    color = ""
    if tooltip == TT_OVER_DUE
      color = 'color:red;'
    end
    return color
  end
  
  # decrease brightness of text color
  def self.toDarker(color)
    hColor = Hash["aee100" => "6e8e00", "e3e316" => "aeae00", "ffd414" => "bd9e14"]
    if hColor[color].nil?
      return color
    else
      return hColor[color]
    end
  end
  
  #convert duration 
  def self.convert_duration(duration)
    res = ''
    if duration > 0
      if duration == 1
        res = "1 min"
      elsif duration > 1 and duration < 60
        res = duration.to_s + " mins"
      elsif duration == 60
        res = "1 hr "
      elsif duration > 60
        hh = duration/60
        mm = duration%60
        if hh == 1
          res = "1 hr "
        else
          res = hh.to_s + " hrs "
        end
        if mm == 1
          res += " 1 min"
        else
          res += mm.to_s + " mins"
        end
      end
    end
    return res
  end
  
  ########## notifications #############
  def self.save_notifications(members = nil, conversation_obj = nil, user_id = 0, user_email = '', user_name = '', subj = '')
    if members and members.length > 0
      isOwnerComment = false
      conversation_id = 0
      conversation_id = conversation_obj.id if conversation_obj
      members.each do |mem|
        strFormat = Time.now.to_i.to_s + ActiveSupport::SecureRandom.hex(16).to_s + user_id.to_s
        id = Digest::MD5.hexdigest(strFormat)
        #check owner comment
        if mem.email != user_email
          #check permission when create notification
          isCreate = 0 #not create
          if (mem.permission.to_i != PERMISSION_TYPE_ASSIGN)
            isCreate = 1 #create
          else #it means = 0
            #if he/she has permission is ASSIGNEE, we need to check assignee_email
            cons = nil
            cons = Conversation.find_by_id(conversation_id)
            work = Task.find_by_id(cons.root_id) if cons
            if work and work.assignee_email.to_s.strip.downcase == mem.email.to_s.strip.downcase
               isCreate = 1 #create
            end  
          end 
          if isCreate.to_i == 1
            notify = Notification.new()
            notify.id = id
            notify.email = mem.email
            notify.conversation_id = conversation_id
            notify.user_id_cmt = user_id
            notify.status = 0
            notify.notification_type = 0
            notify.create_time = Time.zone.now.to_i
            notify.save
            #send mail notify
            t_mail = Thread.new {
              UserMailer.notification_email(conversation_obj, mem.email, subj, user_name, user_email).deliver
            }
            t_mail.run
          end
        else #this is owner
            owner = User.find(mem.user_id)
            if owner
              owner_email = Base64.strict_decode64(owner.UserName)
              notify = Notification.new()
              notify.id = id
              notify.email = owner_email
              notify.conversation_id = conversation_id
              notify.user_id_cmt = user_id
              notify.status = 0
              notify.notification_type = 0
              notify.create_time = Time.zone.now.to_i
              notify.save
              #send mail
              t_mail = Thread.new {
                UserMailer.notification_email(conversation_obj, owner_email, subj, user_name, user_email).deliver
              }
              t_mail.run
            end
        end
      end
    end #end check members
  end
  
  #save notification when user assign task, MI and share project
  #notification_type = 0: for conversation - default
  #notification_type = 1: for conversation - tasks table, assign task. MI
  # if notification_type = 1, default: status_respond = 0, =1: Done, =2: un-done, =3: accepted task, =4: rejected task, =5:join, =6: decline, =7: maybe
  #notification_type = 2: for conversation - categories table, share project
  def self.save_notification_by_item(user_id = 0, email = '', conversation_id = 0, notification_type = 0, status_respond = 0)
    strFormat = Time.now.to_i.to_s + ActiveSupport::SecureRandom.hex(16).to_s + user_id.to_s
    id = Digest::MD5.hexdigest(strFormat)
    nof =    Notification.find(:first, :conditions => ['conversation_id = ? AND user_id_cmt = ? AND email = ?', conversation_id, user_id, email]) 
    if !nof or (nof and nof.status_respond.to_i != status_respond.to_i)
      notify = Notification.new()
      notify.id = id
      notify.email = email
      notify.conversation_id = conversation_id
      notify.user_id_cmt = user_id
      notify.status = 0
      notify.status_respond = status_respond
      notify.notification_type = notification_type
      notify.create_time = Time.zone.now.to_i
      notify.save
    end
  end
  
  #statistic today
  def self.statistic_today(user_id)
    date = Time.zone.now
    stt_res = Task.get_statistic_task(user_id)
    #statistic today have
    if stt_res
      #check it has exist
      stt = Statistic.get_statistic_by_date(user_id, date.to_date)
      strFormat = Time.now.to_i.to_s + ActiveSupport::SecureRandom.hex(16).to_s + user_id.to_s
      id = Digest::MD5.hexdigest(strFormat)
      if !stt #dont have statistic today
        s = Statistic.new()
        s.user_id = user_id
        s.id = id
        s.sdate = date.to_i
        s.done_number = stt_res.sdone
        s.total_number = stt_res.stotal
        s.save
      else #update data statistic today
        if (stt.done_number != stt_res.sdone) or (stt.total_number != stt_res.stotal)
          stt.done_number = stt_res.sdone
          stt.total_number = stt_res.stotal
          stt.update_attributes(stt)
        end
      end #end have statistic
    end #end result 
  end
  
  #filter add new tag
  def self.filter_new_tags(oldTag, newTag)
    tags = ""
    if oldTag.length > 0 and newTag.length > 0
      arrOldTag = oldTag.split(',')
      arrNewTag = newTag.split(',')
      flag = false
      for i in 0..arrNewTag.length-1
        next if arrNewTag[i].to_s == ""
        if arrOldTag.include?arrNewTag[i]
          flag = true 
        else
          flag = false 
        end 
        #it is new tag
        if flag == false and arrNewTag[i].to_s != ""
          tags = tags + arrNewTag[i].to_s + "," 
        end
      end #end loop for
      #tags = tags.chop
    elsif oldTag.to_s.strip.length == 0
      tags = newTag
    end #end if check length
    return tags.to_s.strip
  end
  
  #filter remove tag
  def self.filter_remove_tags(oldTag, newTag)
    tags = ""
    if oldTag.length > 0 and newTag.length > 0
      arrOldTag = oldTag.split(',')
      arrNewTag = newTag.split(',')
      flag = false
      for i in 0..arrOldTag.length-1
        next if arrOldTag[i].to_s == ""
        if arrNewTag.include?arrOldTag[i]
          flag = true 
        else
          flag = false 
        end 
        #it is new tag
        if flag == false and arrOldTag[i].to_s != ""
          tags = tags + arrOldTag[i].to_s + "," 
        end
      end #end loop for
      #tags = tags.chop
    elsif newTag.to_s.strip.length == 0
      tags = oldTag
    end #end if check length
    return tags.to_s.strip
  end
  
  #string info repeat and assigned to
  def self.str_info_item(repeat = nil, work = nil, name = '', assign = 'Assign to', email='', msg_pending = '')
    strInfo = ""
    if repeat
      strInfo = Utils.str_repeat_info(repeat)
    elsif work[:repeat_type]
      strInfo = Utils.str_repeat_info(work[:repeat_type])
    end
    #for item type
    if work.task_type == WORK_TYPE_TODO
      name = name.to_s.strip
      #if dont have repeat
      if name != ''
        strAssign = ""
        if assign == ASSIGN_PEDDING
          strAssign = msg_pending
        else
          strAssign = assign+" <b>" + name + "</b>"
        end
        if strInfo == ""
          strInfo = " - "+strAssign
        else
          strInfo += ", "+strAssign
        end
      end
    elsif work.task_type == WORK_TYPE_EVENT and work.stask == 0
      #name = location for event
      name = work.location.to_s.strip
      if name != ''
        if strInfo == ""
            strInfo = " - <b>At</b> " + name
        else
            strInfo += ", <b>at</b> " + name
        end
      end
    end
    
    return strInfo.html_safe
  end
  
  #string information
  def self.str_repeat_info(repeat_type)
    strInfo = " - Repeat "
    strInfo += " <b>Daily</b>" if repeat_type.to_s == REPEAT_TYPE_DAILY
    strInfo += " <b>Weekly</b>" if repeat_type.to_s == REPEAT_TYPE_WEEKLY
    strInfo += " <b>Monthly</b>" if repeat_type.to_s == REPEAT_TYPE_MONTHLY
    strInfo += " <b>Yearly</b>" if repeat_type.to_s == REPEAT_TYPE_YEARLY
    return strInfo
  end
  
  #encode
  def self.encodeBase64 text
    begin
      return Base64.strict_encode64(text)
    rescue
      return text
    end
  end
  
  #check hide future task by setting
  def self.check_hide_future_task(setting, task)
    isHide = false
    if setting and setting.HideFutureTask.to_i == 1
      #current = Utils.at_utc(Time.zone.now).to_date
      current = Utils.transparent_tz(Time.zone.now).end_of_day.to_i
      start_date = task.start_time.to_i
      if start_date > current
        isHide = true 
      end 
    end
    return isHide
  end
  
  #@param number, that you want to round up
  #@param up_to, that you want to round up
  #@return rounded up number
  def self.round_up(number, up_to)
    return number if number % up_to == 0   # already a factor of 'up_to'
    return number + up_to - (number % up_to)  # go to nearest factor 'up_to
  end
  
  #round mins 15
  def self.round_mins_15(mins)
    mm = mins
    if(mins % 15 != 0)
      mm = ((mins + 15)/15)*15
    end
    return mm
  end 
  
  #schedule
  # include IceCube
  def self.check_rule_repeat(event, starts, ends, set_tz_support = 0)
    start_at = Time.zone.at(event.start_time) - Time.zone.now.gmt_offset
    end_at = Time.zone.at(event.end_time) - Time.zone.now.gmt_offset
    
    #time zone support
    #if set_tz_support and set_tz_support.to_i == 1
      if event.timezone_key and event.timezone_key.to_i != 0
        secs = 0
        offset = 0
        offset = Utils.convert_tzkey_to_offset(event.timezone_key.to_i)
        cur_offset = Time.zone.now.utc_offset
        secs = cur_offset - offset        
        # st = Utils.at_utc(re.start_time) + secs
        # et = Utils.at_utc(re.end_time) + secs
        start_at = start_at + secs
        end_at = end_at + secs
      end
    #end
    
    durationOfDate = end_at.to_date - start_at.to_date
    
    rule = case event.repeat_type
    when REPEAT_TYPE_YEARLY
      Rule.yearly(event.repeat_interval)
    when REPEAT_TYPE_MONTHLY
      rule = Rule.monthly(event.repeat_interval)
      if event.repeat_flag[0].to_i == 0 # day of month
        rule.day_of_month(start_at.mday)
      else
        weeks = (start_at.mday/7.0).ceil
        if weeks < 5
          rule.day_of_week(start_at.wday => [weeks])
        else
          rule.day_of_week(start_at.wday => [-1])
        end
      end
      rule
    when REPEAT_TYPE_WEEKLY
      rule = Rule.weekly(event.repeat_interval)
      for i in 0..6
        rule.day(i) if event.repeat_flag[i].to_i == 1
      end
      rule
    when REPEAT_TYPE_DAILY
      Rule.daily(event.repeat_interval)
    end
    
    #create schedule
    schedule = nil
    schedule = Schedule.new(start_at, :end_time => ends)
    # add exception date
    if (event.repeat_id)
      exception_dates = RepeatException.select('exception_date')
      exception_dates = exception_dates.where("repeat_id = #{event.repeat_id}")
      exception_dates.each do |e_date|
        schedule.add_exception_time(Time.zone.at(e_date.exception_date) - Time.zone.now.gmt_offset)
      end
    end
    
    schedule.add_recurrence_rule(rule)
    schedule
  end
  
  #@param seconds number
  #@return seconds number, which sub time zone offset
  def self.transparent_tz(time)
    t = case
    when time.is_a?(String)
      tm = Time.parse(time)
      t = Time.utc(tm.year, tm.month, tm.day, tm.hour, tm.min)
    when (time.is_a?(Time) or time.is_a?(DateTime))
      #time = time.to_i
      t = Time.utc(time.year, time.month, time.day, time.hour, time.min)
    when time.is_a?(Date)
      #time = time.to_i
      t = Time.utc(time.year, time.month, time.day, 0, 0)
    end
    return t
  end
  
  #####################################
  # for mSD old version 
  def self.transparent_tz_old_version(time)
    t = case
    when time.is_a?(String)
      t = Time.parse(time)
      Time.utc(t.year, t.month, t.day, t.hour, t.min)
    when (time.is_a?(Time) or time.is_a?(DateTime))
      Time.utc(time.year, time.month, time.day, time.hour, time.min)
    when time.is_a?(Date)
      Time.utc(time.year, time.month, time.day, 0, 0)
    end
    return t
  end
  
  ######### for time zone support to display
  def self.at_tz_support(time, offset)
    cur_offset = Time.zone.utc_offset
    a_hour = offset - cur_offset  
    t = Time.zone.at(time)
    t1 = t - Time.zone.utc_offset
    if offset.to_i < 0
      res = t - Time.zone.utc_offset + (Time.zone.utc_offset - t1.utc_offset) - a_hour
    else
      res = t - Time.zone.utc_offset + (Time.zone.utc_offset - t1.utc_offset) + a_hour
    end
    
    #res = t - Time.zone.utc_offset + (Time.zone.utc_offset - t1.utc_offset)
    return res
  end
  
  #####################################
  
  #@param seconds number
  #@return time is represent in UTC
  # def self.at_utc(time)
    # t = Time.zone.at(time)
    # t1 = t - Time.zone.utc_offset
    # t - Time.zone.utc_offset + (Time.zone.utc_offset - t1.utc_offset)
  # end
  
  def self.at_utc(time)
    # Time.at(time).in_time_zone('UTC')
    t = Time.zone.at(time)
    t1 = t - Time.zone.utc_offset
    t - Time.zone.utc_offset + (Time.zone.utc_offset - t1.utc_offset)
    # dd = t - Time.zone.utc_offset + (Time.zone.utc_offset - t1.utc_offset)
    # dd = dd - 1.hour if dd.dst? && !Time.now.dst?
    # dd = dd + 1.hour if Time.now.dst? && start_time.dst?
  end
  
  def self.create_recurrence_rule(repeat, start_at, end_at = nil, has_exception = true)
    rule = case repeat.repeat_type
    when REPEAT_TYPE_YEARLY
      Rule.yearly(repeat.repeat_interval)
    when REPEAT_TYPE_MONTHLY
      rule = Rule.monthly(repeat.repeat_interval)
      if repeat.repeat_flag[0].to_i == 0 # day of month
        rule.day_of_month(start_at.mday)
      else
        weeks = (start_at.mday/7.0).ceil
        if weeks < 5
          rule.day_of_week(start_at.wday => [weeks])
        else
          rule.day_of_week(start_at.wday => [-1])
        end
      end
      rule
    when REPEAT_TYPE_WEEKLY
      rule = Rule.weekly(repeat.repeat_interval)
      for i in 0..6
        rule.day(i) if repeat.repeat_flag[i].to_i == 1
      end
      rule
    when REPEAT_TYPE_DAILY
      # rule = Rule.daily(repeat.repeat_interval)
      Rule.daily(repeat.repeat_interval)
    end
    rule.until(end_at) if end_at
    
    schedule = Schedule.new(start_at, :end_time => end_at)
    
    # add exception date
    if has_exception == true

      exception_dates = repeat.repeat_exceptions
      exception_dates.each do |e_date|
        # schedule.add_exception_time(Utils.at_utc(e_date.exception_date))
        # ex_time = Time.at(e_date.exception_date)
        ex_time = Utils.at_utc(e_date.exception_date)
        ex_time.change(:hour => start_at.hour, :min => start_at.min, :second => 0)
        schedule.add_exception_time(ex_time)
      end
    end
    
    schedule.add_recurrence_rule(rule)
    schedule
  end
  
  def self.list_subscribe_mailchimp(email, firstname, lastname)
    # h = Hominid::API.new(MAILCHIMP_API_KEY)
    # # Thuc - add grouping
    # # info = {:FNAME => self.FirstName, :LNAME => self.LastName}
    # info = [{:FNAME => firstname, :LNAME => lastname, :GROUPINGS => [{:name => 'Source', :groups => 'mySmartDay'}]}]
    # h.list_subscribe(MAILCHIMP_LIST_ID, email, info, 'html', false, true, true, false)
    # h.list_update_member(MAILCHIMP_LIST_ID, email, {:GROUPINGS => [{:name => 'Source', :groups => 'mySmartDay'}]})
  end
  
  # send meeting invite and invite.ics file
  def self.send_meeting_invitation(event, from_email, action, participants, repeat = nil, tz = nil, uid = nil, options = nil, sendemail = nil)
    if event.is_a?(Hash)
      # convert to object
      event = Task.new(event)
      repeat = Repeat.new(repeat) if repeat
    end
    
    Time.zone = tz if tz
    cal = IcalConverter.new_mysmartday_calendar
    ievent = IcalConverter.task_to_ical(event)
    ievent.uid = "#{uid}@mysmartday.com" if !uid.nil? and event.group_id == 0
    start_time = Utils.at_utc(event.start_time)
    local_zone = start_time.time_zone.to_s
    end_time = Utils.at_utc(event.end_time)
    # ORGANIZER
    ievent.organizer_property = ":MAILTO:#{from_email}"
    if repeat
      #for RE
      # repeat_end = nil
      # repeat_end = Utils.at_utc(repeat.repeat_end) if repeat.repeat_end and repeat.repeat_end != 0
      # schedule = Utils.create_recurrence_rule(repeat, start_time, repeat_end, false)
      # ievent.rrule = schedule.recurrence_rules.first.to_ical
      # m_when = schedule.recurrence_rules.first.to_s + " from #{start_time.strftime('%I:%M %P')} to #{end_time.strftime('%I:%M %P')}"
      
      #only for normal event
      if start_time.to_date == end_time.to_date
        m_when = start_time.strftime('%a, %b %d %Y %I:%M %P - ') + end_time.strftime('%I:%M %P')
      else
        m_when = start_time.strftime(DATE_FORMAT) + ' - ' + end_time.strftime(DATE_FORMAT + ' %Z')
      end
    else
      if start_time.to_date == end_time.to_date
        m_when = start_time.strftime('%a, %b %d %Y %I:%M %P - ') + end_time.strftime('%I:%M %P')
      else
        m_when = start_time.strftime(DATE_FORMAT) + ' - ' + end_time.strftime(DATE_FORMAT + ' %Z')
      end
    end
    cal.add_subcomponent(ievent)
    #check list participants to send
    if participants
      participants.each do |participant|
        #get action for each email need to send
        action = participant[:action] if participant[:action]
        mi_subject =  MI_SUBJECT_INVITE
        subject_time = Utils.at_utc(event.start_time).strftime(DATE_FORMAT)
        title_suffix = ""
        case action
        when MI_UPDATE #action update event
          title_suffix << MI_MODIFIED
          cal.icalendar_method = 'REQUEST'
          ievent.status = 'CONFIRMED'
          mi_subject =  MI_SUBJECT_UPDATE
        when MI_DELETE #action delete event
          title_suffix << MI_CANCELED
          cal.icalendar_method = 'CANCEL'
          ievent.status = 'CANCELLED'
          mi_subject =  MI_SUBJECT_CANCELED
        else
          cal.icalendar_method = 'REQUEST'
          ievent.status = 'CONFIRMED'
        end
        subject = mi_subject + " #{event.title} - #{subject_time}"
        #send mail for each email
        ievent.attendee_property = IcalConverter.email_to_attendee(participant[:email])
        if action != MI_DELETE
          if sendemail.to_i == 1
            t_mail = Thread.new {
              UserMailer.meeting_invitation_email(from_email, subject, event.title, title_suffix, m_when, local_zone, participant, cal.export).deliver
            }
            t_mail.run 
          #UserMailer.meeting_invitation_email(from_email, subject, event.title, title_suffix, m_when, local_zone, participant, cal.export).deliver
          end
        else
          if sendemail.to_i == 1
            t_mail = Thread.new {
              UserMailer.meeting_invitation_email(from_email, subject, event.title, title_suffix, m_when, local_zone, participant, nil).deliver
            }
            t_mail.run
            #UserMailer.meeting_invitation_email(from_email, subject, event.title, title_suffix, m_when, local_zone, participant, nil).deliver
          end
        end
        
        #create notification
        if action != MI_DELETE
          Utils.save_notification_by_item(event.user_id, participant[:email], uid, 1)
        end
        
      end
    end
  end
  
  #send mail assign task
  # send meeting invite and invite.ics file
  def self.send_assign_task(task, projectName, projectColor, from_email, action, to_email = nil, repeat = nil, tz = nil, uid = nil, options = nil)
    at_subject =  AT_SUBJECT_ASSIGN
    title_suffix = ""
    
    cal = IcalConverter.new_mysmartday_calendar
    ievent = IcalConverter.task_to_ical(task)
    ievent.uid = "#{uid}@mysmartday.com" if !uid.nil? and task.group_id == 0
    
    cal.add_subcomponent(ievent)
    
    case action
    when MI_UPDATE #action update event
      title_suffix << MI_MODIFIED
      at_subject =  AT_SUBJECT_UPDATE
      cal.icalendar_method = 'REQUEST'
    when MI_DELETE #action delete event
      title_suffix << MI_CANCELED
      at_subject =  AT_SUBJECT_CANCEL
      cal.icalendar_method = 'CANCEL'
    else
      cal.icalendar_method = 'REQUEST'
    end
    subject = at_subject + " #{task.title}"
    #set method "publish" when import task to ical
    cal.icalendar_method = 'PUBLISH'
    
    #send mail for each email
    m_when = ""
    local_zone = ""
    cal_export = cal.export
    duration = IS_NONE
    start_time = IS_NONE
    end_time = IS_NONE
    if (task.duration.to_i/60) == 0
      duration = (task.duration.to_i%60).to_s + " min(s)" if task.duration.to_i > 0
    else
      duration = (task.duration.to_i/60).to_s + " hour(s) " + (task.duration.to_i%60).to_s + " min(s)" if task.duration.to_i > 0  
    end
    start_time = Utils.at_utc(task.start_time).strftime(DATE_FORMAT) if task.start_time.to_i > 0
    end_time = Utils.at_utc(task.end_time).strftime(DATE_FORMAT) if task.end_time.to_i > 0
    toEmail = task.assignee_email
    toEmail = to_email if to_email
    
    t_mail = Thread.new {
      UserMailer.assign_task_email(from_email, subject, task.title, projectName, projectColor, title_suffix, m_when, local_zone, toEmail, duration, start_time, end_time, task, cal_export).deliver
    }
    t_mail.run
    #create notification
    # if action != MI_DELETE
      # Utils.save_notification_by_item(task.user_id, task.assignee_email, task.id, 1)
    # end
  end
  
  #Processing and rounding the "hours/days" pending
  def self.process_pending_status(shared_date)
    msg_pending = ''
    pending_day = 0
    pending_hour = 0
    pending_second = 0
    if shared_date.to_i != 0
      pending_day = (Time.zone.now.to_date - Time.zone.at(shared_date).to_date).to_i
      pending_hour = ((Time.zone.now - Time.zone.at(shared_date))/1.hour).to_i
      pending_second = ((Time.zone.now - Time.zone.at(shared_date))/1.second).to_i
    else
      pending_day = -1
    end 
    if pending_day == -1
      msg_pending = "pending ..."
    elsif pending_day == 0
      temp_hour = pending_hour
      if pending_second >= 0 # round up to 1 hour
        pending_hour += 1
      end   
      
      if temp_hour > 12 or ( temp_hour == 12 and pending_second > 0) # round up to 1 day
        msg_pending = "pending 1 day"
      else
        if pending_hour == 1 # comparing to show one day or many days
          msg_pending = "pending " + pending_hour.to_s + " hour"
        else
          msg_pending = "pending " + pending_hour.to_s + " hours"
        end
      end
    else # day >= 1
      temp_hour = pending_hour - ((pending_hour/24).to_i*24)
      if temp_hour > 12 or ( temp_hour == 12 and pending_second > 0) # round up to 1 day: if hours >= 12
        pending_day += 1
      end
      
      if pending_day == 1 # comparing to show one day or many days
        msg_pending = "pending " + pending_day.to_s + " day"
      else
        msg_pending = "pending " + pending_day.to_s + " days"
      end
    end
    return msg_pending.to_s
  end
  # this method calculate top, bottom, height,.. 
  # to draw an event on day calendar
  def self.make_event_to_draw(event, beggin_day, end_day)
    # event.color = event.color.to_i.to_s(16)
    
    if event[:st] <= beggin_day
      # it is 0:00
      # event[:top] = -1393 + 58*beggin_day.hour + beggin_day.min
      event[:top] = -1393
    else
      event[:top] = -1393 + 58*event[:st].hour + event[:st].min
    end
    
    if event[:et] >= end_day
      event[:bottom] = -1393 + 58*23 + 59
    else
      event[:bottom] = -1393 + 58*event[:et].hour + event[:et].min
    end
    event[:height] = event[:bottom] - event[:top]
    # event
  end
  
  #generate token by task id
  def self.generate_token_by_id(task_id)
    token = Base64.strict_encode64(task_id.to_s + "," + ActiveSupport::SecureRandom.hex(16))
    return token
  end
  
  #array color
  def self.color_hex(ind)
    hexColor = [
      0x18a4dc, 0xffa024, 0xbea27e, 0xaee100, 0xbbac80, 0xb95fb9, 0xa489a4, 0xb69191,
      0x5c85d6, 0xef7234, 0xa8a86b, 0x17d321, 0xe3e316, 0x855cd6, 0xad96db, 0xa2a1a1,
      0x3434f5, 0xd65c5c, 0x987021, 0x108e78, 0xffd414, 0x70a8a2, 0xd57696, 0x737373,
      0x115192, 0x76332c, 0x91683f, 0x38af3f, 0xbaa133, 0x33d7c1, 0x6e4f5e, 0x4c4c4c
     ]
    return hexColor[ind] 
  end
  
  ################ history ###########
  def self.create_history(item_id = 0, history_type = 0, root_id = 0, root_name = '', target_id = 0, target_name = '')
    htr = History.new()
    htr.create_time = Time.zone.now.to_i
    htr.item_id = item_id
    #define history type: =0: created, =1: edited, =2: assigned, =3: re-assigned, =4: rejected, 
    # =5: accepted, =6: done, =7 un-done, =8: remove assign
    htr.history_type = history_type
    htr.root_id = root_id
    htr.root_name = root_name
    htr.target_id = target_id
    htr.target_name = target_name
    htr.save
  end
  
  ##############################################################
  
  def self.select_list_members_in_project(owner_id = 0, cate_id = 0, assignee_email = '', item_status = 0, completed_status = 0)
    stt = ''
    #if user accepted the task, user can not re-assign to another member
    if item_status.to_i == 1 or completed_status.to_i == 1
      stt = 'disabled=true'  
    end
    str = '<select id="taskAssignTo" class="memberLst" '+stt.to_s+' name="work[assignee_email]" '
    str << ' data-assignee="' +assignee_email.to_s+ '"' #for check when user re-assign to other user
    str << ' data-status="' +item_status.to_s+ '"' #to know the status of assignee
    str << ' >' #close <select> tag
    #str << '<option value="">None</option>'
    #get owner of project shared
    owner = nil
    if owner_id.to_i == 0 #auto find owner project
      proj = Category.find_by_id(cate_id)
      owner = User.find_by_UserID(proj.user_id) if proj
    else #get owner from parameter
      owner = User.find_by_UserID(owner_id)      
    end
    members = GroupsMembers.get_mem_id_by_group_id(cate_id) if cate_id
    sel = ''
    if owner
      email = Base64.decode64(owner.UserName).to_s.strip.downcase
      sel = 'selected="selected"' if email.to_s.strip.downcase == assignee_email.to_s.strip.downcase
      #str << '<option '+sel+' value="'+email+'">'+email+' - Owner</option>'
      str << '<option '+sel+' value="">'+email+' - Owner</option>' #the same user REJECT the task
    end
    #members
    if members and members.length > 0
      members.each do |mem|
        item = {}
        #item[:permission] = m.permission
        email = mem.email.to_s.strip.downcase
        #item[:is_owner] = 0
        sel = ''
        sel = 'selected="selected"' if email.to_s.strip.downcase == assignee_email.to_s.strip.downcase
        str << '<option '+sel+'value="'+email+'">'+email+'</option>'
      end
    end 
    str << "</select>"
    return str.to_s.html_safe
  end
  
  #time zone support
  def self.select_timezone_support(key = 0, sel_id = '', sel_nm = '', sel_clss = '', isSet = 0)
    tz = TimeZoneSupport.get_time_zone()
    sel_box = '<select id="'
    sel_box << sel_id.to_s
    sel_box << '" name="'
    sel_box << sel_nm.to_s
    sel_box << '" class="'
    sel_box << sel_clss.to_s
    sel_box << '" >'
    
    tz_temp = Time.zone.name
    
    if tz and tz.length > 0
      for i in 0..tz.length - 1
        item = tz[i]
        next if isSet == 1 and item[:timezone_key].to_i == 0 #dont load Floating timzone for setting
        tz_key = item[:timezone_key]
        tz_name = item[:timezone_name]
        #process time zone
        tz_name = tz_name[11,tz_name.length]
        Time.zone = tz_name.to_s.strip
        tz_name = "(GMT#{Time.zone.now.strftime('%z')}) " + tz_name.to_s 
        
        sel= ''
        sel = 'selected="selected"' if key and key.to_i == tz_key.to_i 
        
        sel_box << '<option '
        sel_box << sel.to_s
        sel_box << ' value="'
        sel_box << tz_key.to_s
        sel_box << '" data-offset="'
        sel_box << item[:offset].to_s
        sel_box << '" data-tz_name="'
        sel_box << tz_name.to_s.gsub(/_/, ' ')
        sel_box << '">'
        sel_box << tz_name.to_s.gsub(/_/, ' ')
        sel_box << '</option>'
      end
    end
    sel_box << '</select>'
    
    #set again timezone
    Time.zone = tz_temp
    
    sel_box.html_safe
  end
  
  #calculate offset from time zone key
  def self.convert_tzkey_to_offset(tz_key = 0)
    t_offset = tz_key.to_i.abs%128
    #t_offset = -t_offset if tz_key < 0
    mm = (t_offset.to_i.abs%8)
    mm = mm*15 if mm < 3
    offset = ((t_offset.to_i.abs/8)*60 + mm)*60
    offset = -offset if tz_key < 0
    return offset
  end
  
  #generate time zone
  # id = max order *64 + hour*4 + minute
  #hour: 0 - 14, minute: 0 - 3
  #minute: 1: 15', 2:30', 3:45'
  def self.generate_tz()
    res = Array.new
    #a = ActiveSupport::TimeZone.all
    a = TZInfo::Timezone.all
    ind = 1
    a.each do |aa|
      Time.zone = aa.name
      offset = Time.zone.now.utc_offset
      min = offset.to_i/60
      hh = (min.to_f/60).to_i
      mm = min%60
      m = 0
      m = 7 if mm == 7
      m = 1 if mm == 15
      m = 2 if mm == 30
      m = 3 if mm == 45
      
      id = ind*128 + hh.abs*8 + m
      id = -id if hh < 0
      
      next if change_name_tz(aa.name)
      
      item = {}
      #item[:zone] = Time.zone.now.strftime('%z')
      item[:id] =  id
      item[:name] = "(GMT#{Time.zone.now.strftime('%z')}) "+ aa.name
      item[:offset] = offset
      #item[:hour] = hh
      #item[:min] = mm 
      res << item
      ind = ind + 1
    end
    return res
  end
  
  def self.change_name_tz(name)
    n = false
    n = true if name.to_s == 'Etc/GMT+1'
    n = true if name.to_s == 'Etc/GMT+2'
    n = true if name.to_s == 'Etc/GMT+3'
    n = true if name.to_s == 'Etc/GMT+4'
    n = true if name.to_s == 'Etc/GMT+5'
    n = true if name.to_s == 'Etc/GMT+6'
    n = true if name.to_s == 'Etc/GMT+7'
    n = true if name.to_s == 'Etc/GMT+8'
    n = true if name.to_s == 'Etc/GMT+9'
    n = true if name.to_s == 'Etc/GMT+10'
    n = true if name.to_s == 'Etc/GMT+11'
    n = true if name.to_s == 'Etc/GMT+12'
    
    n = true if name.to_s == 'Etc/GMT-1'
    n = true if name.to_s == 'Etc/GMT-2'
    n = true if name.to_s == 'Etc/GMT-3'
    n = true if name.to_s == 'Etc/GMT-4'
    n = true if name.to_s == 'Etc/GMT-5'
    n = true if name.to_s == 'Etc/GMT-6'
    n = true if name.to_s == 'Etc/GMT-7'
    n = true if name.to_s == 'Etc/GMT-8'
    n = true if name.to_s == 'Etc/GMT-9'
    n = true if name.to_s == 'Etc/GMT-10'
    n = true if name.to_s == 'Etc/GMT-11'
    n = true if name.to_s == 'Etc/GMT-12'
    n = true if name.to_s == 'Etc/GMT-13'
    n = true if name.to_s == 'Etc/GMT-14'
    
    n = true if name.to_s == 'Etc/GMT'
    n = true if name.to_s == 'Etc/GMT+0'
    n = true if name.to_s == 'Etc/GMT-0'
    n = true if name.to_s == 'Etc/GMT0'
    n = true if name.to_s == 'Etc/Greenwich'
    n = true if name.to_s == 'Etc/UCT'
    n = true if name.to_s == 'Etc/UTC'
    n = true if name.to_s == 'Etc/Universal'
    n = true if name.to_s == 'Etc/Zulu'
    
    n = true if name.to_s == 'GMT0'
    n = true if name.to_s == 'GMT+0'
    n = true if name.to_s == 'GMT-0'
    n = true if name.to_s == 'UCT'
    
    return n
  end
  
  def self.arrayTimeZone()
    arr = "45888,38303,38431,-17184,-46872,46026,66768,-11032,59032,58914,-59832,-47928,-69208,43216,44370,-60088,48784,55192,59488,-67896,-11672,69536,67480,35152,66952,-7960,-14368,-19992,-46112,39832,-12328,-60328,-68008,-68920,-9800,-48552,56960,43728,-68520,69248,67136,57344,69376,-65880,48408,67392,-12440,-18848,-24472,-47506,35904,-47152,61027,-67648,-46496,42384,-61368,792,-47408,31936,60896,50320,-46224,-23072,-27424,-47264,-23328,69760,-68432,46608,-14264,6528,56584,40384,53144,56712,32176,40640,60447,44880,39984,66832,60575,-47792,31530,-17688,60703,-57168,-59952,45264,-48176,-60208,48904,-18216,33816,45002,49416,59336,-48032,57280,30504,-48288,67272,-68784,59536,59664,-68128,69640,-68256,45648,61248,-48672,45776,-67784,-68640,-46760,-47672,-47016,42120,-61104,45386,-46360,-59176,40920,38175,38584,-69048"
  end
  
  ##############################################################
  
end