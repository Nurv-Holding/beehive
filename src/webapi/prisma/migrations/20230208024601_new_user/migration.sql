/*
  Warnings:

  - Added the required column `admissionDate` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `admissionDate` DATETIME(3) NOT NULL,
    ADD COLUMN `status` BOOLEAN NOT NULL DEFAULT true;
