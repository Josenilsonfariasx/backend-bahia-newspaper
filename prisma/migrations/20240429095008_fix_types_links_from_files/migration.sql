/*
  Warnings:

  - The `imageUrl` column on the `Ad` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `videoUrl` column on the `Ad` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Ad" DROP COLUMN "imageUrl",
ADD COLUMN     "imageUrl" TEXT[],
DROP COLUMN "videoUrl",
ADD COLUMN     "videoUrl" TEXT[];
