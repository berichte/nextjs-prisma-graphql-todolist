import { objectType, list } from "nexus";
import { booleanArg, extendType, nonNull, stringArg } from "nexus/dist/core";
import { hasSession } from "./auth";

export const ToDo = objectType({
  name: "ToDo",
  definition(t) {
    t.model.id();
    t.model.done();
    t.model.title();
    t.model.toDoListId();
    t.model.rank();
  },
});

export const Query = extendType({
  type: "Query",
  definition: (t) => {
    /**
     * Query for a single ToDo by id
     */
    t.field("toDo", {
      type: ToDo,
      args: { id: nonNull(stringArg()) },
      authorize: hasSession,
      resolve: (_root, { id }, { prisma }) =>
        prisma.toDo.findFirst({ where: { id } }),
    });

    /**
     * Query for all ToDos of a ToDoList
     */
    t.field("toDos", {
      type: list("ToDo"),
      args: { toDoListId: nonNull(stringArg()) },
      authorize: hasSession,
      resolve: (_root, { toDoListId }, { prisma }) =>
        prisma.toDo.findMany({
          where: { toDoListId },
        }),
    });
  },
});

export const Mutation = extendType({
  type: "Mutation",
  definition: (t) => {
    /**
     * Create a ToDo item
     */
    t.field("createToDo", {
      type: ToDo,
      authorize: hasSession,
      args: {
        title: nonNull(stringArg()),
        toDoListId: nonNull(stringArg()),
      },
      resolve: (_root, { title, toDoListId }, { prisma }) =>
        prisma.toDo.create({
          data: {
            title,
            done: false,
            ToDoList: { connect: { id: toDoListId } },
          },
        }),
    });

    /**
     * Toggle a ToDo from undone to done or vis versa.
     */
    t.field("toggleToDo", {
      type: ToDo,
      authorize: hasSession,
      args: {
        id: nonNull(stringArg()),
        done: nonNull(booleanArg()),
      },
      resolve: (_root, { id, done }, { prisma }) =>
        prisma.toDo.update({
          where: { id },
          data: {
            done,
          },
        }),
    });

    /**
     * Delete a ToDo item
     */
    t.field("deleteToDo", {
      type: ToDo,
      authorize: hasSession,
      args: {
        id: nonNull(stringArg()),
      },
      resolve: (_root, { id }, { prisma }) =>
        prisma.toDo.delete({ where: { id } }),
    });
  },
});
