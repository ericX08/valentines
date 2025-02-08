import React from "react";
import { createRoot } from "react-dom/client"; // Correct import
import "antd/dist/reset.css"; // Import Ant Design CSS here
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = createRoot(document.getElementById("root")); // Corrected
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app
reportWebVitals();
