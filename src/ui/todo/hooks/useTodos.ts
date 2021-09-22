import { gql, useQuery } from "@apollo/client";
import { ToDo } from "./__generated__/ToDo";
import { TodoList } from "./__generated__/TodoList";

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

const TODO_LIST = gql`
  query TodoList {
    todoList {
      id
      title
      details
      done
      author {
        email
      }
    }
  }
`;

export const useTodoList = () => {
  return useQuery<TodoList>(TODO_LIST);
};
