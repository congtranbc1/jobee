class Users < ActiveRecord::Base
  set_table_name "users"
  set_primary_key "id"


  before_create :set_create_time
  before_update :set_update_time
  
  ####################### private functions ###############################
  private
  def set_create_time
    self.createdDate = Time.now.to_i
    self.updatedDate = Time.now.to_i
  end
  
  def set_update_time
    self.updatedDate = Time.now.to_i
  end
	
	
end
