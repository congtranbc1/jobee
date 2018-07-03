class CreateAlerts < ActiveRecord::Migration
  def self.up
    create_table :alerts do |t|
      t.integer :task_id
      t.integer :minutes
      # t.string :alert_type, 'char', :default => 'N', :limit => 1
      t.column :alert_type, 'char', :default => 'P', :limit => 1

      # t.timestamps
    end
    # add index
    add_index :alerts, :task_id
  end

  def self.down
    drop_table :alerts
  end
end
