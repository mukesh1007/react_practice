import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import BackgroundChanger from "./components/BackgroundChanger";
import Counter from "./components/Counter"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <BackgroundChanger /> */}
    <Counter/>
  </React.StrictMode>
);
