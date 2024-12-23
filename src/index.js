import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App.tsx';

import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import route from "./router";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./store";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        {route.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}
      </Routes>
    </Router>
  </Provider>
  // <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
