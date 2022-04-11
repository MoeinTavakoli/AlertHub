/*
  Warnings:

  - You are about to drop the column `sendBy` on the `alertLogs` table. All the data in the column will be lost.
  - You are about to drop the column `target_name` on the `targetContacts` table. All the data in the column will be lost.
  - The primary key for the `targets` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `IP` on the `targets` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `targets` table. All the data in the column will be lost.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `name` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[address]` on the table `targets` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `targetAddress` to the `targetContacts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `targets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "targetContacts" DROP CONSTRAINT "targetContacts_target_name_fkey";

-- AlterTable
ALTER TABLE "alertLogs" DROP COLUMN "sendBy";

-- AlterTable
ALTER TABLE "targetContacts" DROP COLUMN "target_name",
ADD COLUMN     "targetAddress" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "targets" DROP CONSTRAINT "targets_pkey",
DROP COLUMN "IP",
DROP COLUMN "name",
ADD COLUMN     "address" TEXT NOT NULL,
ADD CONSTRAINT "targets_pkey" PRIMARY KEY ("address");

-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
DROP COLUMN "name",
ADD COLUMN     "phoneNumber" VARCHAR(12) NOT NULL,
ADD COLUMN     "username" VARCHAR(50) NOT NULL,
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("username");

-- DropEnum
DROP TYPE "enum_sendBy";

-- CreateIndex
CREATE UNIQUE INDEX "targets_address_key" ON "targets"("address");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- AddForeignKey
ALTER TABLE "targetContacts" ADD CONSTRAINT "targetContacts_targetAddress_fkey" FOREIGN KEY ("targetAddress") REFERENCES "targets"("address") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "targetContacts" ADD CONSTRAINT "targetContacts_username_fkey" FOREIGN KEY ("username") REFERENCES "users"("username") ON DELETE RESTRICT ON UPDATE CASCADE;
