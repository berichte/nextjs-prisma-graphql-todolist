/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: toggleToDo
// ====================================================

export interface toggleToDo_toggleToDo {
  __typename: "ToDo";
  id: string;
  done: boolean;
}

export interface toggleToDo {
  toggleToDo: toggleToDo_toggleToDo | null;
}

export interface toggleToDoVariables {
  id: string;
  done: boolean;
}
