import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Table from "./Table.js";
import PureComp from "./PureComp";
import RegularComp from "./RegularComp";
import ParentComp from "./ParentComp.js";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ParentComp />
  </StrictMode>,
  rootElement
);
