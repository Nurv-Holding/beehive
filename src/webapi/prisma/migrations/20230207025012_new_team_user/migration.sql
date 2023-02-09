-- DropForeignKey
ALTER TABLE `teamusers` DROP FOREIGN KEY `teamUsers_idUser_fkey`;

-- AddForeignKey
ALTER TABLE `teamUsers` ADD CONSTRAINT `teamUsers_idUser_fkey` FOREIGN KEY (`idUser`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
