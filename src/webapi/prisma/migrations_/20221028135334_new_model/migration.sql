/*
  Warnings:

  - You are about to alter the column `done` on the `processgoalstask` table. The data in that column could be lost. The data in that column will be cast from `Int` to `TinyInt`.

*/
-- AlterTable
ALTER TABLE `processgoalstask` MODIFY `done` BOOLEAN NOT NULL DEFAULT false;
