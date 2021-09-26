import { TextField } from "@mui/material";
import { KeyboardEventHandler, useState } from "react";
import { useCreateToDo } from "../";

type CreateToDo = {
  toDoListId: string;
};

export const CreateToDo = ({ toDoListId }: CreateToDo) => {
  const [createToDo] = useCreateToDo(toDoListId);
  const [title, setTitle] = useState<string>("");

  const handleSubmit = async () => {
    await createToDo({
      variables: {
        title,
      },
    });
    setTitle("");
  };

  const handleInput = (input: string) => {
    setTitle(input);
  };

  const keyPress: KeyboardEventHandler<HTMLDivElement> = (e) => {
    // hit enter
    if (e.keyCode == 13) {
      handleSubmit();
    }
  };
  return (
    <>
      <TextField
        fullWidth
        id="outlined-basic"
        label="Add a new ToDo item"
        variant="outlined"
        value={title}
        onChange={(e) => handleInput(e.target.value)}
        onKeyDown={keyPress}
      />
    </>
  );
};
