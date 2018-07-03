class CreateRepeatExceptions < ActiveRecord::Migration
  def self.up
    create_table :repeat_exceptions do |t|
      t.integer :repeat_id
      t.integer :exception_date

      # t.timestamps
    end
    # add index
    add_index :repeat_exceptions, :repeat_id
  end

  def self.down
    drop_table :repeat_exceptions
  end
end
