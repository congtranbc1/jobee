class CreateParticipants < ActiveRecord::Migration
  def self.up
    create_table :participants, :force => true do |t|
      t.integer :task_id, :null => false
      t.string :email, :null => false
      t.string :token, :null => false
      # t.string :status
      t.column :status, 'int(1)', :default => 0
      t.integer :feedback_time, :default => 0
      t.integer :create_time
      t.integer :last_update
      # t.timestamps
    end
    
    add_index :participants, [:task_id, :email, :tooken], :name => 'participants_email'
  end

  def self.down
    drop_table :participants
  end
end
