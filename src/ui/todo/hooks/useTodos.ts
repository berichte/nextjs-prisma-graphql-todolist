import { gql, useMutation, useQuery } from "@apollo/client";
import { TODO_LISTS } from "../../toDoList/hooks/useToDoList";
import { ToDo } from "./__generated__/ToDo";
import { ToDoList } from "./__generated__/ToDoList";

const TODO = gql`
  query ToDo($id: String!) {
    toDo(id: $id) {
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
  query ToDoList($toDoListId: String!) {
    toDos(toDoListId: $toDoListId) {
      id
      title
      done
    }
  }
`;

export const useToDoList = () => {
  return useQuery<ToDoList>(TODO_LIST);
};

const CREATE_TODO = gql`
  mutation createToDo($title: String!, $toDoListId: String!) {
    createToDo(title: $title, toDoListId: $toDoListId) {
      id
      title
      done
    }
  }
`;

export const useCreateToDo = (toDoListId: string) => {
  return useMutation<ToDo>(CREATE_TODO, {
    variables: {
      toDoListId,
    },
    refetchQueries: [TODO_LISTS],
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

export const useToggleToDo = (id: string) => {
  return useMutation<ToDo>(TOGGLE_TODO, {
    variables: {
      id,
    },
    refetchQueries: [TODO_LISTS],
  });
};

const DELETE_TODO = gql`
  mutation deleteToDo($id: String!) {
    deleteToDo(id: $id) {
      id
    }
  }
`;

export const useDeleteToDo = (id: string) =>
  useMutation(DELETE_TODO, { variables: { id }, refetchQueries: [TODO_LISTS] });
