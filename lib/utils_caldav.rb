# require 'base64'

class UtilsCaldav
  require 'digest/md5'
  require 'digest'
  
  include Hominid

  #merge caldav data
  def self.merge_caldav_data(user_id, set_enable)
    #caldav enable
    if set_enable.to_i == 1
      user = User.find_by_UserID(user_id)
      #user has caldav
      if user and user.PrincipalUri.to_s != ''
        principal_uri = user.PrincipalUri.to_s
        #get list cals existed on caldav and msd
        
        #get list new cals on msd to update on caldav
        push_data_msd_to_caldav(user_id, principal_uri)
        
        #############################################
        #update list new cals on caldav to update on msd
        #update_data_caldav_to_msd(user_id, principal_uri)
        
        #delete new calendars from ical
        delete_new_cals_created_by_ical(user_id, principal_uri)
        #############################################
        #get list cals deleted on msd to delete on caldav
        
        #############################################
        #merge calendar objects data from caldav
        update_calObj_caldav_to_msd(user_id, principal_uri)
                
        #############################################
        #get list cals deleted on caldav to delete on msd
        delete_data_msd_via_caldav(user_id, principal_uri)
        
        #update calendars nameexisted
        update_calendar_name_from_msd(user_id, principal_uri)
        
      end
      
    else #caldav disable
      
    end
  end
  
  #for first active caldav
  def self.push_msd_data_first(user_id, set_enable)
    #caldav enable
    if set_enable.to_i == 1
      user = User.find_by_UserID(user_id)
      #user has caldav
      if user and user.PrincipalUri.to_s != ''
        principal_uri = user.PrincipalUri.to_s
        #get list cals existed on caldav and msd
        
        #get list new cals on msd to update on caldav
        push_data_msd_to_caldav(user_id, principal_uri)
        
        #############################################
        #update list new cals on caldav to update on msd
        #update_data_caldav_to_msd(user_id, principal_uri)
        #############################################
        #get list cals deleted on msd to delete on caldav
        
        #############################################
        #merge calendar objects data from caldav
        #update_calObj_caldav_to_msd(user_id, principal_uri)
                
      end
      
    else #caldav disable
      
    end
  end
  
  #push new data from msd to caldav
  def self.push_data_msd_to_caldav(user_id, principal_uri)
    #create calendars, logic
    cates = Category.get_new_categories_for_caldav_by_user(user_id)
    if cates and cates.length > 0
      cates.each do |cate|
        create_new_caldav_from_msd(user_id, principal_uri, cate)
      end
    end
  end
  
  #create new calendar
  def self.create_new_caldav_from_msd(user_id, principal_uri, cate)
    caldav = CalendarDav.new
    caldav.principaluri = principal_uri
    
    cal_existed = CalendarDav.get_caldav_existed_by_name(cate.name, principal_uri)
    calname = cate.name
    hasRename = false
    if cal_existed and cal_existed.length > 0
      calname = cate.name.to_s + RENAME_CAL
      hasRename = true
    end
    #set time zone for calendar from msd
    tz_cal = IcalConverter.new_mysmartday_calendar
    swSetting = SwSetting.find_by_UserID(user_id)
    if swSetting
      #tz_cal.tzid = swSetting.TimeZone 
      #tz_cal.tzoffsetto = 
    end
    
    caldav.displayname = calname
    str = user_id.to_s + Time.zone.now.to_s + ActiveSupport::SecureRandom.hex(16).to_s
    caldav.uri = Digest::MD5.hexdigest(str)
    caldav.components = CAL_COMPONENTS.to_s
    #caldav.timezone = tz_cal.export.to_s
    caldav.save
    
    #update to category
    cate.caldav_id = caldav.id
    cate.name = calname if hasRename
    cate.update_attributes(cate)
    
    #push calendar object
    push_calobj_msd_to_caldav(user_id, cate.id, caldav.id)
  end
  
  #update new data from caldav to msd
  def self.update_data_caldav_to_msd(user_id, principal_uri)
    cals = CalendarDav.get_new_cals_created_by_ical(user_id, principal_uri)
    if cals and cals.length > 0
      #update calendar to msd
      cals.each do |cal|
        cate = Category.new
        cate.user_id = user_id
        cate.name = cal.displayname
        #cate.color = "1615068" #set default
        r = Random.new
        cate.color = Utils.color_hex(r.rand(0...31)) #set default
        cate.order_category = Category.get_max_order(user_id)
        cate.source = SOURCE_EXTERNAL
        cate.caldav_id = cal.id
        cate.sync_caldav = 1 #set this project is sync caldav
        cate.save
        
        #get data of new calendar
        CalendarObjDav.get_new_calobj_newcal_by_ical(user_id, principal_uri,cal.id)
      end
    end
  end
  
  #delete new calendars which created by ical/external apps
  def self.delete_new_cals_created_by_ical(user_id, principal_uri)
    CalendarObjDav.delete_calobj_created_by_ical(user_id, principal_uri)
    CalendarDav.delete_cal_created_by_ical(user_id, principal_uri)
  end
  
  #update data msd --> caldav
  
  #update data caldav --> msd
  
  #delete data msd --> caldav
  def self.delete_data_msd_via_caldav(user_id, principal_uri)
    #delete categories
    del_cates = Category.get_categories_caldav_by_user_to_delete(user_id, principal_uri)
    if del_cates and del_cates.length > 0
      del_cates.each do |cate|
        #delete category's data on msd
        if cate.source.to_i == 0
          #create again calendar on caldav
          cate.caldav_id = 0
          cate.update_attributes(cate)
          Task.reset_tasks_calobj(user_id, cate.id)
          create_new_caldav_from_msd(user_id, principal_uri, cate)
        else #delete external calendar
          cate.destroy
        end
      end
    end
    #delete calobj data by ical
    del_tasks = Task.get_tasks_to_delete(user_id)
    if del_tasks and del_tasks.length > 0
      del_tasks.each do |task|
        task.destroy()
      end
    end
    #update ctag for calendars
    cal = CalendarDav.find_by_principaluri(principal_uri)
    if cal
      cal.ctag = cal.ctag.to_i + 1
      cal.update_attributes(cal)
    end
  end
  
  #delete data caldav --> msd
  def self.delete_data_caldav_via_msd(caldav_id)
    if caldav_id and caldav_id.to_i != 0
      #begin
      #cal = CalendarDav.find(caldav_id)
      #if cal and cal.id
        CalendarObjDav.delete_data_cal(caldav_id)
        CalendarDav.delete_calendar_by_id(caldav_id)
        #cal.destroy
      #end
      #rescue
      #end
    end
  end
  
  ################################
  #for items of calendar
  #push calendar object from msd to caldav
  def self.push_calobj_msd_to_caldav(user_id, cate_id, cal_id)
    #cate = Category.Smartday(user_id).find(cate_id)
    #file_name = cate.name
    sql_cate = ' AND category_id = ' + cate_id.to_s
    # get data from db
    #tasks = Task.Smartday(user_id).where("task_type IN (#{WORK_TYPE_EVENT}, #{WORK_TYPE_TODO}) AND group_id = 0" + sql_cate).includes([:alerts,:participants, :children, [:repeat => :repeat_exceptions]])
    tasks = Task.get_tasks_by_userid_cateid(user_id, cate_id)
    # normal task (no recurrence)
    if tasks and tasks.length > 0
      #tasks.each do |task|
      for i in 0..tasks.length - 1
        task = tasks[i]
        save_calobj_to_caldav(user_id, cal_id, task)
      end #end for tasks
    end#end if check length
  end
  
  #save calendar object msd to caldav
  def self.save_calobj_to_caldav(user_id, cal_id, task, isChange = 0, cal_id_old = 0)
    # create vcalendar
    cal = IcalConverter.new_mysmartday_calendar
    calobj = nil
    sequence = 2
    #uri = task.id.to_s + UUID_DOMAIN_MSD.to_s + ICS_EXT.to_s
    
    task.title = task.title.to_s.strip
    
    etag = user_id.to_s + Time.zone.now.to_s + ActiveSupport::SecureRandom.hex(16).to_s
    uri = Digest::MD5.hexdigest(etag) + ICS_EXT.to_s
    
    if task.calobj_id != 0# update sequence
      calobj = CalendarObjDav.get_calobj_by_id(task.calobj_id)
      if calobj
        #parse calendar data to get sequence from ical data
        components = RiCal.parse_string(calobj.calendardata.to_s)
        #check type of task
        if components and (components.first.events or components.first.todos)
          #event
          components.first.events.each do |i_obj|
            #get sequence for update data
            sequence = i_obj.sequence.to_i + 1
            uri = i_obj.uid if isChange == 0 #for not convert type
            break
          end
          #todo
          components.first.todos.each do |i_obj|
            #get sequence for update data
            sequence = i_obj.sequence.to_i + 1
            uri = i_obj.uid if isChange == 0 #for not convert type
            break
          end
          
        end
      end
    end
    #set time
    start_time = Utils.at_utc(task.start_time)
    
    obj = IcalConverter.task_to_ical(task, sequence, uri)
    exception_dates = []
    if task.repeat
      repeat = task.repeat
      exception_dates = repeat.repeat_exceptions.map { |ex| Utils.at_utc(ex.exception_date).to_date.to_s }
      end_time = nil
      repeat_end = Utils.at_utc(repeat.repeat_end) if repeat.repeat_end and repeat.repeat_end != 0
      schedule = Utils.create_recurrence_rule(repeat, start_time, repeat_end, false)
      obj.rrule = schedule.recurrence_rules.first.to_ical + ";INTERVAL=#{repeat.repeat_interval}"
    end
    cal.add_subcomponent(obj)
    # get children tasks
    if task.children and task.children.length > 0
      task.children.each do |child|
        ind = exception_dates.index(Utils.at_utc(child.start_time).to_date.to_s)
        exception_dates.delete_at(ind) if ind
        # convert child
        ex_event = IcalConverter.task_to_ical(child)
        # set recurrence id
        if task.group_id != 0
          obj.recurrence_id = Utils.at_utc(child.start_time).change(:hour => start_time.hour, :min => start_time.min)
        end
        cal.add_subcomponent(ex_event)
      end
    end
    if exception_dates and exception_dates.length > 0
      exception_dates.each do |ex|
        t = Time.zone.parse(ex).change(:hour => start_time.hour, :min => start_time.min)
        obj.add_exdate(t) 
      end
    end
    #calendar obj
    caldav = CalendarDav.find(cal_id)
    
    #save calendar object
    #etag = user_id.to_s + Time.zone.now.to_s + ActiveSupport::SecureRandom.hex(16).to_s
    now = Time.zone.now.to_i
    if task.calobj_id != 0# update
      if calobj #has existed calobj
        if isChange and (isChange.to_i == 1 or isChange.to_i == 2)
          # #update for change type or change calendar
          # #delete old item
          # calobj.destroy()
          if task.task_type.to_i == WORK_TYPE_TODO.to_i or (task.task_type.to_i == WORK_TYPE_EVENT.to_i and task.stask == 1)
            calobj.destroy()
          end
          #for case change calendar
          if isChange.to_i == 2 and cal_id_old.to_i != 0
            caldav_old = CalendarDav.find(cal_id_old)
            caldav_old.ctag = caldav_old.ctag.to_i + 1
            caldav_old.update_attributes(caldav_old)
          end
          if task.task_type.to_i == WORK_TYPE_TODO.to_i
            #create new item when change type
            calobj_new = CalendarObjDav.new
            calobj_new.calendarid = cal_id
            calobj_new.lastmodified = now
            calobj_new.msd_updated = now
            task_type = COMPONENT_EVENT
            task_type = COMPONENT_TODO if task.task_type.to_i == WORK_TYPE_TODO.to_i
            calobj_new.componenttype = task_type
            #calobj_new.uri = Digest::MD5.hexdigest(etag) + ICS_EXT.to_s
            calobj_new.uri = uri
            calobj_new.calendardata = cal.export.to_s
            calobj_new.size = calobj_new.calendardata.to_s.size.to_i
            calobj_new.etag = Digest::MD5.hexdigest(etag)
            calobj_new.save
            
            #update to task
            task.calobj_id = calobj_new.id
            task.update_attributes(task)
            
          ### change project event with exist caldav  
          elsif task.task_type.to_i == WORK_TYPE_EVENT.to_i and task.stask == 0 #and isChange.to_i == 2
            calobj.lastmodified = now
            calobj.msd_updated = now
            calobj.calendarid = cal_id
            calobj.calendardata = cal.export.to_s
            calobj.size = calobj.calendardata.to_s.size.to_i
            calobj.etag = Digest::MD5.hexdigest(etag)
            calobj.update_attributes(calobj)
            
            #task.update_attributes(task)
          else # for change project event out of caldav
            task.calobj_id = 0
            task.update_attributes(task)
          end
          caldav.ctag = caldav.ctag.to_i + 1 if caldav
          
        else #only update normal
          calobj.lastmodified = now
          calobj.msd_updated = now
          calobj.calendarid = cal_id
          calobj.calendardata = cal.export.to_s
          calobj.size = calobj.calendardata.to_s.size.to_i
          calobj.etag = Digest::MD5.hexdigest(etag)
          calobj.update_attributes(calobj)
        end 
      end
    else #create new
      if task.task_type.to_i == WORK_TYPE_TODO.to_i or (task.stask == 0 and task.task_type.to_i == WORK_TYPE_EVENT.to_i) #only create event when task is not ptask
        calobj = CalendarObjDav.new
        calobj.calendarid = cal_id
        calobj.lastmodified = now
        calobj.msd_updated = now
        task_type = COMPONENT_EVENT
        task_type = COMPONENT_TODO if task.task_type.to_i == WORK_TYPE_TODO.to_i
        calobj.componenttype = task_type
        #calobj.uri = Digest::MD5.hexdigest(str) + ICS_EXT.to_s
        calobj.uri = uri
        calobj.calendardata = cal.export.to_s
        calobj.size = calobj.calendardata.to_s.size.to_i
        calobj.etag = Digest::MD5.hexdigest(etag)
        calobj.save
        
        #update to task
        task.calobj_id = calobj.id
        task.update_attributes(task)
      end
    end
    #set ctag increase 1 to know user update calendar
    if caldav
      caldav.ctag = caldav.ctag.to_i + 1
      caldav.update_attributes(caldav)
    end
  end
  
  #update calendar object from caldav to msd
  def self.update_calObj_caldav_to_msd(user_id, principal_uri, cal_id = nil)
    #get new calobj which created from ical
    if cal_id and cal_id != 0 #for new calendar which create by ical
      calobjs_new = CalendarObjDav.get_new_calobj_newcal_by_ical(cal_id)
    else #for calendar existed
      calobjs_new = CalendarObjDav.get_new_calobj_by_ical(user_id)
    end
    if calobjs_new and calobjs_new.length > 0
      calobjs_new.each do |calobj|
        #get category via calobj
        cate_id = 0
        cate = Category.find_by_caldav_id(calobj.calendarid)
        cate_id = cate.id if cate
        #parse data from ical format
        components = RiCal.parse_string(calobj.calendardata.to_s)
        # if cate_id != 0 and components
        if cate_id and components
          if components.first.events
            
            #get time zone to add to time zone key
            tz = components.first.timezones[0].tzid if components.first.timezones[0]
            # aa = tz.subcomponents
            
            components.first.events.each do |i_obj|
              #get sequence for update data
              eve = IcalConverter.ical_to_task(i_obj, user_id, cate_id, WORK_TYPE_EVENT)
              eve.calobj_id = calobj.id
              
              ##################################
              #set time zone key
              if tz and tz.to_s != ''
                Time.zone = tz
                offset = Time.zone.now.utc_offset
                tzsp = TimeZoneSupport.find_by_offset(offset)
                if tzsp
                  eve.timezone_key = tzsp.timezone_key
                end
              end
              ##################################
              
              eve.save
              #check repeat exception
              if i_obj and i_obj.rrule_property and i_obj.rrule_property.first
                
              end
            end
          end
          
          #for todos
          if components.first.todos
            components.first.todos.each do |todo|
              task = IcalConverter.ical_to_task(todo, user_id, cate_id, WORK_TYPE_TODO)
              task.calobj_id = calobj.id
              task.save
            end
          end
        end #components
        
      end #calobjs_new
    end #if calobjs_new
    #update calobj existed on caldav and msd to merge data
    update_calobj_existed_caldav_to_msd(user_id)
  end

  #update calendar object existed
  def self.update_calobj_existed_caldav_to_msd(user_id)
    calobjs_existed = CalendarObjDav.get_calobjs_existed_updated_by_ical(user_id)
    if calobjs_existed and calobjs_existed.length > 0
      calobjs_existed.each do |calobj|
        #get category via calobj
        cate_id = 0
        cate = Category.find_by_caldav_id(calobj.calendarid)
        cate_id = cate.id if cate
        #find msd item
        task = Task.find_by_calobj_id(calobj.id)
        #parse data from ical format
        components = RiCal.parse_string(calobj.calendardata.to_s)
        if cate_id != 0 and components and task
          if components.first.events
            
            #get time zone to add to time zone key
            tz = components.first.timezones[0].tzid if components.first.timezones[0]
            
            components.first.events.each do |i_obj|
              #get sequence for update data
              eve = IcalConverter.ical_to_task(i_obj, user_id, cate_id, WORK_TYPE_EVENT)
              eve.calobj_id = calobj.id
              
              ##################################
              #set time zone key
              if tz and tz.to_s != ''
                Time.zone = tz
                offset = Time.zone.now.utc_offset
                tzsp = TimeZoneSupport.find_by_offset(offset)
                if tzsp
                  eve.timezone_key = tzsp.timezone_key
                end
              end
              ##################################
              
              eve.save
              #update link
              Hyperlink.update_root_id(task.id, eve.id, user_id)
              Hyperlink.update_target_id(task.id, eve.id, user_id)
              task.destroy()
              #update for CalendarObjDav
              calobj.msd_updated = calobj.lastmodified 
            end
          end
          
          #for todos
          if components.first.todos
            components.first.todos.each do |todo|
              tsk = IcalConverter.ical_to_task(todo, user_id, cate_id, WORK_TYPE_TODO)
              tsk.calobj_id = calobj.id
              tsk.save
              #update link
              Hyperlink.update_root_id(task.id, tsk.id, user_id)
              Hyperlink.update_target_id(task.id, tsk.id, user_id)
              task.destroy()
              #update for CalendarObjDav
              calobj.msd_updated = calobj.lastmodified
            end
            calobj.update_attributes(calobj)
          end
        end #components
      end #end for calobj
    end #end check if
  end

  #create task 
  def self.create_work_to_caldav(user_id, work)
    ################################
    #for caldav
    if work.task_type == WORK_TYPE_TODO or work.task_type == WORK_TYPE_EVENT# and @work.calobj_id != 0
      cal_id = 0 #dont need cal_id when update calobj item
      cate = Category.find(work.category_id)
      if cate and cate.caldav_id.to_i != 0 #have caldav
        cal_id = cate.caldav_id
        wrk = Task.get_task_by_userid_cateid(user_id, cate.id, work.id)
        UtilsCaldav.save_calobj_to_caldav(user_id, cal_id, wrk[0])
      end
    end
    ################################
  end
  
  #delete calendar object
  def self.delete_calobj_by_id(calobj_id)
    calobj = nil
    begin
    calobj = CalendarObjDav.find(calobj_id) if calobj_id and calobj_id.to_i != 0
    if calobj
      cal = CalendarDav.find(calobj.calendarid)
      if cal
        cal.ctag = cal.ctag.to_i + 1
        cal.update_attributes(cal)
      end
      calobj.destroy()
    end
    rescue
    end
  end
  
  #delete caldav data
  def self.delete_all_data_user(principal_uri, email)
    #delete calendar data
    cals = CalendarDav.get_all_caldav_by_principaluri(principal_uri)
    if cals and cals.length > 0
      cals.each do |cal|
        #delete calendar objects
        CalendarObjDav.delete_data_cal(cal.id)
        CalendarDav.delete_calendar_by_id(cal.id)
      end
    end
    #delete principal
    PrincipalDav.delete_principal(principal_uri)
    #delete user dav
    UserDav.delete_user_dav(email)
  end

  ############################################################
  # export item to ics
  def self.export_item_to_ics(tasks)
    return nil if !tasks or (tasks and tasks.length == 0)
    # create vcalendar
    cal = IcalConverter.new_mysmartday_calendar
    # normal task (no recurrence)
    tasks.each do |task|
      start_time = Utils.at_utc(task.start_time)
      obj = IcalConverter.task_to_ical(task)
      exception_dates = []
      if task.repeat
        repeat = task.repeat
        exception_dates = repeat.repeat_exceptions.map { |ex| Utils.at_utc(ex.exception_date).to_date.to_s }
        end_time = nil
        repeat_end = Utils.at_utc(repeat.repeat_end) if repeat.repeat_end and repeat.repeat_end != 0
        schedule = Utils.create_recurrence_rule(repeat, start_time, repeat_end, false)
        obj.rrule = schedule.recurrence_rules.first.to_ical + ";INTERVAL=#{repeat.repeat_interval}"
      end
      cal.add_subcomponent(obj)
      # get children tasks
      if task.children
        task.children.each do |child|
          ind = exception_dates.index(Utils.at_utc(child.start_time).to_date.to_s)
          exception_dates.delete_at(ind) if ind
          # convert child
          ex_event = IcalConverter.task_to_ical(child)
          # set recurrence id
          if task.group_id != 0
            obj.recurrence_id = Utils.at_utc(child.start_time).change(:hour => start_time.hour, :min => start_time.min)
          end
          cal.add_subcomponent(ex_event)
        end
      end
      exception_dates.each do |ex|
        t = Time.zone.parse(ex).change(:hour => start_time.hour, :min => start_time.min)
        obj.add_exdate(t) 
      end
    end
    #return item
    return cal
  end
  
  #update_calendar_name_from_msd(user_id, principal_uri)
  def self.update_calendar_name_from_msd(user_id, principal_uri = nil)
    cals = Category.get_cates_name_for_caldav(user_id)
    if cals and cals.length > 0
      cals.each do |cal|
        #update from ical to msd
        caldav = CalendarDav.find_by_id(cal.caldav_id)
        if cal.ctag.to_i > cal.msd_updated.to_i
          #cal.name = cal.displayname
          #cal.update_attributes(cal)
          if caldav
           caldav.displayname = cal.name
           caldav.msd_updated = caldav.ctag
           caldav.update_attributes(caldav)
          end
        elsif cal.name.to_s != cal.displayname.to_s
           #update from msd to caldav
           if caldav
             caldav.displayname = cal.name
             ctag = caldav.ctag.to_i + 1
             caldav.ctag = ctag  
             caldav.msd_updated = ctag 
             caldav.update_attributes(caldav)
           end
        end
        
      end#end for
    end #end if
  end
  
  #update project id
  def self.update_project_id_not_in_caldav(task_id, caldav_id_old)
    if task_id
      task = Task.find(task_id)
      if task
        if task.calobj_id and task.calobj_id.to_i != 0
          calobj = CalendarObjDav.find(task.calobj_id)
          calobj.destroy() if calobj
          
          task.calobj_id = 0
          task.update_attributes(task)
          #find calendar
          caldav = CalendarDav.find(caldav_id_old)
          if caldav
            caldav.ctag = caldav.ctag.to_i + 1
            caldav.update_attributes(caldav)
          end #end project
        end
      end #end check task object
    end #end check task id
  end #end method
  
end

