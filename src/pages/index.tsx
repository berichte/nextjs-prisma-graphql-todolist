import type { NextPage } from "next";
import { signIn, signOut } from "next-auth/react";
import React from "react";
import Heading from "../ui/layout/components/Heading";
import { NavBar } from "../ui/layout/components/NavBar";
import PageLayout from "../ui/layout/components/PageLayout";
import { CreateToDo } from "../ui/toDo/components/CreateToDo";
import { ToDo } from "../ui/toDo/components/ToDo";
import { ListOfLists } from "../ui/toDoList/components/ListOfLists";
import MyUserAvatar from "../ui/user/components/MyUserAvatar";
import { useMe } from "../ui/user/hooks/useMe";

const Home: NextPage = () => {
  const me = useMe().data?.me;

  return (
    <>
      {me ? (
        <>
          <NavBar />
          <PageLayout>
            <ListOfLists />
          </PageLayout>
        </>
      ) : (
        <button onClick={() => signIn("google")}>Sign in with Google</button>
      )}
    </>
  );
};

export default Home;
