import { Card, CardContent, CardHeader, List, Typography } from "@mui/material";
import { ToDoItem, CreateToDo } from "../../toDo/components";
import { ToDoLists_toDoLists_ToDo } from "../hooks/__generated__/ToDoLists";

type ToDoListParams = {
  id: string;
  title?: string;
  toDos?: ToDoLists_toDoLists_ToDo[];
};

export const ToDoList = ({ id, title, toDos }: ToDoListParams) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardHeader title={title} />
      <CardContent>
        <CreateToDo toDoListId={id} />
        <List>
          {toDos?.map((toDo) => (
            <ToDoItem
              key={toDo.id}
              id={toDo.id}
              title={toDo.title}
              done={toDo.done}
            />
          ))}
        </List>
      </CardContent>
    </Card>
  );
};
