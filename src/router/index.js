import React from "react";
import Home from "../pages/Home/index";
import Coller from "../pages/Coller/index";
import App from "../App.tsx";
const route = [
  {
    path: "/",
    component: App,
  },
  {
    path: "/home", //合同台账
    component: Home,
  },
  {
    path: "/customer", //客户台账
    component: Coller,
  },
];
export default route;
