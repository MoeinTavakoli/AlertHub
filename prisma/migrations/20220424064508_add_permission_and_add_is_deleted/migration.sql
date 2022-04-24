/*
  Warnings:

  - The values [ADMIN,REPORTER] on the enum `enum_Users_role` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `nodeName` on the `alertLogs` table. All the data in the column will be lost.
  - You are about to drop the column `targetName` on the `alertLogs` table. All the data in the column will be lost.
  - Added the required column `instance` to the `alertLogs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `job` to the `alertLogs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "enum_Users_role_new" AS ENUM ('ROOT', 'MONIA_ADMIN', 'MONITORING_ADMIN', 'CONTACT');
ALTER TABLE "users" ALTER COLUMN "role" TYPE "enum_Users_role_new" USING ("role"::text::"enum_Users_role_new");
ALTER TYPE "enum_Users_role" RENAME TO "enum_Users_role_old";
ALTER TYPE "enum_Users_role_new" RENAME TO "enum_Users_role";
DROP TYPE "enum_Users_role_old";
COMMIT;

-- AlterTable
ALTER TABLE "alertLogs" DROP COLUMN "nodeName",
DROP COLUMN "targetName",
ADD COLUMN     "instance" VARCHAR(50) NOT NULL,
ADD COLUMN     "job" VARCHAR(50) NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false;
