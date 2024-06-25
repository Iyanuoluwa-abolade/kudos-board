/*
  Warnings:

  - You are about to drop the column `img_url` on the `Card` table. All the data in the column will be lost.
  - Added the required column `image_url` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Card" DROP COLUMN "img_url",
ADD COLUMN     "image_url" TEXT NOT NULL;
