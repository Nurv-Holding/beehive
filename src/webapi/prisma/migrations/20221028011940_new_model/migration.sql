/*
  Warnings:

  - You are about to drop the column `idTeam` on the `goals` table. All the data in the column will be lost.
  - You are about to drop the column `idUser` on the `processgoalstask` table. All the data in the column will be lost.
  - You are about to drop the column `idTeam` on the `users` table. All the data in the column will be lost.
  - Added the required column `idTeamUser` to the `goals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idTeamUser` to the `processGoalsTask` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `goals` DROP FOREIGN KEY `goals_idTeam_fkey`;

-- DropForeignKey
ALTER TABLE `processgoalstask` DROP FOREIGN KEY `processGoalsTask_idUser_fkey`;

-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `users_idTeam_fkey`;

-- AlterTable
ALTER TABLE `goals` DROP COLUMN `idTeam`,
    ADD COLUMN `done` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `idTeamUser` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `processgoalstask` DROP COLUMN `idUser`,
    ADD COLUMN `idTeamUser` INTEGER NOT NULL,
    ADD COLUMN `userId` INTEGER NULL;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `idTeam`;

-- CreateTable
CREATE TABLE `teamUsers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idCompany` INTEGER NOT NULL,
    `idUser` INTEGER NOT NULL,
    `idTeam` INTEGER NOT NULL,
    `descriptions` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProcessTaskUsers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idTask` INTEGER NOT NULL,
    `idTeamUser` INTEGER NOT NULL,
    `idUser` INTEGER NOT NULL,
    `idProcessGoalsTask` INTEGER NOT NULL,
    `descriptions` VARCHAR(191) NOT NULL,
    `done` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `teamUsers` ADD CONSTRAINT `teamUsers_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `teamUsers` ADD CONSTRAINT `teamUsers_idUser_fkey` FOREIGN KEY (`idUser`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `teamUsers` ADD CONSTRAINT `teamUsers_idTeam_fkey` FOREIGN KEY (`idTeam`) REFERENCES `teams`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `goals` ADD CONSTRAINT `goals_idTeamUser_fkey` FOREIGN KEY (`idTeamUser`) REFERENCES `teamUsers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `processGoalsTask` ADD CONSTRAINT `processGoalsTask_idTeamUser_fkey` FOREIGN KEY (`idTeamUser`) REFERENCES `teamUsers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `processGoalsTask` ADD CONSTRAINT `processGoalsTask_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProcessTaskUsers` ADD CONSTRAINT `ProcessTaskUsers_idTask_fkey` FOREIGN KEY (`idTask`) REFERENCES `tasks`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProcessTaskUsers` ADD CONSTRAINT `ProcessTaskUsers_idTeamUser_fkey` FOREIGN KEY (`idTeamUser`) REFERENCES `teamUsers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProcessTaskUsers` ADD CONSTRAINT `ProcessTaskUsers_idUser_fkey` FOREIGN KEY (`idUser`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProcessTaskUsers` ADD CONSTRAINT `ProcessTaskUsers_idProcessGoalsTask_fkey` FOREIGN KEY (`idProcessGoalsTask`) REFERENCES `processGoalsTask`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
