import { FC, useState } from "react";
import styled from "styled-components";
import { useCreateToDo } from "../";

const P = styled.p`
  font-size: 21;
`;

export const CreateToDo: FC = () => {
  const [createToDo, { data, error }] = useCreateToDo();
  const [title, setTitle] = useState<string>("");
  const [details, setDetails] = useState<string>("");
  const handleSubmit = async () => {
    console.log("sending new toDo: ", title, details);
    const result = await createToDo({
      variables: {
        title,
        details,
      },
    });
    console.log("sent new toDo", result);
    setTitle("");
    setDetails("");
  };
  return (
    <div>
      <label>
        New ToDo:
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
