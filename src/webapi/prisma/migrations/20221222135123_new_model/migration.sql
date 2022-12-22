/*
  Warnings:

  - You are about to drop the column `idTaskUser` on the `historygoalsteamkrs` table. All the data in the column will be lost.
  - Added the required column `description` to the `taskUsers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `leader` to the `teams` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `historygoalsteamkrs` DROP FOREIGN KEY `historyGoalsTeamKrs_idTaskUser_fkey`;

-- AlterTable
ALTER TABLE `historygoalkrs` ADD COLUMN `goalUserKrId` INTEGER NULL;

-- AlterTable
ALTER TABLE `historygoalsteamkrs` DROP COLUMN `idTaskUser`;

-- AlterTable
ALTER TABLE `taskusers` ADD COLUMN `description` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `teams` ADD COLUMN `leader` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `goalUsers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idTeamUser` INTEGER NOT NULL,
    `idCompany` INTEGER NOT NULL,
    `idGoal` INTEGER NOT NULL,
    `done` BOOLEAN NOT NULL DEFAULT false,
    `status` BOOLEAN NOT NULL DEFAULT false,
    `description` TEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `goalUserKrs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idCompany` INTEGER NOT NULL,
    `idGoal` INTEGER NOT NULL,
    `idUser` INTEGER NOT NULL,
    `idGoalUser` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `descriptions` VARCHAR(191) NOT NULL,
    `to` INTEGER NOT NULL,
    `fromQuarterly` INTEGER NOT NULL,
    `fromYearly` INTEGER NOT NULL,
    `done` INTEGER NOT NULL DEFAULT 0,
    `status` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `historyGoalKrs` ADD CONSTRAINT `historyGoalKrs_goalUserKrId_fkey` FOREIGN KEY (`goalUserKrId`) REFERENCES `goalUserKrs`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `goalUsers` ADD CONSTRAINT `goalUsers_idTeamUser_fkey` FOREIGN KEY (`idTeamUser`) REFERENCES `teamUsers`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `goalUsers` ADD CONSTRAINT `goalUsers_idGoal_fkey` FOREIGN KEY (`idGoal`) REFERENCES `goals`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `goalUsers` ADD CONSTRAINT `goalUsers_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `goalUserKrs` ADD CONSTRAINT `goalUserKrs_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `goalUserKrs` ADD CONSTRAINT `goalUserKrs_idGoal_fkey` FOREIGN KEY (`idGoal`) REFERENCES `goals`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `goalUserKrs` ADD CONSTRAINT `goalUserKrs_idUser_fkey` FOREIGN KEY (`idUser`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `goalUserKrs` ADD CONSTRAINT `goalUserKrs_idGoalUser_fkey` FOREIGN KEY (`idGoalUser`) REFERENCES `goalUsers`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
