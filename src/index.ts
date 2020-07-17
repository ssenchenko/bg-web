import React from "react";
import ReactDOM from "react-dom";
import App from "App";
import * as serviceWorker from "serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "contexts/auth";

const root: Element | null = document.getElementById("root");

if (root != null) {
  ReactDOM.render(
    React.createElement(
      React.StrictMode,
      null,
      React.createElement(
        BrowserRouter,
        null,
        React.createElement(AuthProvider, null, React.createElement(App, null, null)),
      ),
    ),
    root,
  );

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
}
