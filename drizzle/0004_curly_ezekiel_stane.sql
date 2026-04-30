CREATE TABLE `contactMessages` (
	`id` int AUTO_INCREMENT NOT NULL,
	`nom` varchar(255) NOT NULL,
	`fonction` varchar(255),
	`etablissement` varchar(255),
	`email` varchar(320) NOT NULL,
	`telephone` varchar(20),
	`message` text NOT NULL,
	`status` enum('new','read','replied','archived') NOT NULL DEFAULT 'new',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `contactMessages_id` PRIMARY KEY(`id`)
);
