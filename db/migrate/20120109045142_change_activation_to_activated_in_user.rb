class ChangeActivationToActivatedInUser < ActiveRecord::Migration
  def self.up
    change_table :User do |t|
      # t.rename :Activation, :Activated,
      t.remove :Activation
      #ALTER TABLE `syncdata`.`User` CHANGE COLUMN `Activation` `Activated` TINYINT(1)  DEFAULT 0;
      t.column :Activated, 'tinyint(1)', :default => 0
    end
  end

  def self.down
  end
end
