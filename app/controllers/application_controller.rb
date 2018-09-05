class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  before_filter :set_locale

  def set_locale
    locale = session[SESSION_LOCALE]
    pLocale = params[:locale]
    localeValid = Utils.checkLocaleValid(pLocale)

    if localeValid == 1 #locale valid
      I18n.locale = pLocale.to_s.strip || I18n.default_locale
      session[SESSION_LOCALE] = I18n.locale
      return
    elsif localeValid == 0 and locale and locale.to_s.strip != ''
      I18n.locale = session[SESSION_LOCALE]
      return
    else #get default locale value
      I18n.locale = I18n.default_locale
      session[SESSION_LOCALE] = I18n.locale
      return
    end
  end



  protect_from_forgery with: :reset_session

  #========== show error message ==============
  def warning
    res = params[:result] ? params[:result] : 0
    @msg = showMessage(res)
    @titlePage = t(:title_Notification)
    render(:file => "/errors/warning")
  end

  #========== show error message ==============
  def activated
    #flash[:notice] = flash[:notice]
    msg = flash[:notice]
    @msgLoginPannel = 1
    if !msg
      reset_session
      cookies.delete(:ps)
      flash[:notice] = '<p style="color:#CCCCCC;">No message</p>'.html_safe
    end
    @title_page = "Notification"
    render(:file => "/errors/warning")
  end

  def confirmation
    #flash[:notice] = flash[:notice]
    msg = flash[:notice]
    if !msg
      reset_session
      cookies.delete(:ps)
      flash[:notice] = '<p style="color:#CCCCCC;">No message</p>'.html_safe
    end
    @title_page = "Notification"
    render(:file => "/errors/warning")
  end

  # check case to show mesage
  def showMessage(res)
    msg = ""
    reset_session
    cookies.delete(:ps)
    case res
      when "1" # create new account successful
        msg = t(:msg_CreateAccountOK)
      when "2" # activation code invalid
        msg = t(:msg_ActivationCodeInvalid)
      when "3" # activate OK
        msg = t(:msg_ActivatedOK)
      when "4" # was activated
        msg = t(:msg_WasActivated)
      else # no message
        msg = t(:msg_NoMessage).html_safe
    end
    return msg
  end

end
