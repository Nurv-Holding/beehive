/*
  Warnings:

  - You are about to drop the column `idUser` on the `teams` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `teams` DROP FOREIGN KEY `teams_idUser_fkey`;

-- AlterTable
ALTER TABLE `teams` DROP COLUMN `idUser`;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `idTeam` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_idTeam_fkey` FOREIGN KEY (`idTeam`) REFERENCES `teams`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
