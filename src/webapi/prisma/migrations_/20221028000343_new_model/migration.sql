/*
  Warnings:

  - You are about to drop the column `idTask` on the `goals` table. All the data in the column will be lost.
  - Added the required column `idTeam` to the `goals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idGoal` to the `tasks` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `goals` DROP FOREIGN KEY `goals_idTask_fkey`;

-- AlterTable
ALTER TABLE `goals` DROP COLUMN `idTask`,
    ADD COLUMN `idTeam` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `tasks` ADD COLUMN `done` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `idGoal` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `subTasks` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idTask` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `descriptions` VARCHAR(191) NOT NULL,
    `done` BOOLEAN NOT NULL DEFAULT false,
    `initialDate` DATETIME(3) NOT NULL,
    `finalDate` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tasks` ADD CONSTRAINT `tasks_idGoal_fkey` FOREIGN KEY (`idGoal`) REFERENCES `goals`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `subTasks` ADD CONSTRAINT `subTasks_idTask_fkey` FOREIGN KEY (`idTask`) REFERENCES `tasks`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `goals` ADD CONSTRAINT `goals_idTeam_fkey` FOREIGN KEY (`idTeam`) REFERENCES `teams`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
