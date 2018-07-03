ALTER TABLE `tasks` ADD `alerts_count` INT NOT NULL DEFAULT '0';
 
ALTER TABLE `tasks` ADD `participants_count` INT NOT NULL DEFAULT '0';
 
UPDATE tasks t
SET alerts_count = (SELECT COUNT(*) FROM alerts a WHERE a.task_id = t.id),
	participants_count = (SELECT COUNT(*) FROM participants p WHERE p.task_id = t.id);