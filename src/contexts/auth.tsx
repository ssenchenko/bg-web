import React from "react";
import { User } from "firebase";

export enum AuthActionType {
  SignIn,
  SignUp,
  SignOut,
}

export interface AuthAction {
  type: AuthActionType;
  payload: {};
}

// if the user has not been authorized, Firebase returns null
export type UserOrNull = User | null;

export const authReducer: React.Reducer<UserOrNull, AuthAction> = (currentUser, action) => {
  switch (action.type) {
    case AuthActionType.SignOut:
      currentUser = null;
      break;
    default:
      throw new Error(`Unsupported action type: ${AuthActionType[action.type]}`);
  }
  return currentUser;
};

const AuthContext = React.createContext<React.Dispatch<AuthAction> | undefined>(undefined);
const UserContext = React.createContext<UserOrNull | undefined>(undefined);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, dispatch] = React.useReducer(authReducer, null);
  return (
    <AuthContext.Provider value={dispatch}>
      <UserContext.Provider value={user}>{children}</UserContext.Provider>
    </AuthContext.Provider>
  );
};

const useUser = () => {
  const user = React.useContext(UserContext);
  if (user === undefined) throw new Error("useUser must be inside UserContext");
  return user;
};

const useAuth = () => {
  const auth = React.useContext(AuthContext);
  if (auth === undefined) throw new Error("useAuth must be inside AuthContext");
  return auth;
};

export { AuthProvider, useUser, useAuth };
