/*
  Warnings:

  - You are about to drop the column `mediaUrl` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the `ScheduledPost` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ScheduledPostToTag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ScheduledPostToTag" DROP CONSTRAINT "_ScheduledPostToTag_A_fkey";

-- DropForeignKey
ALTER TABLE "_ScheduledPostToTag" DROP CONSTRAINT "_ScheduledPostToTag_B_fkey";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "mediaUrl",
ADD COLUMN     "photoUrls" TEXT[],
ADD COLUMN     "published" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "scheduledAt" TIMESTAMP(3),
ADD COLUMN     "videoUrls" TEXT[];

-- DropTable
DROP TABLE "ScheduledPost";

-- DropTable
DROP TABLE "_ScheduledPostToTag";

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CategoryToPost" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToPost_AB_unique" ON "_CategoryToPost"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToPost_B_index" ON "_CategoryToPost"("B");

-- AddForeignKey
ALTER TABLE "_CategoryToPost" ADD CONSTRAINT "_CategoryToPost_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToPost" ADD CONSTRAINT "_CategoryToPost_B_fkey" FOREIGN KEY ("B") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;
