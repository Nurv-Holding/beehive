-- CreateTable
CREATE TABLE `historyGoalsUserKrs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idGoalsUserKr` INTEGER NOT NULL,
    `idCompany` INTEGER NOT NULL,
    `note` TEXT NOT NULL,
    `status` BOOLEAN NOT NULL DEFAULT false,
    `to` DOUBLE NOT NULL,
    `from` DOUBLE NOT NULL,
    `quaPercentage` DOUBLE NOT NULL,
    `yeaPercentage` DOUBLE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `historyGoalsUserKrs` ADD CONSTRAINT `historyGoalsUserKrs_idGoalsUserKr_fkey` FOREIGN KEY (`idGoalsUserKr`) REFERENCES `goalsUsersKrs`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `historyGoalsUserKrs` ADD CONSTRAINT `historyGoalsUserKrs_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
