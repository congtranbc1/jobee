ALTER TABLE `syncdata`.`SW_Setting` CHANGE COLUMN `WorkingTime` `WorkingHourStart` INTEGER  DEFAULT 480 COMMENT '8hAM';
ALTER TABLE `syncdata`.`SW_Setting` MODIFY COLUMN `WorkingHourEnd` INTEGER  NOT NULL DEFAULT 1080 COMMENT '6h PM';