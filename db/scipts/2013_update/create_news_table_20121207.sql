--create verify account table ----------------
CREATE TABLE `verify_accounts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL DEFAULT '',
  `token` varchar(255) NOT NULL DEFAULT '',
  `create_time` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='latin1_swedish_ci'
--Test github II

CREATE TABLE `syncdata`.`news` (
  `id` INT  NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
)
ENGINE = MyISAM;

ALTER TABLE `syncdata`.`news` ADD COLUMN `title` VARCHAR(255)  NOT NULL DEFAULT '' AFTER `id`,
 ADD COLUMN `url` VARCHAR(255)  NOT NULL DEFAULT '' AFTER `title`,
 ADD COLUMN `create_time` INT  NOT NULL DEFAULT 0 AFTER `url`,
 ADD COLUMN `last_update` INT  NOT NULL DEFAULT 0 AFTER `create_time`;

 --add column for User table
 ALTER TABLE `syncdata`.`User` ADD COLUMN `Gender` INT(2)  NOT NULL DEFAULT 0 AFTER `Activated`;
 ALTER TABLE `syncdata`.`User` ADD COLUMN `Country` VARCHAR(255)  NOT NULL DEFAULT '' AFTER `Gender`,
 ADD COLUMN `Profession` VARCHAR(255)  NOT NULL DEFAULT '' AFTER `Country`;
 alter table `User` add column `AgeRange` int(11) not null default '0' AFTER `Profession` ,comment = 'latin1_swedish_ci' 
alter table `User` add column `UserToken` varchar(255) not null default '' AFTER `AgeRange` ,comment = 'latin1_swedish_ci' 
alter table `User` add column `AccountType` int not null default '1' AFTER `UserToken` ,add column `DateUpgrade` date null default null AFTER `AccountType`

--add column for backup table
alter table `backups` add column `backup_type` int not null default '0' AFTER `password` ,comment = 'latin1_swedish_ci'

--add col for appregister
alter table `AppRegister` add column `Alias` varchar(255) not null default '' AFTER `Private` ,comment = 'latin1_swedish_ci' 
alter table `AppRegister` add column `RegDate` int not null default '0' AFTER `Alias` ,add column `RegBy` varchar(255) not null default '' AFTER `RegDate` ,add column `Email` varchar(255) not null default '' AFTER `RegBy` 
 
--SD iPhone
update AppRegister SET Alias = 'ad944424393cf309efaf0e70f1b125cb' WHERE AppRegisterID = '5c14dff59eec0a9b9431e044e59278ae'
--SD Pad
update AppRegister SET Alias = 'b9431e044e59278ae5c14dff59eec0a9' WHERE AppRegisterID = 'eed1ff331bb96d7978ab40bea6668e10'
--SD Mac
update AppRegister SET Alias = 'd7978ab40bea6668e10eed1ff331bb96' WHERE AppRegisterID = '309efaf0e70f1b125cbad944424393cf'

-- setting table
alter table `SW_Setting` add column `ShowHint` varchar(20) not null default '00' AFTER `HideFutureTask` 
--alter table `SW_Setting` add column `ShowHint` int not null default '0' AFTER `HideFutureTask` ,comment = 'latin1_swedish_ci'
--alter table `SW_Setting` modify column `ShowHint` varchar(11) not null default '00' AFTER `HideFutureTask` ,comment = 'latin1_swedish_ci' 

