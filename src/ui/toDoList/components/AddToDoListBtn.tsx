import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import styled from "styled-components";
import Chance from "chance";

import { useAddToDoList } from "../hooks/useToDoList";

const chance = new Chance();

const AddToDoListBtnContainer = styled.div`
  position: absolute;
  bottom: 32px;
  right: 32px;
`;

export const AddToDoListBtn = () => {
  const [addToDoList, { loading, error }] = useAddToDoList();
  const handleAdding = async () => {
    console.log("before adding ToDoList");
    const r = await addToDoList({ variables: { title: chance.animal() } });
    console.log("after adding ToDoList", r);
  };
  console.log(error);
  return (
    <AddToDoListBtnContainer>
      <Fab color="primary" aria-label="add-toDo-list" onClick={handleAdding}>
        <AddIcon />
      </Fab>
    </AddToDoListBtnContainer>
  );
};
