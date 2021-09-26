import { AppBar, Typography, Toolbar, Icon } from "@mui/material";
import Ballot from "@mui/icons-material/Ballot";

import { MyUserAvatar } from "../../user/components/MyUserAvatar";
export const NavBar = () => (
  <AppBar position="static">
    <Toolbar
      variant="dense"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Icon>
          <Ballot />
        </Icon>
        <Typography variant="h6" color="inherit" component="div">
          ToDos
        </Typography>
      </div>
      <MyUserAvatar />
    </Toolbar>
  </AppBar>
);
