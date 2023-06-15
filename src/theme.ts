import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: "Tomorrow,Roboto,Poppins,sans-serif !important",
    fontSize: 12,
  },
  palette: {
    // mode: "dark",
    primary: {
      main: "#FFFFE",
    },
    secondary: {
      main: "#8a89fa",
    },
    // error: {
    // 	main: red.A400,
    // },
  },
});

export default theme;
