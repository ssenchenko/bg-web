import { createMuiTheme, Theme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#64ffda",
      light: "#9fffdf",
      dark: "#2bbc7d",
    },
    secondary: {
      main: "#ef6c00",
      light: "#ff9d3f",
      dark: "#b53d00",
    },
    error: {
      main: "#c2185b",
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

//export type TRoute = Record<string, string>;

export const ROUTES = {
  Landing: "/",
  Admin: "/admin/",
  Login: "/login/",
};

export default theme;
