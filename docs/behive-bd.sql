-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 04-Nov-2022 às 14:31
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
(1, 'nurv', '1234567dd', '2022-11-04 02:30:46.698', '2022-11-04 02:30:46.698');

-- --------------------------------------------------------

--
-- Estrutura da tabela `goalkrs`
--

CREATE TABLE IF NOT EXISTS `goalkrs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idCompany` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descriptions` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `from` int(11) NOT NULL,
  `to` int(11) NOT NULL,
  `done` int(11) NOT NULL DEFAULT '0',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `idGoal` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `goalKrs_idCompany_fkey` (`idCompany`),
  KEY `goalKrs_idGoal_fkey` (`idGoal`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=2 ;

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

-- --------------------------------------------------------

--
-- Estrutura da tabela `goalteamkrs`
--

CREATE TABLE IF NOT EXISTS `goalteamkrs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idCompany` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descriptions` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `from` int(11) NOT NULL,
  `to` int(11) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `done` int(11) NOT NULL DEFAULT '0',
  `idGoalsTeam` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `goalTeamKrs_idCompany_fkey` (`idCompany`),
  KEY `goalTeamKrs_idGoalsTeam_fkey` (`idGoalsTeam`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=2 ;

-- --------------------------------------------------------

--
-- Estrutura da tabela `processGoalsTeams`
--

CREATE TABLE IF NOT EXISTS `processGoalsTeams` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idGoalsTeam` int(11) DEFAULT NULL,
  `idTeam` int(11) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `processGoalsTeams_idGoalsTeam_fkey` (`idGoalsTeam`),
  KEY `processGoalsTeams_idTeam_fkey` (`idTeam`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=1 ;

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
(1, 'admin-master', '2022-11-04 03:16:56.126', '2022-11-04 03:16:56.126'),
(2, 'admin-corporate', '2022-11-04 03:17:19.812', '2022-11-04 03:17:19.812'),
(3, 'user-corporate', '2022-11-04 03:17:28.175', '2022-11-04 03:17:28.175');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=1 ;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idCompany` int(11) NOT NULL,
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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=2 ;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`id`, `idCompany`, `idProfile`, `name`, `photo`, `email`, `occupation`, `password`, `roles`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, 'joao', NULL, 'joao@gmail.com', 'Desenvolvedor', '12344321', NULL, '2022-11-04 03:18:19.768', '2022-11-04 03:18:19.768');

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
('307da1b9-d019-4f0d-84bd-65c3d94d4d53', '4792d5b7ed5c369c7a9df7492aaeac02013f0720a238737b8a9b76d25ea376cc', '2022-11-04 03:35:26.811', '20221104033526_new_model', NULL, NULL, '2022-11-04 03:35:26.631', 1),
('674eade1-e781-4697-afa5-91771f3d83bd', '8dc8009b4065f1fa0bd303f60a5dddd835748a8c9a227ad740fb03a732cf231b', '2022-11-04 13:16:25.039', '20221104131624_new_model', NULL, NULL, '2022-11-04 13:16:24.529', 1),
('8d663fde-0f03-4ade-8bd5-7f5d44bd1f6a', 'a5ecb7f134d013fc3d388e8c29ad8aa7ae1a5444b7f8c82c25634f4642edde4b', '2022-11-04 03:22:16.315', '20221104032215_new_model', NULL, NULL, '2022-11-04 03:22:15.864', 1),
('f3de76fb-98d8-4530-abb7-0accf2166791', '40b8841b624a69ee8b2a1f1d532595c32ffe7c6ed82893b572c0afa7d35172f3', '2022-11-04 02:19:36.826', '20221104021935_new_model', NULL, NULL, '2022-11-04 02:19:35.514', 1);

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `goalkrs`
--
ALTER TABLE `goalkrs`
  ADD CONSTRAINT `goalKrs_idGoal_fkey` FOREIGN KEY (`idGoal`) REFERENCES `goals` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `goalKrs_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

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
  ADD CONSTRAINT `goalTeamKrs_idGoalsTeam_fkey` FOREIGN KEY (`idGoalsTeam`) REFERENCES `goalsteams` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `goalTeamKrs_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `processGoalsTeams`
--
ALTER TABLE `processGoalsTeams`
  ADD CONSTRAINT `processGoalsTeams_idGoalsTeam_fkey` FOREIGN KEY (`idGoalsTeam`) REFERENCES `goalsteams` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `processGoalsTeams_idTeam_fkey` FOREIGN KEY (`idTeam`) REFERENCES `teams` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `teams`
--
ALTER TABLE `teams`
  ADD CONSTRAINT `teams_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `teamUsers`
--
ALTER TABLE `teamUsers`
  ADD CONSTRAINT `teamUsers_idTeam_fkey` FOREIGN KEY (`idTeam`) REFERENCES `teams` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `teamUsers_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `teamUsers_idUser_fkey` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`) ON UPDATE CASCADE;

--
-- Limitadores para a tabela `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
