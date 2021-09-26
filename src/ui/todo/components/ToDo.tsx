import { FC, MouseEventHandler } from "react";
import styled from "styled-components";
import { useToDoList, useToggleToDo } from "../";

const P = styled.p`
  font-size: 21;
`;

export const ToDo: FC = () => {
  const { data } = useToDoList();
  const [toggleToDo] = useToggleToDo();
  const handleToggle =
    (id?: string, done?: boolean): MouseEventHandler =>
    (event) => {
      event.preventDefault();
      toggleToDo({ variables: { id, done: !done } });
    };
  if (!data?.toDos?.length) return <p>no toDo found!</p>;
  return (
    <ol>
      {data?.toDos.map((toDo) => (
        <li key={toDo?.id} onClick={handleToggle(toDo?.id, toDo?.done)}>
          {toDo?.title}, {toDo?.done ? "done" : "not done"}
        </li>
      ))}
    </ol>
  );
};
