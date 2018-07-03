Smartweb::Application.routes.draw do

  #default point to index of home
  root :to => 'home#index'
  
  #user
  match '/sign_in' => 'users#sign_in'
  match '/sign_out' => 'users#sign_out'
  match '/sign_up' => 'users#sign_up'
  match '/recovery' => 'users#recovery'
  
  match '/sign_in_account' => 'users#sign_in_account'
  match '/check_exist' => 'users#check_exist'
  match '/update_user_profile' => 'users#update_user_profile'
  match '/register' => 'users#register'
  match '/profile' => 'users#profile'#
  
  #captcha test
  match '/captcha' => 'captcha#index'#
  
  #########################################################
  
  match ':controller(/:action(/:id))'
  
  
end
