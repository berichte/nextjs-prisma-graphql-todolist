/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: deleteToDo
// ====================================================

export interface deleteToDo_deleteToDo {
  __typename: "ToDo";
  id: string;
}

export interface deleteToDo {
  deleteToDo: deleteToDo_deleteToDo | null;
}

export interface deleteToDoVariables {
  id: string;
}
