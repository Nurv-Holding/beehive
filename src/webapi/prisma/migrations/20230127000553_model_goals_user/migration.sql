-- CreateTable
CREATE TABLE `goalsUsers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idCompany` INTEGER NOT NULL,
    `idGoal` INTEGER NULL,
    `idTeam` INTEGER NULL,
    `idUser` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `status` BOOLEAN NOT NULL DEFAULT false,
    `descriptions` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `goalsUsersKrs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idCompany` INTEGER NOT NULL,
    `idUser` INTEGER NOT NULL,
    `idGoalsUser` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `descriptions` VARCHAR(191) NOT NULL,
    `toQuarterly` INTEGER NOT NULL,
    `fromQuarterly` INTEGER NOT NULL,
    `toYearly` INTEGER NOT NULL,
    `fromYearly` INTEGER NOT NULL,
    `done` INTEGER NOT NULL DEFAULT 0,
    `status` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `goalsUsers` ADD CONSTRAINT `goalsUsers_idGoal_fkey` FOREIGN KEY (`idGoal`) REFERENCES `goals`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `goalsUsers` ADD CONSTRAINT `goalsUsers_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `goalsUsers` ADD CONSTRAINT `goalsUsers_idTeam_fkey` FOREIGN KEY (`idTeam`) REFERENCES `teams`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `goalsUsers` ADD CONSTRAINT `goalsUsers_idUser_fkey` FOREIGN KEY (`idUser`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `goalsUsersKrs` ADD CONSTRAINT `goalsUsersKrs_idGoalsUser_fkey` FOREIGN KEY (`idGoalsUser`) REFERENCES `goalsUsers`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `goalsUsersKrs` ADD CONSTRAINT `goalsUsersKrs_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `goalsUsersKrs` ADD CONSTRAINT `goalsUsersKrs_idUser_fkey` FOREIGN KEY (`idUser`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
