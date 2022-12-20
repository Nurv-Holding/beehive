/*
  Warnings:

  - You are about to drop the column `idFutureVision` on the `historygoalkrs` table. All the data in the column will be lost.
  - You are about to drop the column `idFutureVision` on the `processgoalsteams` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `historygoalkrs` DROP FOREIGN KEY `historyGoalKrs_idFutureVision_fkey`;

-- DropForeignKey
ALTER TABLE `processgoalsteams` DROP FOREIGN KEY `processGoalsTeams_idFutureVision_fkey`;

-- AlterTable
ALTER TABLE `historygoalkrs` DROP COLUMN `idFutureVision`;

-- AlterTable
ALTER TABLE `processgoalsteams` DROP COLUMN `idFutureVision`;
