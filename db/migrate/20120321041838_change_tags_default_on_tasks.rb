class ChangeTagsDefaultOnTasks < ActiveRecord::Migration
  def self.up
    change_table :tasks do |t|
      t.change :tags, :string, :default => ''
    end
  end

  def self.down
  end
end
