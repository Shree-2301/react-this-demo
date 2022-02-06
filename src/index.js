import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Calculator from "./Calculator";
import EventBind from "./EventBind";
import ParentComponent from "./PrentComponent";
import UserGreeting from "./UserGreeting";
import NameList from "./NameList";
import Form from "./Form";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    {/* <EventBind /> */}
    {/* <ParentComponent /> */}
    {/* <UserGreeting /> */}
    {/* <Calculator /> */}
    {/* <NameList /> */}
    <Form />
  </StrictMode>,
  rootElement
);
