import { FC } from "react";
import styled from "styled-components";
import { useTodo } from "../hooks/useTodos";

const P = styled.p`
  font-size: 21;
`;

export const ToDo: FC = () => {
  const { data } = useTodo();
  if (!data?.todo?.id) return <p>no todo found!</p>;
  return <P>todos: {JSON.stringify(data.todo)}</P>;
};
