/*
  Warnings:

  - You are about to drop the column `from` on the `goalkrs` table. All the data in the column will be lost.
  - You are about to drop the column `to` on the `goalkrs` table. All the data in the column will be lost.
  - You are about to drop the column `from` on the `goalteamkrs` table. All the data in the column will be lost.
  - You are about to drop the column `to` on the `goalteamkrs` table. All the data in the column will be lost.
  - Added the required column `quarterly` to the `goalKrs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `yearly` to the `goalKrs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quarterly` to the `goalTeamKrs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `yearly` to the `goalTeamKrs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `goalkrs` DROP COLUMN `from`,
    DROP COLUMN `to`,
    ADD COLUMN `quarterly` INTEGER NOT NULL,
    ADD COLUMN `yearly` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `goalteamkrs` DROP COLUMN `from`,
    DROP COLUMN `to`,
    ADD COLUMN `quarterly` INTEGER NOT NULL,
    ADD COLUMN `yearly` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `processgoalsteams` ADD COLUMN `idGoal` INTEGER NULL;

-- CreateTable
CREATE TABLE `historyGoalKrs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idGoalKr` INTEGER NOT NULL,
    `idGoal` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `historyGoalsTeamKrs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idProcessGoalTeam` INTEGER NOT NULL,
    `idGoalsTeamKr` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `processGoalsTeams` ADD CONSTRAINT `processGoalsTeams_idGoal_fkey` FOREIGN KEY (`idGoal`) REFERENCES `goals`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `historyGoalKrs` ADD CONSTRAINT `historyGoalKrs_idGoalKr_fkey` FOREIGN KEY (`idGoalKr`) REFERENCES `goalKrs`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `historyGoalKrs` ADD CONSTRAINT `historyGoalKrs_idGoal_fkey` FOREIGN KEY (`idGoal`) REFERENCES `goals`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `historyGoalsTeamKrs` ADD CONSTRAINT `historyGoalsTeamKrs_idProcessGoalTeam_fkey` FOREIGN KEY (`idProcessGoalTeam`) REFERENCES `processGoalsTeams`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `historyGoalsTeamKrs` ADD CONSTRAINT `historyGoalsTeamKrs_idGoalsTeamKr_fkey` FOREIGN KEY (`idGoalsTeamKr`) REFERENCES `goalTeamKrs`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
