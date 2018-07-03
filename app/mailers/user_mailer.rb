class UserMailer < ActionMailer::Base
  default :from => "no-reply@awesoft.vn"

  def welcome_email(user)
    @user = user
    @url  = HTTP_HOST_NAME
    email =  Base64.decode64(@user.UserName)
    @activation_url  = @url + "/activate/" + @user.UserName + "/" + @user.ActivationCode
    mail(:to => email.to_s.downcase,
         :subject => "Welcome to AweCal Site")
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
