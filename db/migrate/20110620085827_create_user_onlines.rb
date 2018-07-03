class CreateUserOnlines < ActiveRecord::Migration
  def self.up
    create_table :user_onlines, :options => "ENGINE=InnoDB" do |t|
      t.integer :user_id, :null => false
      t.date  :login_date
      t.integer :login_count, :default => 0, :null => false
    end
  end

  def self.down
    drop_table :user_onlines
  end
end
