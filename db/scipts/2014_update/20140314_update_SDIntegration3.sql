---------------- sw_setting table --------------------
ALTER TABLE  `SW_Setting` ADD  `SDuration` INT NOT NULL DEFAULT  '30' COMMENT  'Short duration' AFTER  `DefaultTaskDur` ,
ADD  `MDuration` INT NOT NULL DEFAULT  '60' COMMENT  'Medium duration' AFTER  `SDuration` ,
ADD  `LDuration` INT NOT NULL DEFAULT  '180' COMMENT  'Long duration' AFTER  `MDuration` ;
