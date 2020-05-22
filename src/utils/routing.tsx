import React, { ReactNode } from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "services/auth";

// screen if you're not yet authenticated.
const PrivateRoute: React.FC<{ children: ReactNode; rest: any[] }> = ({ children, ...rest }) => {
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

export default PrivateRoute;
