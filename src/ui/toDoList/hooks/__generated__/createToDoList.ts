/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createToDoList
// ====================================================

export interface createToDoList_createToDoList {
  __typename: "ToDoList";
  id: string;
  title: string;
}

export interface createToDoList {
  createToDoList: createToDoList_createToDoList | null;
}

export interface createToDoListVariables {
  title: string;
}
