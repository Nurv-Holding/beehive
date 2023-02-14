-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 04-Jan-2023 às 19:44
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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=4 ;

--
-- Extraindo dados da tabela `companies`
--

INSERT INTO `companies` (`id`, `name`, `cnpj`, `createdAt`, `updatedAt`) VALUES
(3, 'nurv', '1234567', '2022-12-22 14:03:54.087', '2022-12-23 14:46:35.736');

-- --------------------------------------------------------

--
-- Estrutura da tabela `futurevisions`
--

CREATE TABLE IF NOT EXISTS `futurevisions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idCompany` int(11) NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `futureVisions_idCompany_fkey` (`idCompany`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=8 ;

--
-- Extraindo dados da tabela `futurevisions`
--

INSERT INTO `futurevisions` (`id`, `idCompany`, `title`, `description`, `createdAt`, `updatedAt`) VALUES
(5, 3, 'Futuro melhor', ' is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing', '2022-12-22 15:30:53.742', '2022-12-22 15:30:53.742'),
(7, 3, 'Teste Visão 2', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into', '2023-01-04 02:39:20.093', '2023-01-04 02:39:20.093');

-- --------------------------------------------------------

--
-- Estrutura da tabela `goalkrs`
--

CREATE TABLE IF NOT EXISTS `goalkrs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idCompany` int(11) NOT NULL,
  `idGoal` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `author` int(11) NOT NULL,
  `descriptions` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `toQuarterly` int(11) NOT NULL,
  `fromQuarterly` int(11) NOT NULL,
  `toYearly` int(11) NOT NULL,
  `fromYearly` int(11) NOT NULL,
  `done` int(11) NOT NULL DEFAULT '0',
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `goalKrs_idCompany_fkey` (`idCompany`),
  KEY `goalKrs_idGoal_fkey` (`idGoal`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=4 ;

--
-- Extraindo dados da tabela `goalkrs`
--

INSERT INTO `goalkrs` (`id`, `idCompany`, `idGoal`, `name`, `author`, `descriptions`, `toQuarterly`, `fromQuarterly`, `toYearly`, `fromYearly`, `done`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 3, 8, 'faturamento', 1, 'dddddd', 1000, 10000, 1000, 200000, 1000, 0, '2023-01-04 00:05:53.316', '2023-01-04 00:05:53.316'),
(2, 3, 9, 'faturar muito', 1, 'dddddd', 1000, 10000, 1000, 200000, 1000, 0, '2023-01-04 00:10:08.047', '2023-01-04 00:10:08.047'),
(3, 3, 10, 'faturamento', 1, 'dddddd', 1000, 10000, 1000, 200000, 1000, 0, '2023-01-04 15:05:10.364', '2023-01-04 15:05:10.364');

-- --------------------------------------------------------

--
-- Estrutura da tabela `goals`
--

CREATE TABLE IF NOT EXISTS `goals` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idCompany` int(11) NOT NULL,
  `idFutureVision` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `author` int(11) NOT NULL,
  `descriptions` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `done` int(11) NOT NULL DEFAULT '0',
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `goals_idCompany_fkey` (`idCompany`),
  KEY `goals_idFutureVision_fkey` (`idFutureVision`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=11 ;

--
-- Extraindo dados da tabela `goals`
--

INSERT INTO `goals` (`id`, `idCompany`, `idFutureVision`, `name`, `author`, `descriptions`, `done`, `status`, `createdAt`, `updatedAt`) VALUES
(8, 3, 5, 'ser uma empresa melhor', 1, 'frtghyuj', 0, 0, '2023-01-02 11:57:21.236', '2023-01-02 11:57:21.236'),
(9, 3, 5, 'ser uma empresa demais', 1, 'frtghyuj', 0, 0, '2023-01-04 00:09:35.421', '2023-01-04 00:09:35.421'),
(10, 3, 5, 'Objetivo teste', 1, 'fffffffffffff', 0, 0, '2023-01-04 14:11:35.429', '2023-01-04 14:11:35.429');

-- --------------------------------------------------------

--
-- Estrutura da tabela `goalsteams`
--

CREATE TABLE IF NOT EXISTS `goalsteams` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idCompany` int(11) NOT NULL,
  `idGoal` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `author` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `descriptions` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `goalsTeams_idGoal_fkey` (`idGoal`),
  KEY `goalsTeams_idCompany_fkey` (`idCompany`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=4 ;

--
-- Extraindo dados da tabela `goalsteams`
--

INSERT INTO `goalsteams` (`id`, `idCompany`, `idGoal`, `name`, `author`, `status`, `descriptions`, `createdAt`, `updatedAt`) VALUES
(1, 3, 8, 'objetivo teste', 1, 0, 'dddddd', '2023-01-04 00:06:08.392', '2023-01-04 00:06:08.392'),
(2, 3, 9, 'objetivo teste', 1, 0, 'dddddd', '2023-01-04 00:40:04.575', '2023-01-04 00:40:04.575'),
(3, 3, 10, 'objetivo teste', 1, 0, 'dddddd', '2023-01-04 17:17:52.448', '2023-01-04 17:17:52.448');

-- --------------------------------------------------------

--
-- Estrutura da tabela `goalteamkrs`
--

CREATE TABLE IF NOT EXISTS `goalteamkrs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idCompany` int(11) NOT NULL,
  `idGoalsTeam` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `author` int(11) NOT NULL,
  `descriptions` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `toQuarterly` int(11) NOT NULL,
  `fromQuarterly` int(11) NOT NULL,
  `toYearly` int(11) NOT NULL,
  `fromYearly` int(11) NOT NULL,
  `done` int(11) NOT NULL DEFAULT '0',
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `goalTeamKrs_idCompany_fkey` (`idCompany`),
  KEY `goalTeamKrs_idGoalsTeam_fkey` (`idGoalsTeam`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=4 ;

--
-- Extraindo dados da tabela `goalteamkrs`
--

INSERT INTO `goalteamkrs` (`id`, `idCompany`, `idGoalsTeam`, `name`, `author`, `descriptions`, `toQuarterly`, `fromQuarterly`, `toYearly`, `fromYearly`, `done`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 3, 1, 'faturamento', 1, 'dddddd', 1000, 10000, 1000, 200000, 1000, 0, '2023-01-04 00:06:19.444', '2023-01-04 00:06:19.444'),
(2, 3, 2, 'faturamento', 1, 'dddddd', 1000, 10000, 1000, 200000, 1000, 0, '2023-01-04 00:40:27.060', '2023-01-04 00:40:27.060'),
(3, 3, 2, 'faturamento 2', 1, 'dddddd', 1000, 10000, 1000, 200000, 1000, 0, '2023-01-04 00:44:14.622', '2023-01-04 00:44:14.622');

-- --------------------------------------------------------

--
-- Estrutura da tabela `goaluserkrs`
--

CREATE TABLE IF NOT EXISTS `goaluserkrs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idCompany` int(11) NOT NULL,
  `idGoal` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `idGoalUser` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descriptions` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `to` int(11) NOT NULL,
  `fromQuarterly` int(11) NOT NULL,
  `fromYearly` int(11) NOT NULL,
  `done` int(11) NOT NULL DEFAULT '0',
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `goalUserKrs_idCompany_fkey` (`idCompany`),
  KEY `goalUserKrs_idGoal_fkey` (`idGoal`),
  KEY `goalUserKrs_idUser_fkey` (`idUser`),
  KEY `goalUserKrs_idGoalUser_fkey` (`idGoalUser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estrutura da tabela `goalusers`
--

CREATE TABLE IF NOT EXISTS `goalusers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idTeamUser` int(11) NOT NULL,
  `idCompany` int(11) NOT NULL,
  `idGoal` int(11) NOT NULL,
  `done` tinyint(1) NOT NULL DEFAULT '0',
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `goalUsers_idTeamUser_fkey` (`idTeamUser`),
  KEY `goalUsers_idGoal_fkey` (`idGoal`),
  KEY `goalUsers_idCompany_fkey` (`idCompany`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estrutura da tabela `historygoalkrs`
--

CREATE TABLE IF NOT EXISTS `historygoalkrs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idGoalKr` int(11) NOT NULL,
  `idGoal` int(11) NOT NULL,
  `idCompany` int(11) NOT NULL,
  `user` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `note` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `to` double NOT NULL,
  `from` double NOT NULL,
  `quaPercentage` double NOT NULL,
  `yeaPercentage` double NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `goalUserKrId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `historyGoalKrs_idGoalKr_fkey` (`idGoalKr`),
  KEY `historyGoalKrs_idGoal_fkey` (`idGoal`),
  KEY `historyGoalKrs_idCompany_fkey` (`idCompany`),
  KEY `historyGoalKrs_goalUserKrId_fkey` (`goalUserKrId`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=4 ;

--
-- Extraindo dados da tabela `historygoalkrs`
--

INSERT INTO `historygoalkrs` (`id`, `idGoalKr`, `idGoal`, `idCompany`, `user`, `note`, `status`, `to`, `from`, `quaPercentage`, `yeaPercentage`, `createdAt`, `updatedAt`, `goalUserKrId`) VALUES
(1, 1, 8, 3, 'Admin Master', 'Iniciando Kr', 0, 1000, 1000, 10, 0.5, '2023-01-04 00:05:53.763', '2023-01-04 00:05:53.763', NULL),
(2, 2, 9, 3, 'Admin Master', 'Iniciando Kr', 0, 1000, 1000, 10, 0.5, '2023-01-04 00:10:08.064', '2023-01-04 00:10:08.064', NULL),
(3, 3, 10, 3, 'Admin Master', 'Iniciando Kr', 0, 1000, 1000, 10, 0.5, '2023-01-04 15:05:10.397', '2023-01-04 15:05:10.397', NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `historygoalsteamkrs`
--

CREATE TABLE IF NOT EXISTS `historygoalsteamkrs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idProcessGoalTeam` int(11) NOT NULL,
  `idGoalsTeamKr` int(11) NOT NULL,
  `idCompany` int(11) NOT NULL,
  `note` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `user` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `to` double NOT NULL,
  `from` double NOT NULL,
  `quaPercentage` double NOT NULL,
  `yeaPercentage` double NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `historyGoalsTeamKrs_idProcessGoalTeam_fkey` (`idProcessGoalTeam`),
  KEY `historyGoalsTeamKrs_idGoalsTeamKr_fkey` (`idGoalsTeamKr`),
  KEY `historyGoalsTeamKrs_idCompany_fkey` (`idCompany`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=4 ;

--
-- Extraindo dados da tabela `historygoalsteamkrs`
--

INSERT INTO `historygoalsteamkrs` (`id`, `idProcessGoalTeam`, `idGoalsTeamKr`, `idCompany`, `note`, `user`, `status`, `to`, `from`, `quaPercentage`, `yeaPercentage`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, 3, 'Iniciando Kr', 'Admin Master', 0, 1000, 1000, 10, 0.5, '2023-01-04 00:06:19.560', '2023-01-04 00:06:19.560'),
(2, 2, 2, 3, 'Iniciando Kr', 'Admin Master', 0, 1000, 1000, 10, 0.5, '2023-01-04 00:40:27.162', '2023-01-04 00:40:27.162'),
(3, 2, 3, 3, 'Iniciando Kr', 'Admin Master', 0, 1000, 1000, 10, 0.5, '2023-01-04 00:44:14.740', '2023-01-04 00:44:14.740');

-- --------------------------------------------------------

--
-- Estrutura da tabela `principles`
--

CREATE TABLE IF NOT EXISTS `principles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idCompany` int(11) NOT NULL,
  `idFutureVision` int(11) NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `principles_idCompany_fkey` (`idCompany`),
  KEY `principles_idFutureVision_fkey` (`idFutureVision`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=9 ;

--
-- Extraindo dados da tabela `principles`
--

INSERT INTO `principles` (`id`, `idCompany`, `idFutureVision`, `title`, `description`, `createdAt`, `updatedAt`) VALUES
(5, 3, 5, 'Bater metas', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ''Content here, content here'', making it look like readable English.', '2022-12-22 15:31:20.014', '2022-12-22 15:31:20.014'),
(6, 3, 5, 'Principios', 'gggggggdd', '2023-01-04 13:40:36.854', '2023-01-04 13:40:36.854'),
(7, 3, 5, 'Proposito', 'hhhhhhh', '2023-01-04 13:47:09.416', '2023-01-04 13:47:09.416'),
(8, 3, 5, 'Proposito', 'fffffffff', '2023-01-04 13:49:17.868', '2023-01-04 13:49:17.868');

-- --------------------------------------------------------

--
-- Estrutura da tabela `processGoalsTeams`
--

CREATE TABLE IF NOT EXISTS `processGoalsTeams` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idGoalsTeam` int(11) DEFAULT NULL,
  `idTeam` int(11) DEFAULT NULL,
  `idGoal` int(11) DEFAULT NULL,
  `idCompany` int(11) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `processGoalsTeams_idGoalsTeam_fkey` (`idGoalsTeam`),
  KEY `processGoalsTeams_idTeam_fkey` (`idTeam`),
  KEY `processGoalsTeams_idGoal_fkey` (`idGoal`),
  KEY `processGoalsTeams_idCompany_fkey` (`idCompany`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=6 ;

--
-- Extraindo dados da tabela `processGoalsTeams`
--

INSERT INTO `processGoalsTeams` (`id`, `idGoalsTeam`, `idTeam`, `idGoal`, `idCompany`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, 8, 3, '2023-01-04 00:06:00.375', '2023-01-04 00:06:08.716'),
(2, 2, 1, 9, 3, '2023-01-04 00:10:13.144', '2023-01-04 00:40:04.592'),
(3, NULL, 2, 9, 3, '2023-01-04 00:10:17.460', '2023-01-04 00:10:17.460'),
(4, 3, 3, 10, 3, '2023-01-04 15:05:21.650', '2023-01-04 17:17:52.808'),
(5, NULL, 4, 10, 3, '2023-01-04 15:23:33.255', '2023-01-04 15:23:33.255');

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=4 ;

--
-- Extraindo dados da tabela `profiles`
--

INSERT INTO `profiles` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'adminMaster', '2022-12-20 00:15:13.434', '2022-12-20 00:15:13.434'),
(2, 'adminCorporate', '2022-12-20 00:15:23.244', '2022-12-20 00:15:23.244'),
(3, 'userCorporate', '2022-12-20 00:15:31.516', '2022-12-20 00:15:31.516');

-- --------------------------------------------------------

--
-- Estrutura da tabela `proposals`
--

CREATE TABLE IF NOT EXISTS `proposals` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idCompany` int(11) NOT NULL,
  `idFutureVision` int(11) NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `proposals_idCompany_fkey` (`idCompany`),
  KEY `proposals_idFutureVision_fkey` (`idFutureVision`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=6 ;

--
-- Extraindo dados da tabela `proposals`
--

INSERT INTO `proposals` (`id`, `idCompany`, `idFutureVision`, `title`, `description`, `createdAt`, `updatedAt`) VALUES
(4, 3, 5, 'Propostas', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ''Content here, content here'', making it look like readable English.', '2022-12-22 15:31:36.915', '2022-12-22 15:31:36.915'),
(5, 3, 5, 'Proposito', 'gggggggg', '2023-01-04 13:52:08.064', '2023-01-04 13:52:08.064');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tasks`
--

CREATE TABLE IF NOT EXISTS `tasks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idGoalsTeamKr` int(11) NOT NULL,
  `idCompany` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `author` int(11) NOT NULL,
  `finalDate` datetime(3) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `tasks_idGoalsTeamKr_fkey` (`idGoalsTeamKr`),
  KEY `tasks_idCompany_fkey` (`idCompany`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=2 ;

--
-- Extraindo dados da tabela `tasks`
--

INSERT INTO `tasks` (`id`, `idGoalsTeamKr`, `idCompany`, `name`, `author`, `finalDate`, `createdAt`, `updatedAt`) VALUES
(1, 1, 3, 'tarefa 01', 1, '2023-11-15 00:00:00.000', '2023-01-04 18:15:11.470', '2023-01-04 18:15:11.470');

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
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `taskUsers_idTeamUser_fkey` (`idTeamUser`),
  KEY `taskUsers_idTask_fkey` (`idTask`),
  KEY `taskUsers_idCompany_fkey` (`idCompany`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=2 ;

--
-- Extraindo dados da tabela `taskusers`
--

INSERT INTO `taskusers` (`id`, `idTeamUser`, `idCompany`, `idTask`, `done`, `createdAt`, `updatedAt`, `description`) VALUES
(1, 1, 3, 1, 1, '2023-01-04 18:15:11.533', '2023-01-04 18:15:24.516', 'bbbbbbbbbb');

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
  `leader` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `teams_idCompany_fkey` (`idCompany`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=5 ;

--
-- Extraindo dados da tabela `teams`
--

INSERT INTO `teams` (`id`, `idCompany`, `name`, `descriptions`, `createdAt`, `updatedAt`, `leader`) VALUES
(1, 3, 'squad nurv', 'frgtyhnjum', '2023-01-04 00:03:39.178', '2023-01-04 00:59:03.067', 4),
(2, 3, 'squad behive', 'frgtyhnjum', '2023-01-04 00:04:02.457', '2023-01-04 00:59:31.741', 5),
(3, 3, 'squad teste', 'fffffffff', '2023-01-04 14:51:59.219', '2023-01-04 15:12:06.741', 4),
(4, 3, 'squd test 2', 'dddddd', '2023-01-04 15:23:14.623', '2023-01-04 15:23:14.623', 5);

-- --------------------------------------------------------

--
-- Estrutura da tabela `teamUsers`
--

CREATE TABLE IF NOT EXISTS `teamUsers` (
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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=4 ;

--
-- Extraindo dados da tabela `teamUsers`
--

INSERT INTO `teamUsers` (`id`, `idCompany`, `idUser`, `idTeam`, `createdAt`, `updatedAt`) VALUES
(1, 3, 5, 1, '2023-01-04 00:05:06.227', '2023-01-04 00:05:06.227'),
(2, 3, 4, 1, '2023-01-04 00:05:13.671', '2023-01-04 00:05:13.671'),
(3, 3, 4, 2, '2023-01-04 00:05:20.767', '2023-01-04 00:05:20.767');

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=6 ;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`id`, `idCompany`, `idProfile`, `name`, `photo`, `email`, `occupation`, `password`, `roles`, `createdAt`, `updatedAt`) VALUES
(1, NULL, 1, 'Admin Master', NULL, 'admin@gmail.com', 'Administrador', '12344321', NULL, '2022-12-20 00:15:43.084', '2022-12-20 00:15:43.084'),
(4, 3, 3, 'Victor jacinto barriga', NULL, 'victor@gmail.com', 'Ze ruela', '12344321', NULL, '2022-12-22 15:33:54.949', '2022-12-22 15:33:54.949'),
(5, 3, 3, 'Novato kuka beludo', NULL, 'novato@gmail.com', 'Ze ninguém', '12344321', NULL, '2022-12-22 23:02:34.174', '2022-12-22 23:02:34.174');

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
('0e113a5f-5211-437a-8c4d-d8aad02042d7', '2b1b124a0d566a7fb2893078314c50284e850057ac821283097d79749fca5cce', '2022-12-22 13:51:24.858', '20221222135123_new_model', NULL, NULL, '2022-12-22 13:51:23.874', 1),
('35063173-766a-44ff-b2fb-15ad324ba945', '9cedbec3ea0090754a06a8d6c8e68b6983b6e8eec0a306fb57ceeec47732150b', '2022-12-22 00:07:46.017', '20221222000745_history_gosls_team_kr_model', NULL, NULL, '2022-12-22 00:07:45.935', 1),
('3531a265-0d5b-4333-892f-49bfce085789', 'b7e86413c62b17d08735a6668b3ec7744e7079e7242315cf0cb2ca9137c747f3', '2022-12-22 00:03:27.146', '20221222000326_new_model', NULL, NULL, '2022-12-22 00:03:26.926', 1),
('d1cb3a37-0295-446a-9ffd-f4732af54e07', 'e90aaf67148d48c2ced38fcfa8db892e6ee242365d5d598e2fbe02fccc1882be', '2022-12-20 00:23:30.645', '20221220002330_new_model', NULL, NULL, '2022-12-20 00:23:30.422', 1),
('f80e1661-b3d0-4494-879a-7568fdf98d9a', '98752a3664459e0cd2023343e9dd117158d5d3f6e75dcf68d6dc35974a50a046', '2022-12-20 00:13:18.471', '20221220001315_new_model', NULL, NULL, '2022-12-20 00:13:15.703', 1);

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `futurevisions`
--
ALTER TABLE `futurevisions`
  ADD CONSTRAINT `futureVisions_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

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
  ADD CONSTRAINT `goals_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `goals_idFutureVision_fkey` FOREIGN KEY (`idFutureVision`) REFERENCES `futurevisions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

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
-- Limitadores para a tabela `goaluserkrs`
--
ALTER TABLE `goaluserkrs`
  ADD CONSTRAINT `goalUserKrs_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `goalUserKrs_idGoalUser_fkey` FOREIGN KEY (`idGoalUser`) REFERENCES `goalusers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `goalUserKrs_idGoal_fkey` FOREIGN KEY (`idGoal`) REFERENCES `goals` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `goalUserKrs_idUser_fkey` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `goalusers`
--
ALTER TABLE `goalusers`
  ADD CONSTRAINT `goalUsers_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `goalUsers_idGoal_fkey` FOREIGN KEY (`idGoal`) REFERENCES `goals` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `goalUsers_idTeamUser_fkey` FOREIGN KEY (`idTeamUser`) REFERENCES `teamUsers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `historygoalkrs`
--
ALTER TABLE `historygoalkrs`
  ADD CONSTRAINT `historyGoalKrs_goalUserKrId_fkey` FOREIGN KEY (`goalUserKrId`) REFERENCES `goaluserkrs` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `historyGoalKrs_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `historyGoalKrs_idGoalKr_fkey` FOREIGN KEY (`idGoalKr`) REFERENCES `goalkrs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `historyGoalKrs_idGoal_fkey` FOREIGN KEY (`idGoal`) REFERENCES `goals` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `historygoalsteamkrs`
--
ALTER TABLE `historygoalsteamkrs`
  ADD CONSTRAINT `historyGoalsTeamKrs_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `historyGoalsTeamKrs_idGoalsTeamKr_fkey` FOREIGN KEY (`idGoalsTeamKr`) REFERENCES `goalteamkrs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `historyGoalsTeamKrs_idProcessGoalTeam_fkey` FOREIGN KEY (`idProcessGoalTeam`) REFERENCES `processGoalsTeams` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `principles`
--
ALTER TABLE `principles`
  ADD CONSTRAINT `principles_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `principles_idFutureVision_fkey` FOREIGN KEY (`idFutureVision`) REFERENCES `futurevisions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `processGoalsTeams`
--
ALTER TABLE `processGoalsTeams`
  ADD CONSTRAINT `processGoalsTeams_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `processGoalsTeams_idGoalsTeam_fkey` FOREIGN KEY (`idGoalsTeam`) REFERENCES `goalsteams` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `processGoalsTeams_idGoal_fkey` FOREIGN KEY (`idGoal`) REFERENCES `goals` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `processGoalsTeams_idTeam_fkey` FOREIGN KEY (`idTeam`) REFERENCES `teams` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `proposals`
--
ALTER TABLE `proposals`
  ADD CONSTRAINT `proposals_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `proposals_idFutureVision_fkey` FOREIGN KEY (`idFutureVision`) REFERENCES `futurevisions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

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
  ADD CONSTRAINT `taskUsers_idTeamUser_fkey` FOREIGN KEY (`idTeamUser`) REFERENCES `teamUsers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `teams`
--
ALTER TABLE `teams`
  ADD CONSTRAINT `teams_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `teamUsers`
--
ALTER TABLE `teamUsers`
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
