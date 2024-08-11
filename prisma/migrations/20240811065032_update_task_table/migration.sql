/*
  Warnings:

  - Added the required column `deadline` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priorityLevel` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `Task` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "deadline" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "priorityLevel" TEXT NOT NULL,
ALTER COLUMN "description" SET NOT NULL;
