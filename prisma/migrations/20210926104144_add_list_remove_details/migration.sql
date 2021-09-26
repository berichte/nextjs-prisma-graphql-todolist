/*
  Warnings:

  - You are about to drop the column `authorId` on the `ToDo` table. All the data in the column will be lost.
  - You are about to drop the column `details` on the `ToDo` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ToDo" DROP CONSTRAINT "ToDo_authorId_fkey";

-- AlterTable
ALTER TABLE "ToDo" DROP COLUMN "authorId",
DROP COLUMN "details",
ADD COLUMN     "toDoListId" TEXT;

-- CreateTable
CREATE TABLE "ToDoList" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "userId" TEXT,

    CONSTRAINT "ToDoList_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ToDoList" ADD CONSTRAINT "ToDoList_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ToDo" ADD CONSTRAINT "ToDo_toDoListId_fkey" FOREIGN KEY ("toDoListId") REFERENCES "ToDoList"("id") ON DELETE SET NULL ON UPDATE CASCADE;
