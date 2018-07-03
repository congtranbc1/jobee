-- 2014 01 10 tasks
alter table `tasks` add column `shared_date` int null default '0' AFTER `created_by` ,comment = 'latin1_swedish_ci'

-- conversation
alter table `conversations` add column `email` varchar(255) null default '' AFTER `comment_type` ,comment = 'latin1_swedish_ci' 

--add group style for categories
alter table `categories` add column `group_style` int not null default '0' AFTER `is_transparent` ,comment = 'latin1_swedish_ci'
alter table `categories` add column `caldav_id` int not null default '0' AFTER `group_style` ,comment = 'latin1_swedish_ci' 
alter table `categories` add column `public` varchar(255) not null default '' AFTER `caldav_id` ,comment = 'latin1_swedish_ci' 
alter table `categories` add column `sync_caldav` int not null default '0' AFTER `public` ,comment = 'latin1_swedish_ci' 

--update sw setting
alter table `SW_Setting` add column `ActiveCaldav` tinyint not null default '0' AFTER `ShowHint` ,comment = 'latin1_swedish_ci' 
alter table `SW_Setting` add column `TimeZoneSupport` int not null default '0' AFTER `SendNotify` ,comment = 'latin1_swedish_ci' 
alter table `SW_Setting` add column `TimeZoneKey` int not null default '0' AFTER `TimeZoneSupport` 
ALTER TABLE `SW_Setting` ADD `HideDoneTask` INT( 1 ) NOT NULL DEFAULT '0' COMMENT '0 (default: show) / 1(hide)' AFTER `HideFutureTask` 
--09.09.2013
ALTER TABLE `SW_Setting` ADD `TaskFilter` VARCHAR( 20 ) NULL DEFAULT ''
--14.11.2013
ALTER TABLE  `SW_Setting` ADD  `CalendarPlacement` INT( 1 ) NOT NULL DEFAULT  '0' COMMENT  '0: "on right" - 1: "on left"'
--12.12.2013
ALTER TABLE  `SW_Setting` ADD  `MiniMonthStates` VARCHAR( 5 ) NOT NULL DEFAULT  '000' COMMENT 'charAt(1): red dot; charAt(2): ADEs; charAt(3): busy day'


--21 Nov 2013
alter table `notifications` add column `status_respond` int null default '0' AFTER `notification_type` ,comment = 'latin1_swedish_ci' 
-- if notification_type = 1, default: status_respond = 0, = 1: Done, = 2: un-done, = 3: join, = 4: decline, = 5: maybe

--dav user
alter table `users` change column `msduserid` `create_time` int(20) not null default '0' AFTER `email` ,comment = 'utf8_unicode_ci'
alter table `principals` add column `create_time` int(20) not null default '0' AFTER `vcardurl` ,comment = 'utf8_unicode_ci' 
alter table `calendars` add column `create_time` int(20) not null default '0' AFTER `transparent` ,comment = 'utf8_unicode_ci' 
alter table `calendarobjects` add column `create_time` int(20) not null default '0' AFTER `lastoccurence` ,comment = 'utf8_unicode_ci' 

-- table User
alter table `User` add column `PrincipalUri` varchar(255) not null default '' AFTER `DateUpgrade` ,comment = 'latin1_swedish_ci' 
	--19.11.2013
	ALTER TABLE  `User` ADD  `AccountType` INT NOT NULL DEFAULT  '1'
	ALTER TABLE  `User` ADD  `DateUpgrade` DATE NULL


-- calendar DAV
alter table `calendars` add column `category_id` int not null default '0' AFTER `create_time` ,comment = 'utf8_unicode_ci' 

--tasks
alter table `tasks` add column `calobj_id` int not null default '0' AFTER `token` ,comment = 'latin1_swedish_ci' 
alter table `tasks` add column `timezone_key` int not null default '0' AFTER `calobj_id` ,comment = 'latin1_swedish_ci' 
alter table `tasks` add column `stask` int not null default '0' AFTER `timezone_key` ,comment = 'latin1_swedish_ci' 
--update: 19.07.2013
ALTER TABLE  `tasks` ADD  `created_by` INT( 20 ) NOT NULL DEFAULT  '0'
--update 1.11.2013
ALTER TABLE  `tasks` ADD  `has_link` INT NOT NULL DEFAULT  '0' AFTER  `participants_count`

--participants
--update: 22.07.2013
ALTER TABLE  `participants` ADD  `created_by` INT( 20 ) NOT NULL DEFAULT  '0'

-- groups_members
alter table `groups_members` add column `permission` int not null default '0' AFTER `last_update` ,add column `token` varchar(255) not null default '' AFTER `permission` ,comment = 'latin1_swedish_ci' 
alter table `groups_members` add column `pass_share` varchar(255) not null default '' AFTER `token` ,comment = 'latin1_swedish_ci' 
ALTER TABLE  `groups_members` ADD  `import_to_sd` VARCHAR( 5 ) NOT NULL DEFAULT  '000' COMMENT  '1st char: meeting invite; 2nd char: delegated task; 3rd char: calendars' AFTER  `permission`
     	------------------Update: 06.09.2013 ----------------------------
	ALTER TABLE `groups_members` add column `invisible_by_user` TINYINT( 1 ) NOT NULL DEFAULT '0' AFTER `import_to_sd`


-- hyperlinks
ALTER TABLE  `hyperlinks` ADD  `primary` BOOLEAN NOT NULL DEFAULT  '0' COMMENT  '0: default (not primary), 1: primary' AFTER  `user_id`

--table timezone
CREATE TABLE `timezone` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `timezone_key` int(11) NOT NULL DEFAULT '0',
  `timezone_name` varchar(255) NOT NULL DEFAULT '',
  `offset` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='latin1_swedish_ci'


--app register
INSERT INTO `AppRegister` (`AppRegisterID`,`AppID`, `AppName`, `Private`, `Alias`) VALUES ("ab40bea6668e10eed1ff331bb96d7978",2,"Done That",1,"668e10eed1ff331bb96d7978ab40bea6")
INSERT INTO AppRegister(`AppRegisterID`,`AppID`, `AppName`, `Private`, `Alias`) values("e10eed1ff331bb96d7978ab40bea6668",2,"AM/PM",1,"f331bb96d7978ab40bea6668e10eed1f")
INSERT INTO AppRegister(`AppRegisterID`,`AppID`, `AppName`, `Private`, `Alias`) values("b96d7978ab40e10eed1ff331bbea6668",2,"SmartDay Companion",1,"e70f1b125cbad944424393cf309efaf0")

--alerts
ALTER TABLE  `alerts` ADD  `created_by` INT( 20 ) NOT NULL COMMENT  'Value is "user_id" who created this alert!' AFTER  `alert_type`

--members
ALTER TABLE  `members` ADD `is_del` INT( 1 ) NOT NULL DEFAULT  '0' AFTER  `role`
