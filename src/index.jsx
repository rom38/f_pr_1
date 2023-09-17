// import React, { render } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
