import { gql, useMutation, useQuery } from "@apollo/client";
import { ToDoLists } from "./__generated__/ToDoLists";

export const TODO_LISTS = gql`
  query ToDoLists {
    toDoLists {
      id
      title
      ToDo(orderBy: { done: asc }) {
        id
        title
        done
      }
    }
  }
`;

export const useToDoLists = () => useQuery<ToDoLists>(TODO_LISTS);

const ADD_TODO_LIST = gql`
  mutation createToDoList($title: String!) {
    createToDoList(title: $title) {
      id
      title
    }
  }
`;

export const useAddToDoList = () =>
  useMutation(ADD_TODO_LIST, {
    refetchQueries: [TODO_LISTS],
  });

const UPDATE_TODO_LIST = gql`
  mutation updateToDoList($id: String!, $title: String!) {
    updateToDoList(id: $id, title: $title) {
      id
      title
    }
  }
`;

export const useUpdateToDoList = (id: string) =>
  useMutation(UPDATE_TODO_LIST, {
    variables: { id },
    refetchQueries: [TODO_LISTS],
  });

const DELETE_TODO_LIST = gql`
  mutation deleteToDoList($id: String!) {
    deleteToDoList(id: $id) {
      id
    }
  }
`;

export const useDeleteToDoList = (id: string) =>
  useMutation(DELETE_TODO_LIST, {
    variables: { id },
    refetchQueries: [TODO_LISTS],
  });
