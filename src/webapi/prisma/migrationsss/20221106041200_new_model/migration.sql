/*
  Warnings:

  - Added the required column `idCompany` to the `processGoalsTeams` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `processgoalsteams` ADD COLUMN `idCompany` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `processGoalsTeams` ADD CONSTRAINT `processGoalsTeams_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
