/*
  Warnings:

  - Added the required column `idFutureVision` to the `goals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idFutureVision` to the `historyGoalKrs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `goals` ADD COLUMN `idFutureVision` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `historygoalkrs` ADD COLUMN `idFutureVision` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `processgoalsteams` ADD COLUMN `idFutureVision` INTEGER NULL;

-- CreateTable
CREATE TABLE `futureVisions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idCompany` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `principles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idCompany` INTEGER NOT NULL,
    `idFutureVision` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `proposals` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idCompany` INTEGER NOT NULL,
    `idFutureVision` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `futureVisions` ADD CONSTRAINT `futureVisions_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `principles` ADD CONSTRAINT `principles_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `principles` ADD CONSTRAINT `principles_idFutureVision_fkey` FOREIGN KEY (`idFutureVision`) REFERENCES `futureVisions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `proposals` ADD CONSTRAINT `proposals_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `proposals` ADD CONSTRAINT `proposals_idFutureVision_fkey` FOREIGN KEY (`idFutureVision`) REFERENCES `futureVisions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `goals` ADD CONSTRAINT `goals_idFutureVision_fkey` FOREIGN KEY (`idFutureVision`) REFERENCES `futureVisions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `processGoalsTeams` ADD CONSTRAINT `processGoalsTeams_idFutureVision_fkey` FOREIGN KEY (`idFutureVision`) REFERENCES `futureVisions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `historyGoalKrs` ADD CONSTRAINT `historyGoalKrs_idFutureVision_fkey` FOREIGN KEY (`idFutureVision`) REFERENCES `futureVisions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
