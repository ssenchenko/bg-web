import React, { ReactNode } from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "services/auth";

export enum Routes {
  Landing = "/",
  Login = "/login/",
}

export enum ProtectedRoutes {
  Cms = "/cms/",
}

// screen if you're not yet authenticated.
const ProtectedRoute: React.FC<{ children: ReactNode; rest: any[] }> = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
