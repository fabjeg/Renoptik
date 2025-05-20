import { useState, useEffect } from "react";
import {
  CCollapse,
  CContainer,
  CNavbar,
  CNavbarNav,
  CNavbarToggler,
} from "@coreui/react";
import logo from "../../assets/logo_renoptik.jpg";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";

const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
};

export const Navbar2 = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <ScrollToSection />
      <CNavbar expand="lg">
        <CContainer fluid>
          <img
            src={logo}
            alt="Rénoptik"
            className="logo-renoptik"
          />
          <CNavbarToggler
            aria-label="Toggle navigation"
            aria-expanded={visible}
            onClick={() => setVisible(!visible)}
          />
          <CCollapse
            className="navbar-collapse"
            visible={visible}
          >
            <CNavbarNav as="nav">
              <Link
                to="/"
                className="nav-link"
              >
                Accueil
              </Link>

              <Link
                to="/#services"
                className="nav-link"
              >
                Nos services
              </Link>

              <Link
                to="/#realisations"
                className="nav-link"
              >
                Nos Réalisations
              </Link>

              <Link
                to="/infos"
                className="nav-link"
              >
                Infos
              </Link>
            </CNavbarNav>
          </CCollapse>
        </CContainer>
      </CNavbar>
    </>
  );
};
