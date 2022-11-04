-- DropForeignKey
ALTER TABLE `goals` DROP FOREIGN KEY `goals_idGoalKr_fkey`;

-- DropForeignKey
ALTER TABLE `goalsteams` DROP FOREIGN KEY `goalsTeams_idGoalTeamKr_fkey`;

-- AlterTable
ALTER TABLE `goals` MODIFY `idGoalKr` INTEGER NULL;

-- AlterTable
ALTER TABLE `goalsteams` MODIFY `idGoalTeamKr` INTEGER NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `idProfile` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `goals` ADD CONSTRAINT `goals_idGoalKr_fkey` FOREIGN KEY (`idGoalKr`) REFERENCES `goalKrs`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `goalsTeams` ADD CONSTRAINT `goalsTeams_idGoalTeamKr_fkey` FOREIGN KEY (`idGoalTeamKr`) REFERENCES `goalTeamKrs`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
