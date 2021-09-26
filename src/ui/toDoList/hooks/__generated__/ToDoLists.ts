/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ToDoLists
// ====================================================

export interface ToDoLists_toDoLists_ToDo {
  __typename: "ToDo";
  id: string;
  title: string;
  done: boolean;
}

export interface ToDoLists_toDoLists {
  __typename: "ToDoList";
  id: string;
  title: string;
  ToDo: ToDoLists_toDoLists_ToDo[];
}

export interface ToDoLists {
  toDoLists: (ToDoLists_toDoLists | null)[] | null;
}
