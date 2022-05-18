/*
  Warnings:

  - You are about to drop the column `method` on the `alertLogs` table. All the data in the column will be lost.
  - The primary key for the `teamUsers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `username` on the `teamUsers` table. All the data in the column will be lost.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `targetContacts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `targets` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `teamTarget` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userID` to the `teamUsers` table without a default value. This is not possible if the table is not empty.
  - The required column `userID` was added to the `users` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "targetContacts" DROP CONSTRAINT "targetContacts_targetAddress_method_fkey";

-- DropForeignKey
ALTER TABLE "targetContacts" DROP CONSTRAINT "targetContacts_username_fkey";

-- DropForeignKey
ALTER TABLE "teamTarget" DROP CONSTRAINT "teamTarget_targetAddress_method_fkey";

-- DropForeignKey
ALTER TABLE "teamTarget" DROP CONSTRAINT "teamTarget_teamName_fkey";

-- DropForeignKey
ALTER TABLE "teamUsers" DROP CONSTRAINT "teamUsers_username_fkey";

-- DropIndex
DROP INDEX "users_username_key";

-- AlterTable
ALTER TABLE "alertLogs" DROP COLUMN "method";

-- AlterTable
ALTER TABLE "teamUsers" DROP CONSTRAINT "teamUsers_pkey",
DROP COLUMN "username",
ADD COLUMN     "userID" UUID NOT NULL,
ADD CONSTRAINT "teamUsers_pkey" PRIMARY KEY ("userID", "teamName");

-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
ADD COLUMN     "userID" UUID NOT NULL,
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("userID");

-- DropTable
DROP TABLE "targetContacts";

-- DropTable
DROP TABLE "targets";

-- DropTable
DROP TABLE "teamTarget";

-- DropEnum
DROP TYPE "enum_method";

-- CreateTable
CREATE TABLE "jobs" (
    "jobName" VARCHAR(40) NOT NULL,
    "createdAt" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6),

    CONSTRAINT "jobs_pkey" PRIMARY KEY ("jobName")
);

-- CreateTable
CREATE TABLE "userJob" (
    "jobName" VARCHAR(30) NOT NULL,
    "userID" UUID NOT NULL,

    CONSTRAINT "userJob_pkey" PRIMARY KEY ("jobName","userID")
);

-- CreateTable
CREATE TABLE "teamJobs" (
    "teamName" VARCHAR(20) NOT NULL,
    "jobName" VARCHAR(40) NOT NULL,

    CONSTRAINT "teamJobs_pkey" PRIMARY KEY ("teamName","jobName")
);

-- CreateIndex
CREATE UNIQUE INDEX "jobs_jobName_key" ON "jobs"("jobName");

-- AddForeignKey
ALTER TABLE "userJob" ADD CONSTRAINT "userJob_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userJob" ADD CONSTRAINT "userJob_jobName_fkey" FOREIGN KEY ("jobName") REFERENCES "jobs"("jobName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teamUsers" ADD CONSTRAINT "teamUsers_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teamJobs" ADD CONSTRAINT "teamJobs_jobName_fkey" FOREIGN KEY ("jobName") REFERENCES "jobs"("jobName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teamJobs" ADD CONSTRAINT "teamJobs_teamName_fkey" FOREIGN KEY ("teamName") REFERENCES "teams"("teamName") ON DELETE RESTRICT ON UPDATE CASCADE;
