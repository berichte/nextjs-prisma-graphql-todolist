import React, { FC } from "react";

import { signOut } from "next-auth/react";
import { Avatar, Menu, MenuItem } from "@mui/material";
import { useMe } from "../hooks/useMe";
import styled from "styled-components";

const Image = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;

export const MyUserAvatar: FC = () => {
  const { data } = useMe();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const signOutUser = () => signOut({ redirect: false });
  if (!data?.me?.image) return null;

  return (
    <>
      <div onClick={handleClick}>
        <Avatar alt={data.me.email || "avatar"} src={data.me?.image} />
      </div>
      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={signOutUser}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default MyUserAvatar;
