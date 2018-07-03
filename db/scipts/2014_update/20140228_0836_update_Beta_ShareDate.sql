---------------- tasks table --------------------
--update shared_date 
--get all assigned tasks
select * from tasks where assignee_email != '' and shared_date = 0
--Time: dd = 1392742800 (2014-02-19), update for field [shared_date] of 'tasks' table
update tasks set shared_date = 1392742800 where assignee_email != '' and shared_date = 0

---------------- User table --------------------
-- time = 1401555600 (2014-06-01)
-- get beta user
select * from User where AccountType = 2

--update expire date for beta
update User set DateExpire = '2014-06-01' where AccountType = 2


================================
CREATE TABLE `history` (
  `item_id` int(11) DEFAULT '0',//--task id or project id
  `item_type` int(11) DEFAULT '0',//-- tasks table = 0, project table = 1
  `create_time` int(11) DEFAULT '0',//-- time create record
  `history_type` varchar(1000) DEFAULT '',//-- = 0: create new, = 1: edit, =2: assign
  `root_id` int(20) DEFAULT '0',//-- user root id: to update name: this is user change the item, assign task
  `target_id` int(20) DEFAULT '0',//-- user target id: to update name: this is user recieve task
  `root_name` varchar(255) DEFAULT '',//-- user name of user root id
  `target_name` varchar(255) DEFAULT ''//-- user name of user target id
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='latin1_swedish_ci'
