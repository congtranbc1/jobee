ALTER TABLE `syncdata`.`WorkTable` MODIFY COLUMN `Due` tinyint(1)  DEFAULT 0,
 ADD COLUMN `URL` varchar(255)  AFTER `ADE`;
