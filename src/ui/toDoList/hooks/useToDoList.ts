import { gql, useMutation, useQuery } from "@apollo/client";
import { ToDoLists } from "./__generated__/ToDoLists";

export const TODO_LISTS = gql`
  query ToDoLists {
    toDoLists {
      id
      title
      ToDo {
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
