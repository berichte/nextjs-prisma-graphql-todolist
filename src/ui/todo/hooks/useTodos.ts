import { gql, useMutation, useQuery } from "@apollo/client";
import { ToDo } from "./__generated__/ToDo";
import { ToDoList } from "./__generated__/ToDoList";

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
  query ToDoList {
    toDos {
      id
      title
      details
      done
    }
  }
`;

export const useToDoList = () => {
  return useQuery<ToDoList>(TODO_LIST);
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

export const useCreateToDo = () => {
  return useMutation<ToDo>(CREATE_TODO, {
    refetchQueries: [TODO_LIST],
  });
};

const TOGGLE_TODO = gql`
  mutation toggleToDo($id: String!, $done: Boolean!) {
    toggleToDo(id: $id, done: $done) {
      id
      done
    }
  } 
`;

export const useToggleToDo = () => {
  return useMutation<ToDo>(TOGGLE_TODO, {
    refetchQueries: [TODO_LIST],
  });
};
