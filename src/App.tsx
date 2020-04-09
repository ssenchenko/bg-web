import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { Route, Switch } from "react-router-dom";
import AdminScreen from "screens/admin";
import LandingScreen from "screens/landing";
import LoginScreen from "screens/login";
import NotFound from "screens/not-found";
import theme, { ROUTES } from "settings";

const App: React.FC = () => (
  <>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path={ROUTES.Landing}>
          <LandingScreen />
        </Route>

        <Route path={ROUTES.Login}>
          <LoginScreen />
        </Route>

        <Route path={ROUTES.Admin}>
          <AdminScreen />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </ThemeProvider>
  </>
);

export default App;
