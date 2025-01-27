/*
  Warnings:

  - You are about to drop the column `idGoal` on the `goalsUsers` table. All the data in the column will be lost.
  - You are about to drop the column `idTeam` on the `goalsUsers` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `goalsUsers` DROP FOREIGN KEY `goalsUsers_idGoal_fkey`;

-- DropForeignKey
ALTER TABLE `goalsUsers` DROP FOREIGN KEY `goalsUsers_idTeam_fkey`;

-- AlterTable
ALTER TABLE `goalsUsers` DROP COLUMN `idGoal`,
    DROP COLUMN `idTeam`,
    ADD COLUMN `idProcessGoalsTeam` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `goalsUsers` ADD CONSTRAINT `goalsUsers_idProcessGoalsTeam_fkey` FOREIGN KEY (`idProcessGoalsTeam`) REFERENCES `processGoalsTeams`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
