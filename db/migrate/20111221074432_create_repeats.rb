class CreateRepeats < ActiveRecord::Migration
  def self.up
    create_table :repeats do |t|
      t.integer :task_id
      # t.string :repeat_type
      t.column :repeat_type, 'char(1)'
      # t.string :repeat_flag
      t.column :repeat_flag, 'char(7)', :default => '0000000'
      t.integer :repeat_interval, :default => 1
      t.integer :repeat_end, :default => '0'
      t.column :repeat_by_due, 'tinyint(1)', :default => '0'

      # t.timestamps
    end
    # add index
    add_index :repeats, :task_id
  end

  def self.down
    drop_table :repeats
  end
end
