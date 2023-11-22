CREATE TABLE `items` (
	`id` varchar(64) NOT NULL,
	`name` text NOT NULL,
	`quantity` int NOT NULL,
	`league` text NOT NULL,
	`tab_id` varchar(24) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT `items_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE INDEX `items_tab_id_idx` ON `items` (`tab_id`);