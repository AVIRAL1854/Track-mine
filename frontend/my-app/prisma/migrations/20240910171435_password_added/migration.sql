/*
  Warnings:

  - Added the required column `password` to the `LoginSystem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "LoginSystem" ADD COLUMN     "password" TEXT NOT NULL;
