import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "src/lang/i18n";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "src/configStore";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// "start": "react-scripts start",
// "build": "react-scripts build",
// "test": "react-scripts test",
