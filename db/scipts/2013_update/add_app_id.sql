ALTER TABLE `syncdata`.`ProjectTable` ADD COLUMN `AppID` INTEGER  NOT NULL DEFAULT 1 AFTER `ProjType`;

--ALTER TABLE `syncdata`.`Alert` ADD COLUMN `AppID` INTEGER  NOT NULL DEFAULT 1;

ALTER TABLE `syncdata`.`Contact` ADD COLUMN `AppID` INTEGER  NOT NULL DEFAULT 1;

ALTER TABLE `syncdata`.`Context` ADD COLUMN `AppID` INTEGER  NOT NULL DEFAULT 1;

ALTER TABLE `syncdata`.`HyperLink` ADD COLUMN `AppID` INTEGER  NOT NULL DEFAULT 1;

ALTER TABLE `syncdata`.`Tag` ADD COLUMN `AppID` INTEGER  NOT NULL DEFAULT 1;

--ALTER TABLE `syncdata`.`WorkException` ADD COLUMN `AppID` INTEGER  NOT NULL DEFAULT 1;

ALTER TABLE `syncdata`.`WorkTable` ADD COLUMN `ADE` INT(1) DEFAULT 0;

