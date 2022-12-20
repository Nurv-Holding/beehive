-- CreateTable
CREATE TABLE `companies` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `cnpj` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `teamUsers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idCompany` INTEGER NOT NULL,
    `idUser` INTEGER NOT NULL,
    `idTeam` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `teams` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idCompany` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `descriptions` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `profiles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idCompany` INTEGER NULL,
    `idProfile` INTEGER NULL,
    `name` VARCHAR(191) NOT NULL,
    `photo` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `occupation` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NULL,
    `roles` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `futureVisions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idCompany` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `principles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idCompany` INTEGER NOT NULL,
    `idFutureVision` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `proposals` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idCompany` INTEGER NOT NULL,
    `idFutureVision` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `goals` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idCompany` INTEGER NOT NULL,
    `idFutureVision` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `author` INTEGER NOT NULL,
    `descriptions` VARCHAR(191) NOT NULL,
    `done` INTEGER NOT NULL DEFAULT 0,
    `status` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `goalsTeams` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idCompany` INTEGER NOT NULL,
    `idGoal` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `author` INTEGER NOT NULL,
    `status` BOOLEAN NOT NULL DEFAULT false,
    `descriptions` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `processGoalsTeams` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idGoalsTeam` INTEGER NULL,
    `idTeam` INTEGER NULL,
    `idGoal` INTEGER NULL,
    `idFutureVision` INTEGER NULL,
    `idCompany` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `goalTeamKrs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idCompany` INTEGER NOT NULL,
    `idGoalsTeam` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `author` INTEGER NOT NULL,
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

-- CreateTable
CREATE TABLE `goalKrs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idCompany` INTEGER NOT NULL,
    `idGoal` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `author` INTEGER NOT NULL,
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

-- CreateTable
CREATE TABLE `historyGoalKrs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idGoalKr` INTEGER NOT NULL,
    `idGoal` INTEGER NOT NULL,
    `idCompany` INTEGER NOT NULL,
    `idFutureVision` INTEGER NOT NULL,
    `user` VARCHAR(191) NOT NULL,
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

-- CreateTable
CREATE TABLE `historyGoalsTeamKrs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idProcessGoalTeam` INTEGER NOT NULL,
    `idGoalsTeamKr` INTEGER NOT NULL,
    `idCompany` INTEGER NOT NULL,
    `note` TEXT NOT NULL,
    `user` VARCHAR(191) NOT NULL,
    `status` BOOLEAN NOT NULL DEFAULT false,
    `to` DOUBLE NOT NULL,
    `from` DOUBLE NOT NULL,
    `quaPercentage` DOUBLE NOT NULL,
    `yeaPercentage` DOUBLE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tasks` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idGoalsTeamKr` INTEGER NOT NULL,
    `idCompany` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `author` INTEGER NOT NULL,
    `finalDate` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `taskUsers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idTeamUser` INTEGER NULL,
    `idCompany` INTEGER NOT NULL,
    `idTask` INTEGER NOT NULL,
    `done` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `teamUsers` ADD CONSTRAINT `teamUsers_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `teamUsers` ADD CONSTRAINT `teamUsers_idUser_fkey` FOREIGN KEY (`idUser`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `teamUsers` ADD CONSTRAINT `teamUsers_idTeam_fkey` FOREIGN KEY (`idTeam`) REFERENCES `teams`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `teams` ADD CONSTRAINT `teams_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `futureVisions` ADD CONSTRAINT `futureVisions_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `principles` ADD CONSTRAINT `principles_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `principles` ADD CONSTRAINT `principles_idFutureVision_fkey` FOREIGN KEY (`idFutureVision`) REFERENCES `futureVisions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `proposals` ADD CONSTRAINT `proposals_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `proposals` ADD CONSTRAINT `proposals_idFutureVision_fkey` FOREIGN KEY (`idFutureVision`) REFERENCES `futureVisions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `goals` ADD CONSTRAINT `goals_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `goals` ADD CONSTRAINT `goals_idFutureVision_fkey` FOREIGN KEY (`idFutureVision`) REFERENCES `futureVisions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `goalsTeams` ADD CONSTRAINT `goalsTeams_idGoal_fkey` FOREIGN KEY (`idGoal`) REFERENCES `goals`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `goalsTeams` ADD CONSTRAINT `goalsTeams_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `processGoalsTeams` ADD CONSTRAINT `processGoalsTeams_idGoalsTeam_fkey` FOREIGN KEY (`idGoalsTeam`) REFERENCES `goalsTeams`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `processGoalsTeams` ADD CONSTRAINT `processGoalsTeams_idTeam_fkey` FOREIGN KEY (`idTeam`) REFERENCES `teams`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `processGoalsTeams` ADD CONSTRAINT `processGoalsTeams_idGoal_fkey` FOREIGN KEY (`idGoal`) REFERENCES `goals`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `processGoalsTeams` ADD CONSTRAINT `processGoalsTeams_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `processGoalsTeams` ADD CONSTRAINT `processGoalsTeams_idFutureVision_fkey` FOREIGN KEY (`idFutureVision`) REFERENCES `futureVisions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `goalTeamKrs` ADD CONSTRAINT `goalTeamKrs_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `goalTeamKrs` ADD CONSTRAINT `goalTeamKrs_idGoalsTeam_fkey` FOREIGN KEY (`idGoalsTeam`) REFERENCES `goalsTeams`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `goalKrs` ADD CONSTRAINT `goalKrs_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `goalKrs` ADD CONSTRAINT `goalKrs_idGoal_fkey` FOREIGN KEY (`idGoal`) REFERENCES `goals`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `historyGoalKrs` ADD CONSTRAINT `historyGoalKrs_idGoalKr_fkey` FOREIGN KEY (`idGoalKr`) REFERENCES `goalKrs`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `historyGoalKrs` ADD CONSTRAINT `historyGoalKrs_idGoal_fkey` FOREIGN KEY (`idGoal`) REFERENCES `goals`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `historyGoalKrs` ADD CONSTRAINT `historyGoalKrs_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `historyGoalKrs` ADD CONSTRAINT `historyGoalKrs_idFutureVision_fkey` FOREIGN KEY (`idFutureVision`) REFERENCES `futureVisions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `historyGoalsTeamKrs` ADD CONSTRAINT `historyGoalsTeamKrs_idProcessGoalTeam_fkey` FOREIGN KEY (`idProcessGoalTeam`) REFERENCES `processGoalsTeams`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `historyGoalsTeamKrs` ADD CONSTRAINT `historyGoalsTeamKrs_idGoalsTeamKr_fkey` FOREIGN KEY (`idGoalsTeamKr`) REFERENCES `goalTeamKrs`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `historyGoalsTeamKrs` ADD CONSTRAINT `historyGoalsTeamKrs_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tasks` ADD CONSTRAINT `tasks_idGoalsTeamKr_fkey` FOREIGN KEY (`idGoalsTeamKr`) REFERENCES `goalTeamKrs`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tasks` ADD CONSTRAINT `tasks_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `taskUsers` ADD CONSTRAINT `taskUsers_idTeamUser_fkey` FOREIGN KEY (`idTeamUser`) REFERENCES `teamUsers`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `taskUsers` ADD CONSTRAINT `taskUsers_idTask_fkey` FOREIGN KEY (`idTask`) REFERENCES `tasks`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `taskUsers` ADD CONSTRAINT `taskUsers_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
