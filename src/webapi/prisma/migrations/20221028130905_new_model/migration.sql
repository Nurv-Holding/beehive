-- DropForeignKey
ALTER TABLE `subtasks` DROP FOREIGN KEY `subTasks_idTask_fkey`;

-- AddForeignKey
ALTER TABLE `subtasks` ADD CONSTRAINT `subtasks_idTask_fkey` FOREIGN KEY (`idTask`) REFERENCES `tasks`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
