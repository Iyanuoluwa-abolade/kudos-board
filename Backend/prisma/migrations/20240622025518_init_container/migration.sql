/*
  Warnings:

  - You are about to drop the column `author` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `image_url` on the `Card` table. All the data in the column will be lost.
  - Added the required column `img_url` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Board" ADD COLUMN     "authorId" INTEGER,
ALTER COLUMN "image_url" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Card" DROP COLUMN "author",
DROP COLUMN "image_url",
ADD COLUMN     "img_url" TEXT NOT NULL,
ADD COLUMN     "upVote" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "authorId" INTEGER,
    "cardId" INTEGER NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
