CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `digesta1` varchar(32) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `create_time` int(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='utf8_unicode_ci'

CREATE TABLE `principals` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `uri` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(80) COLLATE utf8_unicode_ci DEFAULT NULL,
  `displayname` varchar(80) COLLATE utf8_unicode_ci DEFAULT NULL,
  `vcardurl` varchar(80) COLLATE utf8_unicode_ci DEFAULT NULL,
  `create_time` int(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uri` (`uri`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='utf8_unicode_ci'

CREATE TABLE `groupmembers` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `principal_id` int(10) unsigned NOT NULL,
  `member_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `principal_id` (`principal_id`,`member_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci

CREATE TABLE `calendars` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `principaluri` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `displayname` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `uri` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ctag` int(10) unsigned NOT NULL DEFAULT '0',
  `description` text COLLATE utf8_unicode_ci,
  `calendarorder` int(10) unsigned NOT NULL DEFAULT '0',
  `calendarcolor` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `timezone` text COLLATE utf8_unicode_ci,
  `components` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `transparent` tinyint(1) NOT NULL DEFAULT '0',
  `create_time` int(20) NOT NULL DEFAULT '0',
  `category_id` int(11) NOT NULL DEFAULT '0',
  `msd_updated` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `principaluri` (`principaluri`,`uri`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='utf8_unicode_ci'

CREATE TABLE `calendarobjects` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `calendardata` mediumblob,
  `uri` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `calendarid` int(10) unsigned NOT NULL,
  `lastmodified` int(11) unsigned DEFAULT NULL,
  `etag` varchar(32) COLLATE utf8_unicode_ci DEFAULT NULL,
  `size` int(11) unsigned NOT NULL,
  `componenttype` varchar(8) COLLATE utf8_unicode_ci DEFAULT NULL,
  `firstoccurence` int(11) unsigned DEFAULT NULL,
  `lastoccurence` int(11) unsigned DEFAULT NULL,
  `create_time` int(20) NOT NULL DEFAULT '0',
  `msd_updated` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `calendarid` (`calendarid`,`uri`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='utf8_unicode_ci'

CREATE TABLE `addressbooks` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `principaluri` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `displayname` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `uri` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8_unicode_ci,
  `ctag` int(11) unsigned NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `principaluri` (`principaluri`,`uri`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci

