/*
  Warnings:

  - You are about to drop the column `idTeamUser` on the `goals` table. All the data in the column will be lost.
  - You are about to drop the column `idTeamUser` on the `processgoalstask` table. All the data in the column will be lost.
  - You are about to drop the column `idTeamUser` on the `processtaskusers` table. All the data in the column will be lost.
  - Added the required column `idTeam` to the `processGoalsTask` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idTeam` to the `ProcessTaskUsers` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `goals` DROP FOREIGN KEY `goals_idTeamUser_fkey`;

-- DropForeignKey
ALTER TABLE `processgoalstask` DROP FOREIGN KEY `processGoalsTask_idTeamUser_fkey`;

-- DropForeignKey
ALTER TABLE `processtaskusers` DROP FOREIGN KEY `ProcessTaskUsers_idTeamUser_fkey`;

-- AlterTable
ALTER TABLE `goals` DROP COLUMN `idTeamUser`,
    ADD COLUMN `idTeam` INTEGER NULL;

-- AlterTable
ALTER TABLE `processgoalstask` DROP COLUMN `idTeamUser`,
    ADD COLUMN `idTeam` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `processtaskusers` DROP COLUMN `idTeamUser`,
    ADD COLUMN `idTeam` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `goals` ADD CONSTRAINT `goals_idTeam_fkey` FOREIGN KEY (`idTeam`) REFERENCES `teams`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `processGoalsTask` ADD CONSTRAINT `processGoalsTask_idTeam_fkey` FOREIGN KEY (`idTeam`) REFERENCES `teams`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProcessTaskUsers` ADD CONSTRAINT `ProcessTaskUsers_idTeam_fkey` FOREIGN KEY (`idTeam`) REFERENCES `teams`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
