class UsersController < ApplicationController
  require 'digest/md5'
  require 'digest'
  
  
  layout "login"

  def test
    
  end
  
  # sign in
  def sign_in
    @titlePage = t(:tb_SignIn)
  end
  
  def sign_in_account
    email = params[:email]
    pass = params[:pass]
    
    res = {:error => 1, :description => MSG_USER_PASS_INCORRECT}
    if email and pass
      email = email.to_s.strip.downcase
      h_pass = Digest::MD5.hexdigest(pass)
      sql = " email = '" + email.to_s + "' AND password ='" + h_pass.to_s + "'"
      user = Users.where(sql).first
      if user and user.id
        session[SESSION_USER_EMAIL] = email
        session[SESSION_USER_ID] = user.id
        #get setting
        
        fullName = user.firstName.to_s.strip + ' ' + user.lastName.to_s.strip
        arrEmail = email.split('@')
        session[SESSION_USER_FULL_NAME] = (fullName.to_s.strip == '') ? arrEmail[0] : fullName 
        res = {:error => 0, :description => MSG_USER_LOGIN_OK}
        respond_to do |format|
          format.xml { render :xml => res.to_xml()}
          format.json { render :json => res.to_json()}
        end
      else
        respond_to do |format|
          format.xml { render :xml => res.to_xml()}
          format.json { render :json => res.to_json()}
        end      
      end
    else
      respond_to do |format|
        format.xml { render :xml => res.to_xml()}
        format.json { render :json => res.to_json()}
      end
    end
    
  end
  
  #profile
  def profile
    
  end

  # save user info
  def saveUserInfo
    user = params[:user]
    res = {
        :error => 0
    }
    if user


    end
    respond_to do |format|
      format.xml { render :xml => res.to_xml()}
      format.json { render :json => res.to_json()}
    end
  end
  
  #sign up
  def sign_up
    @titlePage = t(:tb_SignUp)
  end
  
  #register
  def register
    email = params[:email]
    pass = params[:password]
    lname = params[:lname]
    fname = params[:fname]
    if email and pass
      email = email.to_s.strip.downcase
      h_pass = Digest::MD5.hexdigest(pass)
      #check email existed
      sql = "email = '" + email.to_s + "'"
      user = Users.where(sql).first
      #user existed
      if user and user.id
        res = {:error => 1, :description => MSG_USER_EXISTED}
        respond_to do |format|
          format.xml { render :xml => res.to_xml()}
          format.json { render :json => res.to_json()}
        end
      else #create new user
        #save user into DB
        arr = email.split('@')
        uname = arr[0].to_s #set default name for user
        usr = Users.new()
        usr.email = email
        usr.password = h_pass
        usr.lastName = (lname and lname.to_s.strip != '') ? lname.to_s.strip : ''
        usr.firstName = (fname and fname.to_s.strip != '') ? fname.to_s.strip : uname
        usr.activateToken = Digest::MD5.hexdigest(ActiveSupport::SecureRandom.hex(16))
        if usr.save
          #set session for email and password
          # session[SESSION_USER_EMAIL] = email
          # session[SESSION_USER_ID] = usr.id
          # session[SESSION_USER_FULL_NAME] = usr.firstName
          flash[:notice] = MSG_USER_ACTIVATE
          #send mail active account, send mail welcome account
          t_mail = Thread.new {
            UserMailer.welcome_email(usr).deliver
          }
          t_mail.run

          #check user register account, if it's ok, will redirect to vigcal index
          redirect_to :controller => 'application', :action => 'warning'
        else

        end
      end
    end
  end

  #====================================
  #Activate user create account
  #====================================
  def activate
    message = ''
    actCode = params[:activationToken]
    if actCode and actCode.to_s.strip != ''
      user = Users.where('activateToken = ? ', actCode).first
      if user and user.id
        if user.activateStatus.to_i == 0
          user.activateStatus = 1
          user.update_attributes(user)
          message = MSG_ACTIVATED_OK
        else
          message = MSG_WAS_ACTIVATED
        end
      else
        message = MSG_ACTIVATION_CODE_INVALID
      end
    else
      message = MSG_ACTIVATION_CODE_INVALID
    end
    # return the message to user
    @msg = message
    # clear cookie and session
    reset_session
    cookies.delete(:ps)
  end
  
  def check_exist
    email = params[:email]
    res = {:error => 0, :description => MSG_USER_NOT_EXIST}
    if email
      email = email.to_s.strip.downcase
      sql = "email = '" + email.to_s + "'"
      user = Users.where(sql).first
      if user
        res = {:error => 1, :description => MSG_USER_EXISTED }
      end
    end
    respond_to do |format|
      format.xml { render :xml => res.to_xml()}
      format.json { render :json => res.to_json()}
    end
  end
  
  def update_user_profile
    email = params[:email]
    oldPass = params[:old_pass]
    newPass = params[:new_pass]
    lName = params[:lname]
    fName = params[:fname]
    res = {:error => 1, :description => MSG_USER_INVALID}
    if email
      email = email.to_s.strip.downcase
      h_email = Base64.strict_encode64(email)
      sql = " UserName = '" + h_email + "'"
      if oldPass and oldPass.to_s.length > 0
        h_pass = Base64.strict_encode64(oldPass)
        sql << " AND UserPass ='" + h_pass + "'"
      end
      user = Users.where(sql).first
      # puts user.to_json
      
      if user
        user.LastName = lName.to_s.strip if lName
        user.FirstName = fName.to_s.strip if fName
        #if user changes password, it will auto update the password
        if newPass and newPass.to_s.length > 0
          h_newPass = Base64.strict_encode64(newPass) 
          user.UserPass = h_newPass
        end
        user.update_attributes(user)
        
        fullName = user.FirstName + " " + user.LastName
        arrEmail = email.split('@')
        session[SESSION_USER_FULL_NAME] = (fullName.to_s.strip == '') ? arrEmail[0] : fullName 
        
        res = {:error => 0, :description => MSG_USER_UPDATED}
      end
    end
    respond_to do |format|
      format.xml { render :xml => res.to_xml()}
      format.json { render :json => res.to_json()}
    end
  end
  
  #sign out
  def sign_out
    reset_session
    cookies.delete(:ps)
    redirect_to :controller => 'home', :action => 'index'
  end
  
  #recover password
  def recovery
    
  end
  
  def recover_pass
    
  end
  
  
  ################### user info ###############
  def user_edit_main_info
    
  end
  
  def user_load_main_info
    
  end
  
  #######################################
end
