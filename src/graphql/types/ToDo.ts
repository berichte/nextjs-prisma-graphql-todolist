import { objectType, mutationType, list } from "nexus";
import {
  booleanArg,
  extendType,
  nonNull,
  OutputScalarConfig,
  stringArg,
} from "nexus/dist/core";
import { Context } from "../context";

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

const hasSession = (_root: unknown, _args: unknown, ctx: Context) =>
  !!ctx.session?.user.id;

export const Query = extendType({
  type: "Query",
  definition(t) {
    t.field("toDo", {
      type: ToDo,
      args: { id: stringArg() },
      authorize: hasSession,
      resolve: (_root, args, ctx) => {
        if (!args.id) throw new Error('Missing parameter "id"');
        return ctx.prisma.toDo.findFirst({ where: { id: args.id } });
      },
    });
    t.field("toDos", {
      type: list("ToDo"),
      authorize: hasSession,
      resolve(_root, _args, ctx) {
        return ctx.prisma.toDo.findMany({
          where: { authorId: ctx.session?.user.id },
        });
      },
    });
  },
});

export const Mutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("createToDo", {
      type: ToDo,
      authorize: hasSession,
      args: {
        title: nonNull(stringArg()),
        details: stringArg(),
      },
      resolve: (_root, args, ctx) => {
        return ctx.prisma.toDo.create({
          data: {
            title: args.title,
            details: args.details || "",
            done: false,
            author: { connect: { id: ctx.session?.user.id } },
          },
        });
      },
    });
    t.field("toggleToDo", {
      type: ToDo,
      authorize: hasSession,
      args: {
        id: nonNull(stringArg()),
        done: nonNull(booleanArg()),
      },
      resolve: (_root, { id, done }, { prisma }) => {
        console.log(`received request to toggle todo ${id} to ${done}.`);
        return prisma.toDo.update({
          where: { id },
          data: {
            done,
          },
        });
      },
    });
  },
});
