import type { NextPage } from "next";
import { signIn, signOut } from "next-auth/react";
import React from "react";
import Heading from "../ui/layout/components/Heading";
import { NavBar } from "../ui/layout/components/Navbar";
import PageLayout from "../ui/layout/components/PageLayout";
import { CreateToDo } from "../ui/toDo/components/CreateToDo";
import { ToDo } from "../ui/toDo/components/ToDo";
import MyUserAvatar from "../ui/user/components/MyUserAvatar";
import { useMe } from "../ui/user/hooks/useMe";

const Home: NextPage = () => {
  const me = useMe().data?.me;

  return (
    <PageLayout>
      {me ? (
        <NavBar />
      ) : (
        <button onClick={() => signIn("google")}>Sign in with Google</button>
      )}
    </PageLayout>
  );
};

export default Home;
