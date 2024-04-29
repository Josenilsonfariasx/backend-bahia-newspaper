-- CreateTable
CREATE TABLE "Ad" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "videoUrl" TEXT NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "Ad_pkey" PRIMARY KEY ("id")
);
