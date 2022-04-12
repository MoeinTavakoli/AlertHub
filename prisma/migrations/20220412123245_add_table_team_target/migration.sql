/*
  Warnings:

  - The primary key for the `targetContacts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `targetContacts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "targetContacts" DROP CONSTRAINT "targetContacts_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "targetContacts_pkey" PRIMARY KEY ("username", "targetAddress");

-- CreateTable
CREATE TABLE "teams" (
    "teamName" VARCHAR(50) NOT NULL,

    CONSTRAINT "teams_pkey" PRIMARY KEY ("teamName")
);

-- CreateTable
CREATE TABLE "teamUsers" (
    "teamName" VARCHAR(20) NOT NULL,
    "username" VARCHAR(50) NOT NULL,

    CONSTRAINT "teamUsers_pkey" PRIMARY KEY ("username","teamName")
);

-- CreateTable
CREATE TABLE "teamTarget" (
    "teamName" VARCHAR(20) NOT NULL,
    "targetAddress" VARCHAR(50) NOT NULL,

    CONSTRAINT "teamTarget_pkey" PRIMARY KEY ("teamName","targetAddress")
);

-- AddForeignKey
ALTER TABLE "teamUsers" ADD CONSTRAINT "teamUsers_username_fkey" FOREIGN KEY ("username") REFERENCES "users"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teamUsers" ADD CONSTRAINT "teamUsers_teamName_fkey" FOREIGN KEY ("teamName") REFERENCES "teams"("teamName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teamTarget" ADD CONSTRAINT "teamTarget_targetAddress_fkey" FOREIGN KEY ("targetAddress") REFERENCES "targets"("address") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teamTarget" ADD CONSTRAINT "teamTarget_teamName_fkey" FOREIGN KEY ("teamName") REFERENCES "teams"("teamName") ON DELETE RESTRICT ON UPDATE CASCADE;
