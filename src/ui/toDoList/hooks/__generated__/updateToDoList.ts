/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: updateToDoList
// ====================================================

export interface updateToDoList_updateToDoList {
  __typename: "ToDoList";
  id: string;
  title: string;
}

export interface updateToDoList {
  updateToDoList: updateToDoList_updateToDoList | null;
}

export interface updateToDoListVariables {
  id: string;
  title: string;
}
