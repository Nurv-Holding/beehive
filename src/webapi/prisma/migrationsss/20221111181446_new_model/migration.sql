/*
  Warnings:

  - You are about to drop the column `quarterly` on the `goalkrs` table. All the data in the column will be lost.
  - You are about to drop the column `yearly` on the `goalkrs` table. All the data in the column will be lost.
  - You are about to drop the column `quarterly` on the `goalteamkrs` table. All the data in the column will be lost.
  - You are about to drop the column `yearly` on the `goalteamkrs` table. All the data in the column will be lost.
  - Added the required column `fromQuarterly` to the `goalKrs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fromYearly` to the `goalKrs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `toQuarterly` to the `goalKrs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `toYearly` to the `goalKrs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fromQuarterly` to the `goalTeamKrs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fromYearly` to the `goalTeamKrs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `toQuarterly` to the `goalTeamKrs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `toYearly` to the `goalTeamKrs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idCompany` to the `historyGoalKrs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quaPercentage` to the `historyGoalKrs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `yeaPercentage` to the `historyGoalKrs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idCompany` to the `historyGoalsTeamKrs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quaPercentage` to the `historyGoalsTeamKrs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `yeaPercentage` to the `historyGoalsTeamKrs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `goalkrs` DROP COLUMN `quarterly`,
    DROP COLUMN `yearly`,
    ADD COLUMN `fromQuarterly` INTEGER NOT NULL,
    ADD COLUMN `fromYearly` INTEGER NOT NULL,
    ADD COLUMN `toQuarterly` INTEGER NOT NULL,
    ADD COLUMN `toYearly` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `goalteamkrs` DROP COLUMN `quarterly`,
    DROP COLUMN `yearly`,
    ADD COLUMN `fromQuarterly` INTEGER NOT NULL,
    ADD COLUMN `fromYearly` INTEGER NOT NULL,
    ADD COLUMN `toQuarterly` INTEGER NOT NULL,
    ADD COLUMN `toYearly` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `historygoalkrs` ADD COLUMN `idCompany` INTEGER NOT NULL,
    ADD COLUMN `quaPercentage` DOUBLE NOT NULL,
    ADD COLUMN `yeaPercentage` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `historygoalsteamkrs` ADD COLUMN `idCompany` INTEGER NOT NULL,
    ADD COLUMN `quaPercentage` DOUBLE NOT NULL,
    ADD COLUMN `yeaPercentage` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `idCompany` INTEGER NULL;

-- CreateTable
CREATE TABLE `tasks` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idGoalsTeamKr` INTEGER NOT NULL,
    `idCompany` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `finalDate` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `taskUsers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idTeamUser` INTEGER NULL,
    `idCompany` INTEGER NOT NULL,
    `idTask` INTEGER NOT NULL,
    `done` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `historyGoalKrs` ADD CONSTRAINT `historyGoalKrs_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `historyGoalsTeamKrs` ADD CONSTRAINT `historyGoalsTeamKrs_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tasks` ADD CONSTRAINT `tasks_idGoalsTeamKr_fkey` FOREIGN KEY (`idGoalsTeamKr`) REFERENCES `goalTeamKrs`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tasks` ADD CONSTRAINT `tasks_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `taskUsers` ADD CONSTRAINT `taskUsers_idTeamUser_fkey` FOREIGN KEY (`idTeamUser`) REFERENCES `teamUsers`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `taskUsers` ADD CONSTRAINT `taskUsers_idTask_fkey` FOREIGN KEY (`idTask`) REFERENCES `tasks`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `taskUsers` ADD CONSTRAINT `taskUsers_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
