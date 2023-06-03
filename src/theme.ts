import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontFamily: "Tomorrow,Roboto,Poppins,sans-serif !important",
    fontSize: 12,
  },
  palette: {
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
