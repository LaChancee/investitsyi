/*
  Warnings:

  - Made the column `subtype` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `subtype` BOOLEAN NOT NULL;
