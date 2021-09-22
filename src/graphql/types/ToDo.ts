
import { objectType } from "nexus";

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
