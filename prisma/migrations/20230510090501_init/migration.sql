/*
  Warnings:

  - You are about to drop the column `productId` on the `articles` table. All the data in the column will be lost.
  - You are about to drop the `product` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `singleproduct` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `category` to the `Articles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `coverPicture` to the `Articles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Articles` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `articles` DROP FOREIGN KEY `Articles_productId_fkey`;

-- DropForeignKey
ALTER TABLE `singleproduct` DROP FOREIGN KEY `SingleProduct_productId_fkey`;

-- AlterTable
ALTER TABLE `articles` DROP COLUMN `productId`,
    ADD COLUMN `category` VARCHAR(191) NOT NULL,
    ADD COLUMN `coverPicture` VARCHAR(191) NOT NULL,
    ADD COLUMN `createdAt` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    ADD COLUMN `description` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6);

-- DropTable
DROP TABLE `product`;

-- DropTable
DROP TABLE `singleproduct`;
