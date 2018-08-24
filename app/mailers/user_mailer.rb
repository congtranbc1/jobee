class UserMailer < ActionMailer::Base
  default :from => DEFAULT_FROM_EMAIL

  def welcome_email(user)
    @user = user
    @url  = HTTP_HOST_NAME
    @email =  @user.email
    @activation_url  = @url + "/activate/" + @user.activateToken
    mail(:to => @email.to_s.downcase,
         :subject => "Welcome to JobBee")
  end
  
  def passcode_email(email, passcode)
    @email = email
    arrEmail = @email.split('@')
    @username = arrEmail[0] ? arrEmail[0] : @email
    @pass = passcode
    @url  = HTTP_HOST_NAME
    mail(:to => @email.to_s.strip.downcase,
         :subject => "no-reply - Awecal's passcode recovery")
  end
  
  def recovery_email(user)
    @user = user
    email = Base64.decode64(@user.UserName)
    @url  = HTTP_HOST_NAME
    mail(:to => email.to_s.downcase,
         :subject => "Recover password")
  end
  
end
