/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: TodoList
// ====================================================

export interface TodoList_toDos {
  __typename: "ToDo";
  id: string;
  title: string;
  details: string;
  done: boolean;
}

export interface TodoList {
  toDos: (TodoList_toDos | null)[] | null;
}