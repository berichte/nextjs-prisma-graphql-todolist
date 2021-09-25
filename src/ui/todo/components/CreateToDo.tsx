import { FC, useContext, useState } from "react";
import styled from "styled-components";
import { useMe } from "../../user/hooks/useMe";
import { useCreateTodo } from "../hooks/useTodos";

const P = styled.p`
  font-size: 21;
`;

export const CreateToDo: FC = () => {
  const [createTodo, { data, error }] = useCreateTodo();
  const [title, setTitle] = useState<string>("");
  const [details, setDetails] = useState<string>("");
  const handleSubmit = async () => {
    console.log("sending new todo: ", title, details);
    const result = await createTodo({
      variables: {
        title,
        details,
      },
    });
    console.log("sent new todo", result);
    setTitle("");
    setDetails("");
  };
  return (
    <div>
      <label>
        New Todo:
        {JSON.stringify(data, undefined, 2)}
        {JSON.stringify(error, undefined, 2)}
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};
