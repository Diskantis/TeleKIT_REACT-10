import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./features/store";

import { GlobalStyle } from "./styles/style";
import App from "./components/App/App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
);
