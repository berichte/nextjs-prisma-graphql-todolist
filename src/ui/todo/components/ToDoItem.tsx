import {
  Checkbox,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDeleteToDo, useToggleToDo } from "..";

type ToDoItemProps = {
  id: string;
  title: string;
  done: boolean;
};

export const ToDoItem = ({ id, title, done }: ToDoItemProps) => {
  const [toggleToDo] = useToggleToDo(id);
  const [deleteToDo] = useDeleteToDo(id);
  console.log(`${title}: ${done}`);
  return (
    <ListItem>
      <Checkbox
        checked={done}
        onChange={() => toggleToDo({ variables: { done: !done } })}
        icon={<CheckCircleOutlineIcon />}
        checkedIcon={<RadioButtonUncheckedIcon />}
      />
      <ListItemText primary={title} />
      <ListItemSecondaryAction>
        <DeleteOutlineIcon onClick={() => deleteToDo()} />
      </ListItemSecondaryAction>
    </ListItem>
  );
};
