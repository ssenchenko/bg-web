import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { useUser } from "contexts/auth";
import { PageSpinner } from "components/centered-spinner";
import theme from "theme";
import { Routes, ProtectedRoutes } from "routes";

const LandingScreen = React.lazy(() => import("screens/landing"));
const ContentManagementScreen = React.lazy(() => import("screens/cms"));
const LoginScreen = React.lazy(() => import("screens/login"));
const NotFound = React.lazy(() => import("screens/not-found"));

const AuthorizedApp: React.FC = () => (
  <>
    <Switch>
      <Route exact path={Routes.Landing}>
        <LandingScreen />
      </Route>

      <Route exact path={ProtectedRoutes.Cms}>
        <ContentManagementScreen />
      </Route>

      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </>
);

const UnauthorizedApp: React.FC = () => (
  <>
    <Switch>
      <Route exact path={Routes.Landing}>
        <LandingScreen />
      </Route>

      <Route path={Routes.Login}>
        <LoginScreen />
      </Route>

      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </>
);

const App: React.FC = () => {
  const user = useUser();
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <React.Suspense fallback={<PageSpinner />}>
          {user ? <AuthorizedApp /> : <UnauthorizedApp />}
        </React.Suspense>
      </ThemeProvider>
    </>
  );
};

export default App;
