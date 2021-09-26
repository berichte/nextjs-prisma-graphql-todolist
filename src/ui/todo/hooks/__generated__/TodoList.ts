/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ToDoList
// ====================================================

export interface ToDoList_toDos {
  __typename: "ToDo";
  id: string;
  title: string;
  details: string;
  done: boolean;
}

export interface ToDoList {
  toDos: (ToDoList_toDos | null)[] | null;
}
