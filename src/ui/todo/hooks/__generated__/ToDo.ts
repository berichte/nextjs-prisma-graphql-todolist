/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ToDo
// ====================================================

export interface ToDo_todo {
  __typename: "ToDo";
  id: string;
  title: string;
  done: boolean;
}

export interface ToDo {
  todo: ToDo_todo | null;
}
