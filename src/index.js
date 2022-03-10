import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Demo from "./Demo";
import Demonew from "./Demonew";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Demonew />
  </StrictMode>,
  rootElement
);
