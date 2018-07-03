class AddLastUpdateToReminder < ActiveRecord::Migration
  def self.up
  	 add_column :Reminder, :LastUpdate, :integer
  end

  def self.down
  	remove_column :Reminder, :LastUpdate
  end
end
