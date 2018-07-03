
ALTER TABLE `syncdata`.`SW_Setting` ADD COLUMN `UUID` VARCHAR(255)  DEFAULT '' AFTER `StatusModules`;

ALTER TABLE `syncdata`.`categories` ADD COLUMN `uuid` VARCHAR(255)  DEFAULT '' AFTER `source`;

ALTER TABLE `syncdata`.`categories` ADD COLUMN `is_transparent` TINYINT(1)  NOT NULL DEFAULT 0 AFTER `uuid`;

