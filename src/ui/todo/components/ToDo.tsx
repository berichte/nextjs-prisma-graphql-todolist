import { FC } from "react";
import styled from "styled-components";
import { useTodo, useTodoList } from "../hooks/useTodos";

const P = styled.p`
  font-size: 21;
`;

export const ToDo: FC = () => {
  const { data } = useTodoList();
  if (!data?.toDos?.length) return <p>no todo found!</p>;
  return (
    <ol>
      {data?.toDos.map((todo) => (
        <li key={todo?.id}>
          {todo?.title}, {todo?.done ? 'done': 'not done'}
        </li>
      ))}
    </ol>
  );
};
