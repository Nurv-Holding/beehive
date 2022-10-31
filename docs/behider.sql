-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 31-Out-2022 às 14:01
-- Versão do servidor: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `behider`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `companies`
--

CREATE TABLE IF NOT EXISTS `companies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `cnpj` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=3 ;

--
-- Extraindo dados da tabela `companies`
--

INSERT INTO `companies` (`id`, `name`, `createdAt`, `updatedAt`, `cnpj`) VALUES
(1, 'nurv', '2022-10-27 19:46:58.958', '2022-10-27 20:29:09.426', '1234567');

-- --------------------------------------------------------

--
-- Estrutura da tabela `goals`
--

CREATE TABLE IF NOT EXISTS `goals` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idCompany` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descriptions` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `initialDate` datetime(3) NOT NULL,
  `finalDate` datetime(3) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `done` tinyint(1) NOT NULL DEFAULT '0',
  `idTeam` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `goals_idCompany_fkey` (`idCompany`),
  KEY `goals_idTeam_fkey` (`idTeam`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=2 ;

--
-- Extraindo dados da tabela `goals`
--

INSERT INTO `goals` (`id`, `idCompany`, `name`, `descriptions`, `initialDate`, `finalDate`, `createdAt`, `updatedAt`, `done`, `idTeam`) VALUES
(1, 1, 'entrega - layout', 'frtghyuj', '2022-12-09 03:00:00.000', '2022-12-10 03:00:00.000', '2022-10-28 12:39:10.579', '2022-10-28 13:40:06.862', 0, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `processgoalstask`
--

CREATE TABLE IF NOT EXISTS `processgoalstask` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idCompany` int(11) NOT NULL,
  `idTask` int(11) NOT NULL,
  `idGoal` int(11) NOT NULL,
  `done` tinyint(1) NOT NULL DEFAULT '0',
  `initialDate` datetime(3) NOT NULL,
  `finalDate` datetime(3) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `idTeam` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `processGoalsTask_idTask_fkey` (`idTask`),
  KEY `processGoalsTask_idCompany_fkey` (`idCompany`),
  KEY `processGoalsTask_idGoal_fkey` (`idGoal`),
  KEY `processGoalsTask_userId_fkey` (`userId`),
  KEY `processGoalsTask_idTeam_fkey` (`idTeam`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=2 ;

--
-- Extraindo dados da tabela `processgoalstask`
--

INSERT INTO `processgoalstask` (`id`, `idCompany`, `idTask`, `idGoal`, `done`, `initialDate`, `finalDate`, `createdAt`, `updatedAt`, `userId`, `idTeam`) VALUES
(1, 1, 2, 1, 0, '2022-12-10 03:00:00.000', '2022-12-10 03:00:00.000', '2022-10-28 13:54:04.218', '2022-10-28 13:54:04.218', NULL, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `processtaskusers`
--

CREATE TABLE IF NOT EXISTS `processtaskusers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idTask` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `idProcessGoalsTask` int(11) NOT NULL,
  `descriptions` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `done` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `idTeam` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ProcessTaskUsers_idTask_fkey` (`idTask`),
  KEY `ProcessTaskUsers_idUser_fkey` (`idUser`),
  KEY `ProcessTaskUsers_idProcessGoalsTask_fkey` (`idProcessGoalsTask`),
  KEY `ProcessTaskUsers_idTeam_fkey` (`idTeam`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=2 ;

--
-- Extraindo dados da tabela `processtaskusers`
--

INSERT INTO `processtaskusers` (`id`, `idTask`, `idUser`, `idProcessGoalsTask`, `descriptions`, `done`, `createdAt`, `updatedAt`, `idTeam`) VALUES
(1, 2, 3, 1, 'gggggggggg', 0, '2022-10-28 14:17:19.468', '2022-10-28 14:17:19.468', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `subtasks`
--

CREATE TABLE IF NOT EXISTS `subtasks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idTask` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descriptions` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `done` tinyint(1) NOT NULL DEFAULT '0',
  `initialDate` datetime(3) NOT NULL,
  `finalDate` datetime(3) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `subtasks_idTask_fkey` (`idTask`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=3 ;

--
-- Extraindo dados da tabela `subtasks`
--

INSERT INTO `subtasks` (`id`, `idTask`, `name`, `descriptions`, `done`, `initialDate`, `finalDate`, `createdAt`, `updatedAt`) VALUES
(1, 2, 'definir campos', 'blabla', 1, '2022-12-10 03:00:00.000', '2022-12-10 03:00:00.000', '2022-10-28 13:14:38.062', '2022-10-31 12:27:47.539'),
(2, 2, 'definir formulário', 'blabla', 0, '2022-12-10 03:00:00.000', '2022-12-10 03:00:00.000', '2022-10-28 13:15:10.128', '2022-10-28 13:15:10.128');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tasks`
--

CREATE TABLE IF NOT EXISTS `tasks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idCompany` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descriptions` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `initialDate` datetime(3) NOT NULL,
  `finalDate` datetime(3) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `done` tinyint(1) NOT NULL DEFAULT '0',
  `idGoal` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `tasks_idUser_fkey` (`idUser`),
  KEY `tasks_idCompany_fkey` (`idCompany`),
  KEY `tasks_idGoal_fkey` (`idGoal`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=6 ;

--
-- Extraindo dados da tabela `tasks`
--

INSERT INTO `tasks` (`id`, `idCompany`, `idUser`, `name`, `descriptions`, `initialDate`, `finalDate`, `createdAt`, `updatedAt`, `done`, `idGoal`) VALUES
(2, 1, 3, 'tela de login', 'blabla', '2022-10-31 00:00:00.000', '2022-10-10 00:00:00.000', '2022-10-28 12:39:34.087', '2022-10-31 12:21:05.645', 1, 1),
(3, 1, 3, 'tela de cadastro', 'blabla', '2022-12-10 03:00:00.000', '2022-12-10 03:00:00.000', '2022-10-28 12:42:00.154', '2022-10-28 12:42:00.154', 0, 1),
(4, 1, 3, 'tela de listagem', 'blabla', '2022-12-10 03:00:00.000', '2022-12-10 03:00:00.000', '2022-10-28 13:00:20.056', '2022-10-28 13:00:20.056', 0, 1),
(5, 1, 4, 'tela de progresso', 'blabla', '2022-12-10 03:00:00.000', '2022-12-10 03:00:00.000', '2022-10-29 03:06:40.310', '2022-10-29 03:06:40.310', 0, 1);

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
(1, 1, 'squad behive', 'frgtyhnjum', '2022-10-28 01:27:59.649', '2022-10-28 01:27:59.649');

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=3 ;

--
-- Extraindo dados da tabela `teamusers`
--

INSERT INTO `teamusers` (`id`, `idCompany`, `idUser`, `idTeam`, `createdAt`, `updatedAt`) VALUES
(1, 1, 3, 1, '2022-10-28 01:49:34.769', '2022-10-28 01:49:34.769'),
(2, 1, 4, 1, '2022-10-28 01:52:12.285', '2022-10-28 01:52:12.285');

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idCompany` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `occupation` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `roles` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `photo` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_key` (`email`),
  KEY `users_idCompany_fkey` (`idCompany`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=8 ;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`id`, `idCompany`, `name`, `email`, `occupation`, `createdAt`, `updatedAt`, `roles`, `photo`) VALUES
(3, 1, 'João', 'João@gmail.com', 'Desenvolvedor', '2022-10-28 01:41:20.315', '2022-10-28 01:41:20.315', NULL, NULL),
(4, 1, 'Douglas', 'douglas@gmail.com', 'Desenvolvedor', '2022-10-28 01:51:54.523', '2022-10-28 01:51:54.523', NULL, NULL),
(7, 1, 'João', 'joão2@gmail.com', 'Desenvolvedor', '2022-10-29 02:20:09.172', '2022-10-29 02:20:09.172', NULL, NULL);

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
('0f6a9fa0-fbd0-4ced-9e99-4fb3240d6cd4', '0fc39bd058602f6c00074efb3a8d8aa0dcfd4ecb16074e87c672d152a3ba6a00', '2022-10-27 19:43:40.218', '20221027194340_new_model', NULL, NULL, '2022-10-27 19:43:40.151', 1),
('0fccff95-5e46-41a9-a1e5-17b2d30301cd', 'a1b02afaba9b4795cd8350ce3fcc9ecdef78c28b1c2bbb5fd5139f0ac049b2e9', '2022-10-28 01:48:38.869', '20221028014838_new_model', NULL, NULL, '2022-10-28 01:48:38.797', 1),
('4ec13d82-5ea1-4953-a49c-aaf02a8eecf9', '2eaf4c429b16435bf6f19f76b269a871df586e9906bc04c97e4d4fc59c2c402e', '2022-10-28 13:53:34.759', '20221028135334_new_model', NULL, NULL, '2022-10-28 13:53:34.687', 1),
('610046c9-2afe-4f29-acbc-35717c2c8465', '404f6c347dd5b3c83453d300c0d664f78396801f9eca43e68e5ad6f38bd3ed2a', '2022-10-28 00:03:44.307', '20221028000343_new_model', NULL, NULL, '2022-10-28 00:03:43.847', 1),
('7bf11784-3911-49f5-9b52-1ae3d0522b7e', '1216488161c0dbaa36ba931956aebec3cb26937880e3ec5e3df46cd4179019dc', '2022-10-27 19:15:51.442', '20221027191551_new_model', NULL, NULL, '2022-10-27 19:15:51.317', 1),
('81e6b742-9608-4dc6-84ed-d7228c24f935', '9912514a89da5817630a8543e71cf35b439197d861f6bbed05618790ed0b8c37', '2022-10-28 13:41:25.089', '20221028134124_new_model', NULL, NULL, '2022-10-28 13:41:24.938', 1),
('96f16ea6-7c92-4a21-a063-2c48d6e29752', 'fd7d1e00e83aafe8e9ccfc4ed9e92ba5b32b6a3029f53f41e4cf8c9e446e31d2', '2022-10-27 02:52:33.985', '20221027025138_new_model', NULL, NULL, '2022-10-27 02:52:33.029', 1),
('ab70c83a-291f-4be3-a5da-e1a71c355cde', '5edf5389cde2f7b7a9c8a2afa3fcdacf1e9ea82879d16938596cdc5894029bc9', '2022-10-28 01:19:42.288', '20221028011940_new_model', NULL, NULL, '2022-10-28 01:19:40.184', 1),
('ae3077ac-8a43-4873-a4b4-3684366ad450', '733280a8a741d54c9d3539d954588f907cdbad9c3e3b6670546a4dcd9fd3ae37', '2022-10-28 13:37:54.082', '20221028133753_new_model', NULL, NULL, '2022-10-28 13:37:53.628', 1),
('af36c92f-4d82-4695-b99b-f1a5c42b09fd', '1420f7a2d1a8b3b985f0092b9fe2e3ded3a8e0aaf7b2f1a89ee09657ef606ab8', '2022-10-27 19:56:59.273', '20221027195659_new_model', NULL, NULL, '2022-10-27 19:56:59.209', 1),
('ba271169-81b7-4736-886c-119a7e058d14', 'b20b5c2bd4d061e7d9dbbbab8ef690663fe082db09d66c43ee72501fb0f81552', '2022-10-29 16:39:46.994', '20221029163946_new_model', NULL, NULL, '2022-10-29 16:39:46.878', 1),
('daeeef56-9166-4563-977c-be0ccb9c9202', '5cff7183537d2af8443b84f6cd9b6ecc47c965d834c70792c3be699d5fc18ef5', '2022-10-28 01:27:26.598', '20221028012726_new_model', NULL, NULL, '2022-10-28 01:27:26.541', 1),
('dbe4e5d7-463d-4af8-9164-b97764144baa', '8ee4bfa4119433a862a5fec880868a136a8bd2e3f98a40c47a319a172cdf89cc', '2022-10-28 00:13:49.422', '20221028001349_new_model', NULL, NULL, '2022-10-28 00:13:49.218', 1),
('f368e0d7-36b1-49a7-83f8-489b726d7955', '70196ba9dff35f647465eeef6f0cd0d3bf72946f673a3a3d41bc3e8e850183bc', '2022-10-28 13:09:05.479', '20221028130905_new_model', NULL, NULL, '2022-10-28 13:09:05.366', 1),
('fdcd165d-5356-4e8b-b446-d04188cb2cb2', '2d90294ef5a167aeeb781dc8e0820ca09b1fba80fec15117d0e0f466cfadc92e', '2022-10-27 19:40:34.551', '20221027194034_new_model', NULL, NULL, '2022-10-27 19:40:34.489', 1);

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `goals`
--
ALTER TABLE `goals`
  ADD CONSTRAINT `goals_idTeam_fkey` FOREIGN KEY (`idTeam`) REFERENCES `teams` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `goals_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies` (`id`) ON UPDATE CASCADE;

--
-- Limitadores para a tabela `processgoalstask`
--
ALTER TABLE `processgoalstask`
  ADD CONSTRAINT `processGoalsTask_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `processGoalsTask_idGoal_fkey` FOREIGN KEY (`idGoal`) REFERENCES `goals` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `processGoalsTask_idTask_fkey` FOREIGN KEY (`idTask`) REFERENCES `tasks` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `processGoalsTask_idTeam_fkey` FOREIGN KEY (`idTeam`) REFERENCES `teams` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `processGoalsTask_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Limitadores para a tabela `processtaskusers`
--
ALTER TABLE `processtaskusers`
  ADD CONSTRAINT `ProcessTaskUsers_idTeam_fkey` FOREIGN KEY (`idTeam`) REFERENCES `teams` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `ProcessTaskUsers_idProcessGoalsTask_fkey` FOREIGN KEY (`idProcessGoalsTask`) REFERENCES `processgoalstask` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `ProcessTaskUsers_idTask_fkey` FOREIGN KEY (`idTask`) REFERENCES `tasks` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `ProcessTaskUsers_idUser_fkey` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`) ON UPDATE CASCADE;

--
-- Limitadores para a tabela `subtasks`
--
ALTER TABLE `subtasks`
  ADD CONSTRAINT `subtasks_idTask_fkey` FOREIGN KEY (`idTask`) REFERENCES `tasks` (`id`) ON UPDATE CASCADE;

--
-- Limitadores para a tabela `tasks`
--
ALTER TABLE `tasks`
  ADD CONSTRAINT `tasks_idGoal_fkey` FOREIGN KEY (`idGoal`) REFERENCES `goals` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `tasks_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `tasks_idUser_fkey` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`) ON UPDATE CASCADE;

--
-- Limitadores para a tabela `teams`
--
ALTER TABLE `teams`
  ADD CONSTRAINT `teams_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies` (`id`) ON UPDATE CASCADE;

--
-- Limitadores para a tabela `teamusers`
--
ALTER TABLE `teamusers`
  ADD CONSTRAINT `teamUsers_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `teamUsers_idTeam_fkey` FOREIGN KEY (`idTeam`) REFERENCES `teams` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `teamUsers_idUser_fkey` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`) ON UPDATE CASCADE;

--
-- Limitadores para a tabela `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_idCompany_fkey` FOREIGN KEY (`idCompany`) REFERENCES `companies` (`id`) ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
