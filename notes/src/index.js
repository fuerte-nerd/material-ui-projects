import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <React>
    <Provider store={store}>
      <App />
    </Provider>
  </React>,
  document.getElementById("root")
);
