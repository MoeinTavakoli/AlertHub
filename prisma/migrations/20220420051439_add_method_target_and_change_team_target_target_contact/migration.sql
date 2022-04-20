/*
  Warnings:

  - The primary key for the `targetContacts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `targets` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `teamTarget` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[address,method]` on the table `targets` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `method` to the `targetContacts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `method` to the `targets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `method` to the `teamTarget` table without a default value. This is not possible if the table is not empty.
  - Made the column `role` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "targetContacts" DROP CONSTRAINT "targetContacts_targetAddress_fkey";

-- DropForeignKey
ALTER TABLE "teamTarget" DROP CONSTRAINT "teamTarget_targetAddress_fkey";

-- DropIndex
DROP INDEX "targets_address_key";

-- AlterTable
ALTER TABLE "targetContacts" DROP CONSTRAINT "targetContacts_pkey",
ADD COLUMN     "method" "enum_method" NOT NULL,
ADD CONSTRAINT "targetContacts_pkey" PRIMARY KEY ("username", "targetAddress", "method");

-- AlterTable
ALTER TABLE "targets" DROP CONSTRAINT "targets_pkey",
ADD COLUMN     "method" "enum_method" NOT NULL,
ADD CONSTRAINT "targets_pkey" PRIMARY KEY ("address", "method");

-- AlterTable
ALTER TABLE "teamTarget" DROP CONSTRAINT "teamTarget_pkey",
ADD COLUMN     "method" "enum_method" NOT NULL,
ADD CONSTRAINT "teamTarget_pkey" PRIMARY KEY ("teamName", "targetAddress", "method");

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "role" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "targets_address_method_key" ON "targets"("address", "method");

-- AddForeignKey
ALTER TABLE "targetContacts" ADD CONSTRAINT "targetContacts_targetAddress_method_fkey" FOREIGN KEY ("targetAddress", "method") REFERENCES "targets"("address", "method") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teamTarget" ADD CONSTRAINT "teamTarget_targetAddress_method_fkey" FOREIGN KEY ("targetAddress", "method") REFERENCES "targets"("address", "method") ON DELETE RESTRICT ON UPDATE CASCADE;
