import { Context } from "../context";

export const hasSession = (_root: unknown, _args: unknown, ctx: Context) =>
  !!ctx.session?.user.id;
