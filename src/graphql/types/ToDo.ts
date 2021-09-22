import { objectType, extendType, list } from "nexus";

export const ToDo = objectType({
  name: "ToDo",
  definition(t) {
    t.model.id();
    t.model.author();
    t.model.details();
    t.model.done();
    t.model.title();
  },
});

export const Query = extendType({
  type: "Query",
  definition(t) {
    t.field("todo", {
      type: ToDo,
      resolve(root, args, context) {
        if (!context.session?.user.id) {
          return null;
        }
        return context.prisma.toDo.findFirst({
          where: { authorId: context.session?.user.id },
        });
      },
    });
    t.field("todoList", {
      type: list("ToDo"),
      resolve(root, args, context) {
        if (!context.session?.user.id) {
          return null;
        }
        return context.prisma.toDo.findMany({
          where: { authorId: context.session?.user.id },
        });
      },
    });
  },
});
