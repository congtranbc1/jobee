Smartweb::Application.routes.draw do

  #########################################################
  # default point to index of home
  root :to => 'home#index'

  #########################################################
  # utils controller
  match '/utils/changeLanguage' => 'utils#changeLanguage', via: [:post]

  #########################################################
  # user controller
  match '/sign_in' => 'user#sign_in', via: [:get, :post]
  match '/sign_out' => 'user#sign_out', via: [:get, :post]
  match '/sign_up' => 'user#sign_up', via: [:get, :post]
  match '/recovery' => 'user#recovery', via: [:get, :post]
  match '/saveUserInfo' => 'user#saveUserInfo', via: [:get, :post]
  match '/sign_in_account' => 'user#sign_in_account', via: [:get, :post]
  match '/check_exist' => 'user#check_exist', via: [:get, :post]
  match '/update_user_profile' => 'user#update_user_profile', via: [:get, :post, :put]
  post '/register' => 'user#register'
  match '/profile' => 'user#profile', via: [:get, :post]
  match '/activate/:activationToken' => 'user#activate', via: [:get, :post]

  #########################################################
  # application controller
  get '/warning', :controller => :application, :action => :warning
  get '/activated', :controller => :application, :action => :activated
  get '/confirmation', :controller => :application, :action => :confirmation
  get '/notification', :controller => :application, :action => :warning

  #########################################################
  # home controller
  
  #########################################################
  # common match
  get ':controller(/:action(/:id))'
  
  
end
