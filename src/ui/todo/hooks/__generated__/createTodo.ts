/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createToDo
// ====================================================

export interface createToDo_createToDo {
  __typename: "ToDo";
  id: string;
  title: string;
  details: string;
  done: boolean;
}

export interface createToDo {
  createToDo: createToDo_createToDo | null;
}

export interface createToDoVariables {
  title: string;
  details: string;
}
