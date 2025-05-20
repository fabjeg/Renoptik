import { useState, useEffect } from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Contact,
  Footer,
  Infos,
  Loading,
  Navbar2,
  PictureComparison,
  Services,
  Welcome,
} from "./index";
import "./main.css";
import { ScrollToTopButton } from "./components/button/ScrollToTopButton";

export function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Navbar2 />
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
        </>
      )}
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
