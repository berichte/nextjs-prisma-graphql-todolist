/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: TodoList
// ====================================================

export interface TodoList_todoList_author {
  __typename: "User";
  email: string | null;
}

export interface TodoList_todoList {
  __typename: "ToDo";
  id: string;
  title: string;
  details: string;
  done: boolean;
  author: TodoList_todoList_author;
}

export interface TodoList {
  todoList: (TodoList_todoList | null)[] | null;
}
