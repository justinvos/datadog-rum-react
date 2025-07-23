import React from "react";
import { createRoot } from "react-dom/client";
import "./rum";

const registration = navigator.serviceWorker.register(
  "/datadog-rum-react/service-worker.js",
  {
    scope: "/datadog-rum-react/",
  }
);

document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById("app"));
root.render(
  <h1>
    Hello, world
    <img src="https://vos.nz/this_is_fine.jpg" alt="Logo" />
  </h1>
);
