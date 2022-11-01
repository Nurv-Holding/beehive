/*
  Warnings:

  - Made the column `idTeam` on table `goals` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `goals` DROP FOREIGN KEY `goals_idTeam_fkey`;

-- AlterTable
ALTER TABLE `goals` MODIFY `idTeam` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `goals` ADD CONSTRAINT `goals_idTeam_fkey` FOREIGN KEY (`idTeam`) REFERENCES `teams`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
