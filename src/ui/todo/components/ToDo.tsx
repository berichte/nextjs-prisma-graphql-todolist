import { FC, MouseEventHandler } from "react";
import styled from "styled-components";
import { useTodoList, useToggleToDo } from "../hooks/useTodos";

const P = styled.p`
  font-size: 21;
`;

export const ToDo: FC = () => {
  const { data } = useTodoList();
  const [toggleToDo] = useToggleToDo();
  const handleToggle =
    (id?: string, done?: boolean): MouseEventHandler =>
    (event) => {
      event.preventDefault();
      toggleToDo({ variables: { id, done: !done } });
    };
  if (!data?.toDos?.length) return <p>no todo found!</p>;
  return (
    <ol>
      {data?.toDos.map((todo) => (
        <li key={todo?.id} onClick={handleToggle(todo?.id, todo?.done)}>
          {todo?.title}, {todo?.done ? "done" : "not done"}
        </li>
      ))}
    </ol>
  );
};
