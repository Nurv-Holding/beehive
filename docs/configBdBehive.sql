-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 14-Nov-2022 às 18:59
-- Versão do servidor: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `behive`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `companies`
--

CREATE TABLE IF NOT EXISTS `companies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cnpj` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=2 ;

--
-- Extraindo dados da tabela `companies`
--

INSERT INTO `companies` (`id`, `name`, `cnpj`, `createdAt`, `updatedAt`) VALUES
(1, 'Nurv', '1234567dd', '2022-11-11 18:16:07.154', '2022-11-11 18:16:07.154');

-- --------------------------------------------------------

--
-- Estrutura da tabela `goalkrs`
--

CREATE TABLE IF NOT EXISTS `goalkrs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idCompany` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descriptions` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `done` int(11) NOT NULL DEFAULT '0',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `idGoal` int(11) NOT NULL,
  `fromQuarterly` int(11) NOT NULL,
  `fromYearly` int(11) NOT NULL,
  `toQuarterly` int(11) NOT NULL,
  `toYearly` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `goalKrs_idCompany_fkey` (`idCompany`),
  KEY `goalKrs_idGoal_fkey` (`idGoal`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=2 ;

--
-- Extraindo dados da tabela `goalkrs`
--

INSERT INTO `goalkrs` (`id`, `idCompany`, `name`, `descriptions`, `done`, `createdAt`, `updatedAt`, `idGoal`, `fromQuarterly`, `fromYearly`, `toQuarterly`, `toYearly`) VALUES
(1, 1, 'faturamento', 'fffffffff', 0, '2022-11-11 18:16:48.373', '2022-11-11 18:16:48.373', 1, 10000, 200000, 1000, 100000);

-- --------------------------------------------------------

--
-- Estrutura da tabela `goals`
--

CREATE TABLE IF NOT EXISTS `goals` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idCompany` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descriptions` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `done` int(11) NOT NULL DEFAULT '0',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `goals_idCompany_fkey` (`idCompany`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=2 ;

--
-- Extraindo dados da tabela `goals`
--

INSERT INTO `goals` (`id`, `idCompany`, `name`, `descriptions`, `done`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'ser uma empresa financeiramente sustentável', 'fffffffff', 0, '2022-11-11 18:16:26.621', '2022-11-11 18:16:26.621');

-- --------------------------------------------------------

--
-- Estrutura da tabela `goalsteams`
--

CREATE TABLE IF NOT EXISTS `goalsteams` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idCompany` int(11) NOT NULL,
  `idGoal` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descriptions` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `goalsTeams_idGoal_fkey` (`idGoal`),
  KEY `goalsTeams_idCompany_fkey` (`idCompany`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=2 ;

--
-- Extraindo dados da tabela `goalsteams`
--

INSERT INTO `goalsteams` (`id`, `idCompany`, `idGoal`, `name`, `descriptions`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, 'ser relevante no mercado', 'fffffffff', '2022-11-11 18:17:31.103', '2022-11-11 18:17:31.103');

-- --------------------------------------------------------

--
-- Estrutura da tabela `goalteamkrs`
--

CREATE TABLE IF NOT EXISTS `goalteamkrs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idCompany` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descriptions` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `done` int(11) NOT NULL DEFAULT '0',
  `idGoalsTeam` int(11) NOT NULL,
  `fromQuarterly` int(11) NOT NULL,
  `fromYearly` int(11) NOT NULL,
  `toQuarterly` int(11) NOT NULL,
  `toYearly` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `goalTeamKrs_idCompany_fkey` (`idCompany`),
  KEY `goalTeamKrs_idGoalsTeam_fkey` (`idGoalsTeam`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=2 ;

--
-- Extraindo dados da tabela `goalteamkrs`
--

INSERT INTO `goalteamkrs` (`id`, `idCompany`, `name`, `descriptions`, `createdAt`, `updatedAt`, `done`, `idGoalsTeam`, `fromQuarterly`, `fromYearly`, `toQuarterly`, `toYearly`) VALUES
(1, 1, 'faturamento', 'fffffffff', '2022-11-11 18:18:44.159', '2022-11-11 18:18:44.159', 0, 1, 10000, 200000, 1000, 100000);

-- --------------------------------------------------------

--
-- Estrutura da tabela `historygoalkrs`
--

CREATE TABLE IF NOT EXISTS `historygoalkrs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idGoalKr` int(11) NOT NULL,
  `idGoal` int(11) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `idCompany` int(11) NOT NULL,
  `quaPercentage` double NOT NULL,
  `yeaPercentage` double NOT NULL,
  PRIMARY KEY (`id`),
  KEY `historyGoalKrs_idGoalKr_fkey` (`idGoalKr`),
  KEY `historyGoalKrs_idGoal_fkey` (`idGoal`),
  KEY `historyGoalKrs_idCompany_fkey` (`idCompany`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estrutura da tabela `historygoalsteamkrs`
--

CREATE TABLE IF NOT EXISTS `historygoalsteamkrs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idProcessGoalTeam` int(11) NOT NULL,
  `idGoalsTeamKr` int(11) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `idCompany` int(11) NOT NULL,
  `quaPercentage` double NOT NULL,
  `yeaPercentage` double NOT NULL,
  PRIMARY KEY (`id`),
  KEY `historyGoalsTeamKrs_idProcessGoalTeam_fkey` (`idProcessGoalTeam`),
  KEY `historyGoalsTeamKrs_idGoalsTeamKr_fkey` (`idGoalsTeamKr`),
  KEY `historyGoalsTeamKrs_idCompany_fkey` (`idCompany`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estrutura da tabela `processgoalsteams`
--

CREATE TABLE IF NOT EXISTS `processgoalsteams` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idGoalsTeam` int(11) DEFAULT NULL,
  `idTeam` int(11) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `idGoal` int(11) DEFAULT NULL,
  `idCompany` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `processGoalsTeams_idGoalsTeam_fkey` (`idGoalsTeam`),
  KEY `processGoalsTeams_idTeam_fkey` (`idTeam`),
  KEY `processGoalsTeams_idGoal_fkey` (`idGoal`),
  KEY `processGoalsTeams_idCompany_fkey` (`idCompany`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=2 ;

--
-- Extraindo dados da tabela `processgoalsteams`
--

INSERT INTO `processgoalsteams` (`id`, `idGoalsTeam`, `idTeam`, `createdAt`, `updatedAt`, `idGoal`, `idCompany`) VALUES
(1, 1, 1, '2022-11-11 18:17:21.045', '2022-11-11 18:17:31.124', 1, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `profiles`
--

CREATE TABLE IF NOT EXISTS `profiles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tasks`
--

CREATE TABLE IF NOT EXISTS `tasks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idGoalsTeamKr` int(11) NOT NULL,
  `idCompany` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finalDate` datetime(3) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `tasks_idGoalsTeamKr_fkey` (`idGoalsTeamKr`),
  KEY `tasks_idCompany_fkey` (`idCompany`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estrutura da tabela `taskusers`
--

CREATE TABLE IF NOT EXISTS `taskusers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idTeamUser` int(11) DEFAULT NULL,
  `idCompany` int(11) NOT NULL,
  `idTask` int(11) NOT NULL,
  `done` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `taskUsers_idTeamUser_fkey` (`idTeamUser`),
  KEY `taskUsers_idTask_fkey` (`idTask`),
  KEY `taskUsers_idCompany_fkey` (`idCompany`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estrutura da tabela `teams`
--

CREATE TABLE IF NOT EXISTS `teams` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idCompany` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descriptions` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `teams_idCompany_fkey` (`idCompany`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=2 ;

--
-- Extraindo dados da tabela `teams`
--

INSERT INTO `teams` (`id`, `idCompany`, `name`, `descriptions`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'squade-behive', 'fffffffff', '2022-11-11 18:17:07.854', '2022-11-11 18:17:07.854');

-- --------------------------------------------------------

--
-- Estrutura da tabela `teamusers`
--

CREATE TABLE IF NOT EXISTS `teamusers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idCompany` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `idTeam` int(11) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `teamUsers_idCompany_fkey` (`idCompany`),
  KEY `teamUsers_idUser_fkey` (`idUser`),
  KEY `teamUsers_idTeam_fkey` (`idTeam`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idCompany` int(11) DEFAULT NULL,
  `idProfile` int(11) DEFAULT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `photo` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `occupation` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `roles` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_key` (`email`),
  KEY `users_idCompany_fkey` (`idCompany`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estrutura da tabela `_prisma_migrations`
--

CREATE TABLE IF NOT EXISTS `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int(10) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('2ac70658-fe75-4059-a4b5-cf0673db5447', 'cb7a56f88b777522790989d911b1dd6e74aef4cb43cabcc42bb105f95e071075', '2022-11-11 18:14:32.275', '20221106041200_new_model', NULL, NULL, '2022-11-11 18:14:32.152', 1),
('46d3c77a-2750-49e1-b5fe-b0c9d564faee', '40b8841b624a69ee8b2a1f1d532595c32ffe7c6ed82893b572c0afa7d35172f3', '2022-11-11 18:14:30.783', '20221104021935_new_model', NULL, NULL, '2022-11-11 18:14:29.502', 1),
('7f839f40-a0bb-4d69-bf93-bc80d3ba2160', 'c5d7457b653313a2c3156ae3a52b19c32e1c5ded71a6b0c315e04fb6f4ed8a1d', '2022-11-11 18:14:47.022', '20221111181446_new_model', NULL, NULL, '2022-11-11 18:14:46.274', 1),
('9efa82c7-e39e-4c1d-b4d3-b75accd91bc9', '4792d5b7ed5c369c7a9df7492aaeac02013f0720a238737b8a9b76d25ea376cc', '2022-11-11 18:14:31.278', '20221104033526_new_model', NULL, NULL, '2022-11-11 18:14:31.127', 1),
('aa574018-67b5-40bd-b166-df5c54cfc12b', '9fc42dbfd851dcb75093e53b3f445a3f8a63f9f91838846f0bc1067bbabfa04c', '2022-11-11 18:14:32.149', '20221106030658_new_model', NULL, NULL, '2022-11-11 18:14:31.649', 1),
('d9df79f3-c4fd-4d83-ac6c-d40fe71d5f87', 'a5ecb7f134d013fc3d388e8c29ad8aa7ae1a5444b7f8c82c25634f4642edde4b', '2022-11-11 18:14:31.126', '20221104032215_new_model', NULL, NULL, '2022-11-11 18:14:30.786', 1),
('e12c1104-29a0-4a27-afc5-eb840afd701f', '8dc8009b4065f1fa0bd303f60a5dddd835748a8c9a227ad740fb03a732cf231b', '2022-11-11 18:14:31.648', '20221104131624_new_model', NULL, NULL, '2022-11-11 18:14:31.281', 1);

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `goalkrs`
--
ALTER TABLE `goalkrs`
  ADD CONSTRAINT `goalKrs_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `goalKrs_idGoal_fkey` FOREIGN KEY (`idGoal`) REFERENCES `goals` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `goals`
--
ALTER TABLE `goals`
  ADD CONSTRAINT `goals_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `goalsteams`
--
ALTER TABLE `goalsteams`
  ADD CONSTRAINT `goalsTeams_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `goalsTeams_idGoal_fkey` FOREIGN KEY (`idGoal`) REFERENCES `goals` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `goalteamkrs`
--
ALTER TABLE `goalteamkrs`
  ADD CONSTRAINT `goalTeamKrs_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `goalTeamKrs_idGoalsTeam_fkey` FOREIGN KEY (`idGoalsTeam`) REFERENCES `goalsteams` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `historygoalkrs`
--
ALTER TABLE `historygoalkrs`
  ADD CONSTRAINT `historyGoalKrs_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `historyGoalKrs_idGoalKr_fkey` FOREIGN KEY (`idGoalKr`) REFERENCES `goalkrs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `historyGoalKrs_idGoal_fkey` FOREIGN KEY (`idGoal`) REFERENCES `goals` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `historygoalsteamkrs`
--
ALTER TABLE `historygoalsteamkrs`
  ADD CONSTRAINT `historyGoalsTeamKrs_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `historyGoalsTeamKrs_idGoalsTeamKr_fkey` FOREIGN KEY (`idGoalsTeamKr`) REFERENCES `goalteamkrs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `historyGoalsTeamKrs_idProcessGoalTeam_fkey` FOREIGN KEY (`idProcessGoalTeam`) REFERENCES `processgoalsteams` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `processgoalsteams`
--
ALTER TABLE `processgoalsteams`
  ADD CONSTRAINT `processGoalsTeams_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `processGoalsTeams_idGoalsTeam_fkey` FOREIGN KEY (`idGoalsTeam`) REFERENCES `goalsteams` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `processGoalsTeams_idGoal_fkey` FOREIGN KEY (`idGoal`) REFERENCES `goals` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `processGoalsTeams_idTeam_fkey` FOREIGN KEY (`idTeam`) REFERENCES `teams` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `tasks`
--
ALTER TABLE `tasks`
  ADD CONSTRAINT `tasks_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tasks_idGoalsTeamKr_fkey` FOREIGN KEY (`idGoalsTeamKr`) REFERENCES `goalteamkrs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `taskusers`
--
ALTER TABLE `taskusers`
  ADD CONSTRAINT `taskUsers_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `taskUsers_idTask_fkey` FOREIGN KEY (`idTask`) REFERENCES `tasks` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `taskUsers_idTeamUser_fkey` FOREIGN KEY (`idTeamUser`) REFERENCES `teamusers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `teams`
--
ALTER TABLE `teams`
  ADD CONSTRAINT `teams_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `teamusers`
--
ALTER TABLE `teamusers`
  ADD CONSTRAINT `teamUsers_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `teamUsers_idTeam_fkey` FOREIGN KEY (`idTeam`) REFERENCES `teams` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `teamUsers_idUser_fkey` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`) ON UPDATE CASCADE;

--
-- Limitadores para a tabela `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
