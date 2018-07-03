

ALTER TABLE `syncdata`.`categories` ADD COLUMN `source` INT(11)  NOT NULL DEFAULT 0 AFTER `app_register`;

ALTER TABLE `syncdata`.`categories` ADD COLUMN `is_transparent` TINYINT(1)  NOT NULL DEFAULT 0 AFTER `source`;

