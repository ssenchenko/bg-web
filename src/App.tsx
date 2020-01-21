import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "settings";
import { Switch, Route } from "react-router-dom";
import LandingScreen from "screens/landing";
import NotFound from "screens/not-found";

const App: React.FC = () => (
  <>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/">
          <LandingScreen />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </ThemeProvider>
  </>
);

export default App;
