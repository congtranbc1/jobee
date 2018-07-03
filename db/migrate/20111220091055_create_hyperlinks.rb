class CreateHyperlinks < ActiveRecord::Migration
  def self.up
    create_table :hyperlinks do |t|
      t.integer :root_id
      t.integer :target_id
      t.integer :user_id
      t.integer :start_position, :default => 0
      t.integer :end_position, :default => 0
      t.string :keywork

      # t.timestamps
    end
    # add index
    add_index :hyperlinks, :user_id
    add_index :hyperlinks, :root_id
    add_index :hyperlinks, :target_id
  end

  def self.down
    drop_table :hyperlinks
  end
end
