CREATE TABLE `syncdata`.`backups` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` BIGINT UNSIGNED NOT NULL DEFAULT 0,
  `file_name` VARCHAR(255)  NOT NULL,
  `backup_date` DATETIME  NOT NULL,
  PRIMARY KEY (`id`)
)
ENGINE = MyISAM;

ALTER TABLE `syncdata`.`backups` ADD COLUMN `password` VARCHAR(255)  NOT NULL AFTER `backup_date`;

