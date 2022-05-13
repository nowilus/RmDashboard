/* eslint-disable import/no-amd */
import r1 from "react";
import r2 from "react-dom";
import App from "./components/App"
import Login from "./components/Login";

const React = r1;
const ReactDOM = r2;
const App1 = App;
const App2 = Login;


define([], () => {
  return {
    renderApp: function(props, domRef) {
      ReactDOM.render(<App1 {...props}/>, domRef);
    },
    renderApp2: function(props, domRef) {
      ReactDOM.render(<App2 {...props}/>, domRef);
    }
  };
});