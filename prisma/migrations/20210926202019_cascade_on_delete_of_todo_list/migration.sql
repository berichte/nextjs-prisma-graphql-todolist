-- DropForeignKey
ALTER TABLE "ToDo" DROP CONSTRAINT "ToDo_toDoListId_fkey";

-- AddForeignKey
ALTER TABLE "ToDo" ADD CONSTRAINT "ToDo_toDoListId_fkey" FOREIGN KEY ("toDoListId") REFERENCES "ToDoList"("id") ON DELETE CASCADE ON UPDATE CASCADE;