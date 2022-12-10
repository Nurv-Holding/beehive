/*
  Warnings:

  - Added the required column `author` to the `goalKrs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `author` to the `goals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `author` to the `goalsTeams` table without a default value. This is not possible if the table is not empty.
  - Added the required column `author` to the `goalTeamKrs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `from` to the `historyGoalKrs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `to` to the `historyGoalKrs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user` to the `historyGoalKrs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `from` to the `historyGoalsTeamKrs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `to` to the `historyGoalsTeamKrs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user` to the `historyGoalsTeamKrs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `author` to the `tasks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `goalkrs` ADD COLUMN `author` INTEGER NOT NULL,
    ADD COLUMN `status` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `goals` ADD COLUMN `author` INTEGER NOT NULL,
    ADD COLUMN `status` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `goalsteams` ADD COLUMN `author` INTEGER NOT NULL,
    ADD COLUMN `status` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `goalteamkrs` ADD COLUMN `author` INTEGER NOT NULL,
    ADD COLUMN `status` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `historygoalkrs` ADD COLUMN `from` DOUBLE NOT NULL,
    ADD COLUMN `status` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `to` DOUBLE NOT NULL,
    ADD COLUMN `user` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `historygoalsteamkrs` ADD COLUMN `from` DOUBLE NOT NULL,
    ADD COLUMN `status` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `to` DOUBLE NOT NULL,
    ADD COLUMN `user` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `tasks` ADD COLUMN `author` INTEGER NOT NULL;
