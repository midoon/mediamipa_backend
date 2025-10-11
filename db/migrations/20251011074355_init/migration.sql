-- CreateTable
CREATE TABLE `posts` (
    `id` VARCHAR(255) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `image` TEXT NULL,
    `type` ENUM('news', 'achievement') NOT NULL,
    `created_at` TIMESTAMP(3) NOT NULL,
    `updated_at` TIMESTAMP(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
