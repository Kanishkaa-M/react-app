import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import Intro from "./components/Intro.jsx";

import "./components/nav.css";
import "./pages/home.css";
import "./pages/about.css";
import "./pages/education.css";
import "./pages/projects.css";
import "./pages/skills.css";
import "./pages/contacts.css";
import "./components/Background.css";

const bgUrl = `${import.meta.env.BASE_URL}background.jpeg`;
if (typeof document !== "undefined") {
  document.body.style.background = `url('${bgUrl}') no-repeat center center fixed`;
  document.body.style.backgroundSize = "cover";
}

function Root() {
  const [showApp, setShowApp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowApp(true);
    }, 5000); 

    return () => clearTimeout(timer);
  }, []);

  return showApp ? (
    <HashRouter>
      <App />
    </HashRouter>
  ) : (
    <Intro />
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
