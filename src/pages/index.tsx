import type { NextPage } from "next";
import { signIn } from "next-auth/react";
import React from "react";
import { NavBar } from "../ui/layout/components/NavBar";
import PageLayout from "../ui/layout/components/PageLayout";

import { ListOfLists } from "../ui";
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
