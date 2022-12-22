/*
  Warnings:

  - Added the required column `idTaskUser` to the `historyGoalsTeamKrs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `historygoalsteamkrs` ADD COLUMN `idTaskUser` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `historyGoalsTeamKrs` ADD CONSTRAINT `historyGoalsTeamKrs_idTaskUser_fkey` FOREIGN KEY (`idTaskUser`) REFERENCES `taskUsers`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
