class SettingsController < ApplicationController
  
  # respond_to :html, :js
  
  # set default layout 
  layout "vigcal_ajax"
  # layout "vigcal"
  
  def index
    
  end
  #tab calendar
  def calendars
    userID = session[SESSION_USER_ID]
    sql = " userID = " + userID.to_s
    @cals = Array.new()
    @cals = Awccalendar.where(sql)
    
  end
  #save calendar
  def saveCalendar
    calName = params[:calnm]
    calColorId = params[:clrId]
    res = {:error => 1, :description => "Create fail."}
    if calName and calColorId
      email = session[SESSION_USER_EMAIL]
      userID = session[SESSION_USER_ID]
      cal = Awccalendar.new()
      cal.calendarName = calName.to_s.strip
      cal.colorImageId = calColorId
      cal.userID = userID
      cal.save
      
      res = {:error => 0, :description => 'Create calendar successful'}
    end
    
    respond_to do |format|
      format.xml { render :xml => res.to_xml()}
      format.json { render :json => res.to_json()}
    end
  end
  
  def tabCalendar
    userID = session[SESSION_USER_ID]
    sql = " userID = " + userID.to_s
    @cals = Array.new()
    @cals = Awccalendar.where(sql)
    
  end
  
  #create calendar
  def createCalendar
    calName = params[:calnm]
    calColorId = params[:clrId]
    res = {:error => 1, :description => "Create fail."}
    if calName and calColorId
      email = session[SESSION_USER_EMAIL]
      userID = session[SESSION_USER_ID]
      cal = Awccalendar.new()
      cal.calendarName = calName.to_s.strip
      cal.colorImageId = calColorId
      cal.userID = userID
      cal.save
      
      res = {:error => 0, :description => 'Create calendar successful'}
    end
    
    userID = session[SESSION_USER_ID]
    sql = " userID = " + userID.to_s
    @cals = Array.new()
    @cals = Awccalendar.where(sql)
    
  end
  
  #delete calendar
  def delCalendar
    id = params[:id]
    cal = Awccalendar.where("primaryKey = '" + id + "'").first
    if cal
      cal.destroy()
    end
    userID = session[SESSION_USER_ID]
    sql = " userID = " + userID.to_s
    @cals = Array.new()
    @cals = Awccalendar.where(sql)
  end
  
  #tab calendar detail
  def tabCalendarDetail
     @colors = Colors.where(1)
  end
  
  def tabEditCalendar
     @colors = Colors.where(1)
     @color = ''
     @cal = Array.new()
     id = params[:id]
     
     if id and id.to_s.strip != ''
        @cal = Awccalendar.where("primaryKey = '" + id + "'").first
        @colors.each do |cl|
          if cl.colorId == @cal.colorImageId
            @color = cl.color
            break
          end
        end
     end
  end
  
  def editCalendar
     # @colors = Colors.where(1)
     id = params[:id]
     if id and id.to_s.strip != ''
        cal = Awccalendar.where("primaryKey = '" + id.to_s + "'").first
        cal.calendarName = params[:calnm] if params[:calnm] and (params[:calnm].to_s.strip != '')
        cal.colorImageId = params[:clrId] if params[:clrId]
        cal.update_attributes(cal)
     end
     #get all calendars
     userID = session[SESSION_USER_ID]
     sql = " userID = " + userID.to_s
     @cals = Awccalendar.where(sql)
  end
  
  #tab general
  def tabGeneral
    
  end
  
  #updateBg
  def updateBg
    bgid = params[:bgid]
    userID = session[SESSION_USER_ID]
    if bgid
      set = Awcsetting.where("userID = " + userID.to_s).first
      if set
        session[SESSION_SET_BG] = bgid #set background
        set.backgroundImgID = bgid.to_i
        set.update_attributes(set)
      end
    end
  end
  
  #tab context
  def tabContext
    userID = session[SESSION_USER_ID]
    sql = " userID = " + userID.to_s
    @contexts = Awccontext.where(sql).order('createdDate desc')
    
    
  end
  
  def createContext
    contextNm = params[:contextNm]
    userID = session[SESSION_USER_ID]
    if contextNm and contextNm.to_s.strip.length > 0
      ct = Awccontext.new()
      ct.userID = userID
      ct.contextName = contextNm.to_s.strip
      ct.save
    end
    sql = " userID = " + userID.to_s
    @contexts = Awccontext.where(sql).order('createdDate desc')
  end
  
  def editContext
    userID = session[SESSION_USER_ID]
    id = params[:id]
    ctnm = params[:ctnm]
    if id and id.to_s.length > 0
      sql = 'primaryKey = "' + id.to_s + '"'
      ct = Awccontext.where(sql).first
      if ct
        ct.contextName = ctnm.to_s.strip if ctnm and ctnm.to_s.strip.length > 0
        ct.update_attributes(ct)
      end
    end
    
    sql = " userID = " + userID.to_s
    @contexts = Awccontext.where(sql).order('createdDate desc')
  end
  
  def delContext
    userID = session[SESSION_USER_ID]
    id = params[:id]
    if id and id.to_s.strip.length > 0
      sql = 'primaryKey = "' + id.to_s + '"'
      ct = Awccontext.where(sql).first
      if ct
        ct.destroy()
      end
    end
    sql = " userID = " + userID.to_s
    @contexts = Awccontext.where(sql).order('createdDate desc')
  end
  
  #tab event
  def tabEvent
    userID = session[SESSION_USER_ID]
    sql = " userID = " + userID.to_s
    @contexts = Awccontext.where(sql).order('createdDate desc')
    @cals = Awccalendar.where(sql)
    @set = Awcsetting.where(sql).first
  end
  
  #tab task
  def tabTask
    userID = session[SESSION_USER_ID]
    sql = " userID = " + userID.to_s
    @contexts = Awccontext.where(sql).order('createdDate desc')
    @cals = Awccalendar.where(sql)
    @set = Awcsetting.where(sql).first
  end
  
  #tab note
  def tabNote
    userID = session[SESSION_USER_ID]
    sql = " userID = " + userID.to_s
    @contexts = Awccontext.where(sql).order('createdDate desc')
    @cals = Awccalendar.where(sql)
    @set = Awcsetting.where(sql).first
  end
  
  #update setting object
  def updateSettings
    userID = session[SESSION_USER_ID]
    sql = " userID = " + userID.to_s
    @set = Awcsetting.where(sql).first
    if @set
      objType = params[:objType]
      setContext = params[:setContext]
      setCal = params[:setCal]
      if objType and objType.to_i == OBJ_TASK_TYPE #task
        @set.defaultTaskContextID =  setContext if setContext
        @set.defaultTaskCalendarID = setCal if setCal
      elsif objType and objType.to_i == OBJ_EVENT_TYPE #event
        @set.defaultEventContextID =  setContext if setContext
        @set.defaultEventCalendarID = setCal if setCal
      elsif objType and objType.to_i == OBJ_NOTE_TYPE #note  
        @set.defaultNoteContextID =  setContext if setContext
        @set.defaultNoteCalendarID = setCal if setCal
      end  
      @set.update_attributes(@set)
    end
  end
  
  def tabInvitation
    
  end
  
  def tabSecurity
    
  end
  
  def tabBackup
    
  end
  
  def tabAlert
    
  end
  
  def tabSync
    
  end
  
  ####################################################
  #setting profile
  def userProfile
    email = session[SESSION_USER_EMAIL]
    @user = User.new()
    if email
      email = email.to_s.strip.downcase
      h_email = Base64.strict_encode64(email)
      sql = "UserName = '" + h_email + "'"
      @user = User.where(sql).first
    end
  end
  
  ####################################################
end
