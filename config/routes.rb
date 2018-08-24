Smartweb::Application.routes.draw do

  #########################################################
  # default point to index of home
  root :to => 'home#index'

  #########################################################
  # utils controller
  match '/utils/changeLanguage' => 'utils#changeLanguage'

  #########################################################
  # user controller
  match '/sign_in' => 'users#sign_in'
  match '/sign_out' => 'users#sign_out'
  match '/sign_up' => 'users#sign_up'
  match '/recovery' => 'users#recovery'
  match '/saveUserInfo' => 'users#saveUserInfo'
  match '/sign_in_account' => 'users#sign_in_account'
  match '/check_exist' => 'users#check_exist'
  match '/update_user_profile' => 'users#update_user_profile'
  match '/register' => 'users#register'
  match '/profile' => 'users#profile'#
  match '/activate/:activationToken' => 'users#activate'

  #########################################################
  # application controller
  match '/warning', :controller => :application, :action => :warning
  match '/activated', :controller => :application, :action => :activated
  match '/confirmation', :controller => :application, :action => :confirmation
  match '/notification', :controller => :application, :action => :warning

  #########################################################
  # home controller
  
  #########################################################
  # common match
  match ':controller(/:action(/:id))'
  
  
end
