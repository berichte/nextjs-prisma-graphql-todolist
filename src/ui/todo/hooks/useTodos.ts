import { gql, useMutation, useQuery } from "@apollo/client";
import { ToDo } from "./__generated__/ToDo";
import { TodoList } from "./__generated__/TodoList";

const TODO = gql`
  query ToDo {
    toDo {
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
    toDos {
      id
      title
      details
      done
    }
  }
`;

export const useTodoList = () => {
  return useQuery<TodoList>(TODO_LIST);
};

const CREATE_TODO = gql`
  mutation createToDo($title: String!, $details: String!) {
    createToDo(title: $title, details: $details) {
      id
      title
      details
      done
    }
  }
`;

export const useCreateTodo = () => {
  return useMutation<ToDo>(CREATE_TODO);
};
