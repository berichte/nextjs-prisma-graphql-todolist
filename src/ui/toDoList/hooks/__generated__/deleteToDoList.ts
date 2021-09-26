/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: deleteToDoList
// ====================================================

export interface deleteToDoList_deleteToDoList {
  __typename: "ToDoList";
  id: string;
}

export interface deleteToDoList {
  deleteToDoList: deleteToDoList_deleteToDoList | null;
}

export interface deleteToDoListVariables {
  id: string;
}
