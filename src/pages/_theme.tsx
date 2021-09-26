import { createTheme } from "@mui/material";
import { lightBlue, orange } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: lightBlue[500]
    },
    secondary: {
      main: orange[500]
    }
  }
})