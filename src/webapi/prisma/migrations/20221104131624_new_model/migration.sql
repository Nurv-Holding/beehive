/*
  Warnings:

  - You are about to drop the column `idGoalKr` on the `goals` table. All the data in the column will be lost.
  - You are about to drop the column `idGoalTeamKr` on the `goalsteams` table. All the data in the column will be lost.
  - Added the required column `idGoal` to the `goalKrs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idGoalsTeam` to the `goalTeamKrs` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `goals` DROP FOREIGN KEY `goals_idGoalKr_fkey`;

-- DropForeignKey
ALTER TABLE `goalsteams` DROP FOREIGN KEY `goalsTeams_idGoalTeamKr_fkey`;

-- AlterTable
ALTER TABLE `goalkrs` ADD COLUMN `idGoal` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `goals` DROP COLUMN `idGoalKr`;

-- AlterTable
ALTER TABLE `goalsteams` DROP COLUMN `idGoalTeamKr`;

-- AlterTable
ALTER TABLE `goalteamkrs` ADD COLUMN `idGoalsTeam` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `processgoalsteams` MODIFY `idGoalsTeam` INTEGER NULL,
    MODIFY `idTeam` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `goalTeamKrs` ADD CONSTRAINT `goalTeamKrs_idGoalsTeam_fkey` FOREIGN KEY (`idGoalsTeam`) REFERENCES `goalsTeams`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `goalKrs` ADD CONSTRAINT `goalKrs_idGoal_fkey` FOREIGN KEY (`idGoal`) REFERENCES `goals`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
