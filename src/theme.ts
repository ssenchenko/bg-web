import { createMuiTheme, Theme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#5c6bc0",
      light: "#8e99f3",
      dark: "#26418f",
      contrastText: "#fff",
    },
    secondary: {
      main: "#d81b60",
      light: "#ff5c8d",
      dark: "#a00037",
      contrastText: "#fff",
    },
    error: {
      main: "#c2185b",
      contrastText: "#fff",
    },
    background: {
      default: "#f8f8ff",
      paper: "#dcdcdc",
    },
  },
});

export type ThemedProps<T> = T & {
  theme: Theme;
};

export default theme;
