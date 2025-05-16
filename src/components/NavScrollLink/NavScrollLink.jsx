// src/components/NavScrollLink.jsx
import { Link as ScrollLink } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";
// import { useEffect } from "react";

export function NavScrollLink({ to, children }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    if (location.pathname !== "/") {
      // Si on est sur /infos ou autre, redirige d'abord vers /
      navigate("/", { replace: false });

      // Puis, après un petit délai, scrolle vers l'ancre
      setTimeout(() => {
        const element = document.getElementById(to);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <ScrollLink
      to={to}
      smooth={true}
      duration={500}
      offset={-70}
      onClick={handleClick}
    >
      {children}
    </ScrollLink>
  );
}
