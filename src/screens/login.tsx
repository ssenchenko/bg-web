import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import auth from "services/auth";
import { Routes } from "routes";

const LoginScreen: React.FC = () => {
  // TODO: extend as I understand what's should be here
  // for now just to make it compile
  interface IMinimalLocation {
    from: {
      pathname: string;
    };
  }

  const history = useHistory();
  const location = useLocation<IMinimalLocation>();

  const initialLocation: IMinimalLocation = {
    from: {
      pathname: Routes.Landing,
    },
  };
  const { from } = location.state || initialLocation;

  const login = () => {
    auth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
};

export default LoginScreen;
