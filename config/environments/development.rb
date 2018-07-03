Smartweb::Application.configure do
  # Settings specified here will take precedence over those in config/application.rb

  # In the development environment your application's code is reloaded on
  # every request.  This slows down response time but is perfect for development
  # since you don't have to restart the webserver when you make code changes.
  #config.cache_classes = false

  # Log error messages when you accidentally call methods on nil.
  #config.whiny_nils = true

  # Show full error reports and disable caching
  #config.consider_all_requests_local       = true
  #config.action_view.debug_rjs             = true
  #config.action_controller.perform_caching = false

  # Print deprecation notices to the Rails logger
  config.active_support.deprecation = :log

  # Only use best-standards-support built into browsers
  #config.action_dispatch.best_standards_support = :builtin
  
  #:user_name            => 'noreply@leftcoastlogic.com',
  #:password             => 'X@I]Bw9HgQis', #sm4rtt1m3
  ###########################################################
  # Don't care if the mailer can't send
  # config.action_mailer.raise_delivery_errors = false
  # config.action_mailer.raise_delivery_errors = true
	# config.action_mailer.perform_deliveries = true	  
	# config.action_mailer.delivery_method = :smtp
	
	# config.action_mailer.smtp_settings = {
	# :address							=> "mail.leftcoastlogic.com",
	# :port                 => 26,
	# :domain              	=> "leftcoastlogic.com",
	# :user_name            => 'noreply@leftcoastlogic.com',
  # :password             => 'X@I]Bw9HgQis', 
	# :authentication       => 'plain',    
	# :enable_starttls_auto => false  }
	##########################################################
	
	#ActionMailer::Base.default_content_type = "text/html"
	ActionMailer::Base.delivery_method = :smtp
	ActionMailer::Base.smtp_settings = {
     :address => "mail.leftcoastlogic.com",
     :port => 26,
     :domain => "leftcoastlogic.com",
     :authentication => :login,
     :user_name => "support@leftcoastlogic.com",
     :password => "QaT34m@2016",
     :enable_starttls_auto => true,
     :openssl_verify_mode  => 'none'
  }
	
	##########################################################
	
  # config.action_mailer.smtp_settings = {
  # :address              => "smtp.gmail.com",
  # :port                 => 587,
  # :domain               => 'leftcoastlogic.com',
  # :user_name            => 'tranquoccong142@gmail.com',
  # :password             => 'qst751',
  # :authentication       => 'plain',
  # :enable_starttls_auto => true  }
	
	# Mail chimp configuration
	MAILCHIMP_API_KEY = '523668f5e2350aa26a74889c41495896-us2'
	#MAILCHIMP_LIST_ID = '99b66f8c47'
	MAILCHIMP_LIST_ID = '6cc64885fa'
	#MAILCHIMP_API_KEY = '4927b10cd47f95780b45aec557fd575c-us2'
  #MAILCHIMP_LIST_ID = '2a540d4e95'

end

