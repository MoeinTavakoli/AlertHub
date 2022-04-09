-- CreateEnum
CREATE TYPE "enum_method" AS ENUM ('ping', 'http_request');

-- CreateEnum
CREATE TYPE "enum_sendBy" AS ENUM ('rocketChat', 'sms', 'notYetSend');

-- CreateEnum
CREATE TYPE "enum_Users_role" AS ENUM ('ADMIN', 'REPORTER');

-- CreateTable
CREATE TABLE "users" (
    "name" VARCHAR(50) NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "role" "enum_Users_role",
    "createdAt" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6),

    CONSTRAINT "users_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "targets" (
    "name" VARCHAR(50) NOT NULL,
    "IP" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6),

    CONSTRAINT "targets_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "targetContacts" (
    "id" SERIAL NOT NULL,
    "target_name" VARCHAR(50) NOT NULL,
    "username" VARCHAR(50) NOT NULL,

    CONSTRAINT "targetContacts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "alertLogs" (
    "id" SERIAL NOT NULL,
    "nodeName" VARCHAR(50) NOT NULL,
    "targetName" VARCHAR(50) NOT NULL,
    "method" "enum_method",
    "value" INTEGER NOT NULL,
    "sendBy" "enum_sendBy" NOT NULL,
    "activeAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6),

    CONSTRAINT "alertLogs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "targetContacts" ADD CONSTRAINT "targetContacts_target_name_fkey" FOREIGN KEY ("target_name") REFERENCES "targets"("name") ON DELETE NO ACTION ON UPDATE NO ACTION;
