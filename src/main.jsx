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
  // PictureComparison,
  Services,
  Slider,
  Welcome,
  Separator,
  Coloris,
} from "./index";
import "./main.css";
import { ScrollToTopButton } from "./components/button/ScrollToTopButton";
import { ThemeProvider } from "./context/ThemeContext";

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
                  <Separator variant="wave1" />
                  <Services />
                  <Separator variant="wave2" flip={true} />
                  {/* <PictureComparison /> */}
                  <Slider />
                  <Separator variant="curve" />
                  <Contact />
                  <Separator variant="wave3" flip={true} />
                </>
              }
            />
            <Route
              path="/infos"
              element={<Infos />}
            />
            <Route
              path="/coloris"
              element={<Coloris />}
            />
          </Routes>
          <ScrollToTopButton />
          <Footer />
        </>
      )}
    </div>
  );
}
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <StrictMode>
    <ThemeProvider>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </StrictMode>
);
