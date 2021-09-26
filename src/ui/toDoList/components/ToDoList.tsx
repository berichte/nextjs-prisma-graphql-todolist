import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  IconButton,
  Input,
  Typography,
  DialogContentText,
  Button,
} from "@mui/material";
import DeleteOutline from "@mui/icons-material/DeleteOutline";

import { ToDoItem, CreateToDo } from "../../toDo/components";
import { useDeleteToDoList, useUpdateToDoList } from "../hooks/useToDoList";
import { ToDoLists_toDoLists_ToDo } from "../hooks/__generated__/ToDoLists";

type ToDoListParams = {
  id: string;
  title: string;
  toDos: ToDoLists_toDoLists_ToDo[];
};

export const ToDoList = ({ id, title, toDos }: ToDoListParams) => {
  const [titleChange, setTitleChange] = useState<string>(title);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isDelWarnOpen, setIsDelWarnOpen] = useState(false);

  const [updateToDoList] = useUpdateToDoList(id);
  const [deleteToDoList] = useDeleteToDoList(id);

  const handleSubmit = () => {
    setIsEditingTitle(false);
    updateToDoList({ variables: { title: titleChange } });
  };

  const handleClose = () => setIsDelWarnOpen(false);

  const handleDelList = async () => {
    await deleteToDoList();
    setIsDelWarnOpen(false);
  };

  return (
    <>
      <Card variant="outlined" sx={{ minWidth: 275, margin: 3 }}>
        <CardHeader
          title={
            isEditingTitle ? (
              <Input
                onBlur={handleSubmit}
                autoFocus
                value={titleChange}
                onChange={(e) => setTitleChange(e.target.value)}
                sx={{ border: 0 }}
              />
            ) : (
              <Typography
                onClick={() =>
                  !isEditingTitle && setIsEditingTitle(!isEditingTitle)
                }
                variant="h4"
              >
                {title}
              </Typography>
            )
          }
          action={
            <IconButton
              aria-label={`del-${title}-list`}
              onClick={() => setIsDelWarnOpen(true)}
            >
              <DeleteOutline />
            </IconButton>
          }
        />
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
      <Dialog open={isDelWarnOpen} onClose={() => setIsDelWarnOpen(false)}>
        <DialogTitle>
          Do you really want to delete the {title} list?
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            If you delete this list you will also delete {toDos.length} ToDos!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDelList} autoFocus>
            Bun it with 🔥
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
