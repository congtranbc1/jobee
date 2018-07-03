----- hyper links ---
-- default = 0: link to tasks table
-- = 1 link to url table
alter table `hyperlinks` add column `link_type` int null default '0' AFTER `last_update` ,comment = 'latin1_swedish_ci'

-- SW setting ------

-- URL table ----
CREATE TABLE `url_objects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url` text,
  `create_time` int(11) NOT NULL,
  `last_update` int(11) NOT NULL,
  `user_id` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='latin1_swedish_ci'

-- conversation ---
CREATE TABLE `conversations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `root_id` int(11) DEFAULT '0',
  `user_id` int(11) DEFAULT '0',
  `content` text,
  `create_time` int(11) DEFAULT '0',
  `last_update` int(11) DEFAULT '0',
  `parent_id` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='latin1_swedish_ci'

CREATE TABLE `notifications` (
  `id` varchar(500) NOT NULL,
  `email` varchar(255) DEFAULT '',
  `conversation_id` int(11) DEFAULT '0',
  `user_id_cmt` int(11) DEFAULT '0',
  `status` int(11) DEFAULT '0',
  `create_time` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='latin1_swedish_ci'

CREATE TABLE `statistics` (
  `id` varchar(255) NOT NULL DEFAULT '',
  `sdate` int(11) DEFAULT '0',
  `done_number` int(11) DEFAULT '0',
  `total_number` int(11) DEFAULT '0',
  `create_time` int(11) DEFAULT '0',
  `last_update` int(11) DEFAULT '0',
  `user_id` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='latin1_swedish_ci'

CREATE TABLE `email_task_link` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT '0',
  `email_id` int(11) DEFAULT '0',
  `target_id` int(11) DEFAULT '0',
  `domain_name` varchar(255) DEFAULT '',
  `link_type` int(11) DEFAULT '0',
  `create_time` int(11) DEFAULT '0',
  `last_update` int(11) DEFAULT '0',
  `key_word` varchar(255) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='latin1_swedish_ci'

alter table `groups_members` add column `status` int null default '0' AFTER `pass_share` ,comment = 'latin1_swedish_ci' 
alter table `notifications` add column `notification_type` int not null default '0' AFTER `create_time`
