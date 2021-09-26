import { extendType, list, nonNull, objectType, stringArg } from "nexus";
import { hasSession } from "./auth";

export const ToDoList = objectType({
  name: "ToDoList",
  definition(t) {
    t.model.id();
    t.model.title();
    t.model.ToDo({
      ordering: { rank: true, done: true },
    });
    t.model.userId();
    t.model.User();
  },
});

export const Query = extendType({
  type: "Query",
  definition(t) {
    /**
     * Query for a single ToDoLit by id.
     */
    t.field("toDoList", {
      type: ToDoList,
      args: { id: nonNull(stringArg()) },
      authorize: hasSession,
      resolve: (_root, { id }, { prisma }) => {
        return prisma.toDoList.findFirst({ where: { id } });
      },
    });

    /**
     * Query for list of ToDoLists
     */
    t.field("toDoLists", {
      type: list(ToDoList),
      authorize: hasSession,
      resolve: (_root, _args, { prisma, session }) => {
        return prisma.toDoList.findMany({
          where: { userId: session?.user.id },
          orderBy: { rank: "asc" },
        });
      },
    });
  },
});

export const Mutation = extendType({
  type: "Mutation",
  definition: (t) => {
    /**
     * Create a new toDoList
     */
    t.field("createToDoList", {
      type: ToDoList,
      authorize: hasSession,
      args: {
        title: nonNull(stringArg()),
      },
      resolve: (_root, { title }, { prisma, session }) => {
        console.log("mutation to create a new toDo list", title);
        return session?.user
          ? prisma.toDoList.create({
              data: {
                title,
                User: { connect: { id: session.user.id } },
              },
            })
          : null;
      },
    });

    /**
     * Change an existing ToDoList by id
     */
    t.field("updateToDoList", {
      type: ToDoList,
      authorize: hasSession,
      args: {
        id: nonNull(stringArg()),
        title: nonNull(stringArg()),
      },
      resolve: (_root, { id, title }, { prisma, session }) =>
        session?.user // won't be undefined (auth) but typing demands it.
          ? prisma.toDoList.update({
              where: { id },
              data: {
                title,
                User: { connect: { id: session.user.id } },
              },
            })
          : null,
    });

    /**
     * Delete an existing ToDoList by id
     */
    t.field("deleteToDoList", {
      type: ToDoList,
      authorize: hasSession,
      args: {
        id: nonNull(stringArg()),
      },
      resolve: (_root, { id }, { prisma }) =>
        prisma.toDoList.delete({
          where: { id },
        }),
    });
  },
});
