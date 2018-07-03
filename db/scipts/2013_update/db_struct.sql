

CREATE TABLE `Alert` (
  `AlertID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `WorkID` int(10) unsigned NOT NULL,
  `Duration` int(10) unsigned NOT NULL,
  `AlertType` char(1) NOT NULL COMMENT 'If ''P'' is Popup, ''M'' is email',
  `TimeUnit` varchar(20) NOT NULL,
  `CreateTime` int(11) unsigned DEFAULT NULL,
  `LastUpdate` int(11) unsigned DEFAULT NULL,
  PRIMARY KEY (`AlertID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE  `ContactTable` (
  `ContactID` int(20) NOT NULL AUTO_INCREMENT,
  `ContactData` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `LastUpdate` bigint(20) DEFAULT NULL,
  `UserID` int(20) NOT NULL,
  `ContactType` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ContactID`),
  KEY `UserID` (`UserID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE  `FileControl` (
  `UserName` varchar(255) NOT NULL,
  `FileID` int(20) NOT NULL,
  `FilePath` text NOT NULL,
  `FileState` varchar(5) NOT NULL,
  `RootFileName` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE  `HyperLink` (
  `HyperLinkID` int(11) NOT NULL AUTO_INCREMENT,
  `LinkID` int(11) NOT NULL,
  `WorkID` int(11) NOT NULL,
  `UserID` int(11) NOT NULL,
  `StartPosition` int(11) NOT NULL,
  `EndPosition` int(11) NOT NULL,
  `KeyWord` text NOT NULL,
  `CreateTime` bigint(20) NOT NULL,
  `LastUpdate` bigint(20) NOT NULL,
  PRIMARY KEY (`HyperLinkID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='hyper link table';


CREATE TABLE  `ProjectTable` (
  `ProjID` int(20) NOT NULL AUTO_INCREMENT,
  `ProjName` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `ProjColor` varchar(255) DEFAULT NULL,
  `WorkIDList` text NOT NULL,
  `LastUpdate` int(20) NOT NULL,
  `UserID` int(20) NOT NULL,
  `ProjType` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ProjID`),
  KEY `UserID` (`UserID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE  `Reminder` (
  `ReminderID` int(11) NOT NULL AUTO_INCREMENT,
  `Title` varchar(2000) DEFAULT NULL,
  `EndTime` int(11) NOT NULL,
  `Alert` tinyint(1) NOT NULL DEFAULT '1',
  `UserID` int(11) NOT NULL,
  `WorkID` int(11) NOT NULL,
  `Done` tinyint(1) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `LastUpdate` int(11) NOT NULL,
  PRIMARY KEY (`ReminderID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE  `SN_Note` (
  `WorkID` int(20) NOT NULL,
  `ContactID` int(20) NOT NULL,
  `TagIDList` text,
  `Children` text,
  `NoteID` int(20) NOT NULL AUTO_INCREMENT,
  `UserID` int(20) NOT NULL,
  PRIMARY KEY (`NoteID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE  `SN_Photo` (
  `PhotoID` int(11) NOT NULL AUTO_INCREMENT,
  `WorkID` int(11) NOT NULL,
  `FileName` text,
  `LastUpdate` bigint(20) NOT NULL,
  `UserID` int(20) NOT NULL,
  PRIMARY KEY (`PhotoID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE  `SN_Setting` (
  `SnSetID` int(11) NOT NULL AUTO_INCREMENT,
  `UserID` int(11) NOT NULL,
  `ProjectID` int(11) DEFAULT NULL,
  `Skins` int(11) DEFAULT NULL,
  `ConfirmDel` int(11) DEFAULT NULL,
  `ConfirmMake` int(11) NOT NULL,
  `ConfirmDropIn` int(11) NOT NULL,
  `ConfirmDragOut` int(11) NOT NULL,
  `DueDefault` int(11) DEFAULT NULL,
  PRIMARY KEY (`SnSetID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE  `SN_Voice` (
  `VoiceID` int(20) NOT NULL AUTO_INCREMENT,
  `WorkID` int(20) NOT NULL,
  `FileName` varchar(255) DEFAULT NULL,
  `LastUpdate` bigint(20) DEFAULT NULL,
  `UserID` int(20) NOT NULL,
  PRIMARY KEY (`VoiceID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE  `SW_Setting` (
  `SwSetID` int(11) NOT NULL AUTO_INCREMENT,
  `UserID` int(11) DEFAULT NULL,
  `Layout` int(11) DEFAULT NULL,
  `Theme` int(11) DEFAULT NULL,
  `FontType` text,
  `FontSize` int(11) DEFAULT NULL,
  `Alert` int(1) NOT NULL DEFAULT '0',
  `SnoozeDuration` int(10) NOT NULL DEFAULT '5',
  `ConfirmDelete` int(1) DEFAULT '0',
  `WeekStart` varchar(255) DEFAULT NULL,
  `WorkingTime` int(11) DEFAULT NULL,
  `DefaultProjID` int(11) DEFAULT NULL,
  `ShowTask` int(11) DEFAULT NULL,
  `MoveTaskInCal` int(11) DEFAULT NULL,
  `NewTaskPlace` int(11) DEFAULT NULL,
  `LastUpdate` int(11) DEFAULT NULL,
  `CreateTime` int(11) DEFAULT NULL,
  `DefaultDuration` int(11) DEFAULT '0',
  `TimeZone` varchar(255) DEFAULT 'Central Time (US & Canada)',
  `Email` varchar(255) DEFAULT NULL,
  `ConfirmMove` int(11) DEFAULT '0',
  PRIMARY KEY (`SwSetID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE  `TimeControl` (
  `UserName` text,
  `TockenID` varchar(255) DEFAULT NULL,
  `TimeOut` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;



CREATE TABLE  `User` (
  `UserID` int(20) NOT NULL AUTO_INCREMENT,
  `UserPass` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `GroupID` int(20) DEFAULT NULL,
  `UserName` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `LastName` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL DEFAULT ' ',
  `FirstName` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL DEFAULT ' ',
  `Status` int(20) NOT NULL DEFAULT '0',
  `Allow` int(20) NOT NULL DEFAULT '0',
  `DateRegister` date DEFAULT NULL,
  `DateExpire` date DEFAULT NULL,
  `LevelUse` int(20) NOT NULL DEFAULT '0',
  `ServiceType` int(20) NOT NULL DEFAULT '0',
  `Activation` int(20) NOT NULL DEFAULT '0',
  `ActivationCode` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `TimeZone` varchar(255) DEFAULT 'Central Time (US & Canada)',
  `KeyAPI` text,
  PRIMARY KEY (`UserID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE  `WorkException` (
  `ExceptionID` int(11) NOT NULL AUTO_INCREMENT,
  `UserID` int(20) NOT NULL,
  `WorkID` int(11) NOT NULL,
  `ExceptionDate` datetime NOT NULL,
  `CreateTime` int(11) unsigned DEFAULT NULL,
  `LastUpdate` int(11) unsigned DEFAULT NULL,
  PRIMARY KEY (`ExceptionID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE  `WorkTable` (
  `WorkID` int(50) NOT NULL AUTO_INCREMENT,
  `UserID` int(20) NOT NULL,
  `AppID` int(10) NOT NULL,
  `CreateTime` bigint(20) DEFAULT NULL,
  `Title` text CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  `LastUpdate` bigint(20) DEFAULT NULL,
  `WorkType` int(20) DEFAULT NULL,
  `WorkGroup` varchar(255) DEFAULT NULL,
  `StartTime` bigint(20) DEFAULT NULL,
  `EndTime` bigint(20) DEFAULT NULL,
  `Duration` int(20) DEFAULT NULL,
  `Context` varchar(255) DEFAULT NULL,
  `Location` text CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  `WorkStatus` int(20) DEFAULT NULL,
  `ProjID` int(20) DEFAULT NULL,
  `Due` int(11) DEFAULT '0',
  `RepeatType` char(2) DEFAULT 'N',
  `RepeatInterval` int(11) DEFAULT '0',
  `RepeatFlag` varchar(255) DEFAULT NULL,
  `Star` int(11) DEFAULT '0',
  `RepeatEnd` varchar(255) DEFAULT NULL,
  `GTDTask` int(11) DEFAULT '0',
  `TaskOrder` int(11) DEFAULT '0',
  `Content` text,
  `Meta` text,
  `ContactID` int(20) DEFAULT NULL,
  `ContextID` int(11) DEFAULT NULL,
  `Tags` text,
  `Deleted` int(1) DEFAULT '0',
  PRIMARY KEY (`WorkID`),
  KEY `UserID` (`UserID`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=latin1;


CREATE TABLE  `user_onlines` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `login_date` date DEFAULT NULL,
  `login_count` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE  `Contact` (
  `ContactID` int(20) NOT NULL AUTO_INCREMENT,
  `UserID` int(20) DEFAULT NULL,
  `FirstName` varchar(255),
  `LastName` varchar(255),
  `Email` varchar(255) DEFAULT NULL,
  `Address` varchar(255),
  `Mobile` varchar(255) DEFAULT NULL,
  `Website` varchar(255) DEFAULT NULL,
  `Company` varchar(255) DEFAULT NULL,
  `Meta` text,
  `LastUpdate` int(11) DEFAULT NULL,
  `CreateTime` int(11) DEFAULT NULL,
  PRIMARY KEY (`ContactID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE  `Context` (
  `ContextID` int(11) NOT NULL AUTO_INCREMENT,
  `UserID` int(11) DEFAULT NULL,
  `ContextName` varchar(255) DEFAULT NULL,
  `LastUpdate` int(11) DEFAULT NULL,
  `CreateTime` int(11) DEFAULT NULL,
  PRIMARY KEY (`ContextID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE  `Tag` (
  `TagID` int(11) NOT NULL AUTO_INCREMENT,
  `UserID` int(11) DEFAULT NULL,
  `TagName` varchar(255) DEFAULT NULL,
  `CreateTime` int(11) DEFAULT NULL,
  `LastUpdate` int(11) DEFAULT NULL,
  PRIMARY KEY (`TagID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE  `WorkTag` (
  `WorkTagID` int(11) NOT NULL AUTO_INCREMENT,
  `WorkID` int(11) DEFAULT NULL,
  `TagID` int(11) DEFAULT NULL,
  `UserID` int(11) DEFAULT NULL,
  `CreateTime` int(11) DEFAULT NULL,
  `LastUpdate` int(11) DEFAULT NULL,
  PRIMARY KEY (`WorkTagID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



