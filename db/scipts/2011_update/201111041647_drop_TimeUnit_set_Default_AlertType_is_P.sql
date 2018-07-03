ALTER TABLE `Alert` MODIFY COLUMN `AlertType` CHAR(1)  CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT 'P' COMMENT 'If \'P\' is Popup, \'M\' is email',
 DROP COLUMN `TimeUnit`;
