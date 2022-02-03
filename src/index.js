import { StrictMode } from "react";
import ReactDOM from "react-dom";

import EventBind from "./EventBind";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <EventBind />
  </StrictMode>,
  rootElement
);
