class UtilsController < ApplicationController

  # change language
  def changeLanguage
    locale = params[:locale]
    localeValid = Utils.checkLocaleValid(locale)
    res = {:error => localeValid, :locale => locale}
    if localeValid == 1
      session[SESSION_LOCALE] = locale
      res = {:error => 0, :locale => locale}
    end
    respond_to do |format|
      format.xml { render :xml => res.to_xml()}
      format.json { render :json => res.to_json()}
    end
  end


  
  #######################################
end
