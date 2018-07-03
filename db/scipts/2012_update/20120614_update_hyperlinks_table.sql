ALTER TABLE `hyperlinks`
  DROP `start_position`,
  DROP `end_position`,
  DROP `keywork`,
  DROP `created_at`,
  DROP `updated_at`;

ALTER TABLE  `hyperlinks` ADD  `create_time` INT NOT NULL ,
ADD  `last_update` INT NOT NULL;
