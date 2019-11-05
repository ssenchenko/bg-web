import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import theme from 'settings';
import { Switch, Route } from 'react-router';
import LandingScreen from 'screens/landing';

const App: React.FC = () => (
  <>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/">
          <LandingScreen />
        </Route>
      </Switch>
    </ThemeProvider>
  </>
);

export default App;
