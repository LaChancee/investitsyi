-- AlterTable
ALTER TABLE `user` MODIFY `pseudo_name` VARCHAR(50) NULL,
    MODIFY `address` VARCHAR(191) NULL,
    MODIFY `zipcode` VARCHAR(191) NULL,
    MODIFY `town` VARCHAR(191) NULL,
    MODIFY `subtype` BOOLEAN NULL,
    MODIFY `usertype` VARCHAR(191) NULL;
