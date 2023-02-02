/*
  Warnings:

  - You are about to drop the column `idProcessGoalsTeam` on the `goalsusers` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `goalsusers` DROP FOREIGN KEY `goalsUsers_idProcessGoalsTeam_fkey`;

-- AlterTable
ALTER TABLE `goalsusers` DROP COLUMN `idProcessGoalsTeam`,
    ADD COLUMN `idGoal` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `goalsUsers` ADD CONSTRAINT `goalsUsers_idGoal_fkey` FOREIGN KEY (`idGoal`) REFERENCES `goals`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
