class CreateReminders < ActiveRecord::Migration
  def self.up
    create_table :Reminder, :primary_key => "ReminderID" do |t|
      t.string :Title,      :limit => 2000
      t.integer :EndTime,   :null => false
      t.boolean :Alert,     :default => true, :null => false
      t.integer :UserID,    :null => false
      t.integer :WorkID,    :null => false
      t.boolean :Done,      :null => false
      
      t.timestamps
    end
  end

  def self.down
    drop_table :Reminder
  end
end
