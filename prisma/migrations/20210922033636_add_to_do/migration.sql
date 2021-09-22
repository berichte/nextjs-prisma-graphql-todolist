-- CreateTable
CREATE TABLE "ToDo" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL,
    "authorId" TEXT NOT NULL,

    CONSTRAINT "ToDo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ToDo" ADD CONSTRAINT "ToDo_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
