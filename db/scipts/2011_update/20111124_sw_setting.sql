ALTER TABLE `syncdata`.`SW_Setting` ADD COLUMN `WorkingHourEnd` INTEGER  NOT NULL DEFAULT 1080 AFTER `ConfirmMove`;

ALTER TABLE `syncdata`.`SW_Setting` CHANGE COLUMN `WorkingTime` `WorkingHourStart` INTEGER  DEFAULT 480;

ALTER TABLE `syncdata`.`SW_Setting` CHANGE COLUMN `DefaultDuration` `DefaultEveDur` INTEGER  DEFAULT 60,
 ADD COLUMN `DefaultTaskDur` INTEGER  NOT NULL DEFAULT 60 AFTER `WorkingHourEnd`;

ALTER TABLE `syncdata`.`SW_Setting` MODIFY COLUMN `ShowTask` INTEGER  DEFAULT 0;


/* Cong Tran 1-12-2011*/
CREATE TABLE  `syncdata`.`WorkingTime` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Day` int(1) DEFAULT 1,
  `Start` int(11) DEFAULT 680,
  `End` int(11) DEFAULT 1080,
  `UserID` int(11) NOT NULL,
  `SwSetID` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=latin1


ALTER TABLE `syncdata`.`ProjectTable` ADD COLUMN `Tags` TEXT  AFTER `AppID`,
 ADD COLUMN `Meta` TEXT  AFTER `Tags`;

CREATE TABLE IF NOT EXISTS `AppRegister` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `AppRegisterID` varchar(255) DEFAULT NULL,
  `AppID` int(11) DEFAULT NULL,
  `AppName` varchar(255) DEFAULT NULL,
  `Private` int(11) DEFAULT 0,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;


INSERT INTO `AppRegister` (`ID`, `AppRegisterID`, `AppID`, `AppName`, `Private`) VALUES
(1, 'eed1ff331bb96d7978ab40bea6668e10', 2, 'Spad', 1);


CREATE TABLE  `syncdata`.`AppToken` (
  `ID` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `AppRegisterID` varchar(255) DEFAULT NULL,
  `UserID` bigint(20) unsigned DEFAULT NULL,
  `KeyAPI` varchar(255) DEFAULT NULL,
  `TimeExpire` int(11) DEFAULT NULL,
  `CreateTime` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=latin1

/* modify tag field */
ALTER TABLE `syncdata`.`WorkTable` MODIFY COLUMN `Tags` TEXT  CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL;
ALTER TABLE `syncdata`.`ProjectTable` MODIFY COLUMN `Tags` TEXT  CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL;
ALTER TABLE `syncdata`.`Tag` MODIFY COLUMN `TagName` VARCHAR(255)  CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL;





/*
ALTER TABLE `syncdata`.`WorkTable` ADD COLUMN `AppRegisterID` VARCHAR(255) AFTER `URL`;
ALTER TABLE `syncdata`.`ProjectTable` ADD COLUMN `AppRegisterID` VARCHAR(255)  AFTER `Meta`;
ALTER TABLE `syncdata`.`SW_Setting` ADD COLUMN `AppRegisterID` VARCHAR(255)  AFTER `DefaultTaskDur`;
*/

/* Cong Tran 2-12-2011*/
/*ALTER TABLE `syncdata`.`ProjectTable` ADD COLUMN `Ref` CHAR(1)  AFTER `AppRegisterID`;*/

/* Cong Tran 5-12-2011*/
/*ALTER TABLE `syncdata`.`WorkingTime` ADD COLUMN `SwSetID` INTEGER AFTER `UserID`;*/



