import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  Contact,
  Footer,
  Infos,
  NavBar,
  PictureComparison,
  Services,
  Welcome,
} from "./index";
import "./main.css";
import { ScrollToTopButton } from "./components/button/ScrollToTopButton";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Welcome />
              <Services />
              <PictureComparison />
              <Contact />
            </>
          }
        />
        <Route
          path="/infos"
          element={<Infos />}
        />
      </Routes>
      <ScrollToTopButton />
      <Footer />
    </Router>
  </StrictMode>
);
