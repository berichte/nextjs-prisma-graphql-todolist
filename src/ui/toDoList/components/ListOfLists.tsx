import { useToDoLists } from "../hooks/useToDoList";
import { AddToDoListBtn } from "./AddToDoListBtn";
import { ToDoList } from "./ToDoList";

export const ListOfLists = () => {
  const { data, loading, error } = useToDoLists();
  return (
    <>
      <div>
        {loading
          ? "loading"
          : error
          ? JSON.stringify(error)
          : data?.toDoLists?.map(
              (list) =>
                list && (
                  <ToDoList
                    key={list.id}
                    id={list.id}
                    title={list.title}
                    toDos={list.ToDo}
                  />
                )
            )}
      </div>
      <AddToDoListBtn />
    </>
  );
};
