import { gql, useQuery } from "@apollo/client";
import { ToDo } from "./__generated__/ToDo";

const TODO = gql`
  query ToDo {
    todo {
      id
      title
      done
    }
  }
`;

export const useTodo = () => {
  return useQuery<ToDo>(TODO);
};
