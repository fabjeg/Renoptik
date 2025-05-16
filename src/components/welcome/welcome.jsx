import "./welcome.css";
import picture from "../../assets/pictures_welcome.jpg";
import { ScrollComponent } from "../scrollComponent/scrollComponent";
import { ButtonContact } from "../../index";

export function Welcome() {
  return (
    <div className="container_welcome">
      <div className="container_welcome_description">
        <h1 className="background-title">Bienvenue chez Rénoptik</h1>
        <strong>Experts en rénovation de phares de voiture</strong>
        <p>
          Découvrez comment nous transformons vos phares pour améliorer leurs
          performances et sublimer leur esthétique.
          <br /> Rénoptik, où la qualité rencontre l'expertise.
        </p>
        <div className="container_welcome-button-logo">
          <ButtonContact />
          <div className="container_welcome_logo">
            <span
              className="fa-brands fa-square-facebook"
              onClick={() =>
                window.open(
                  "https://www.facebook.com/profile.php?id=61572603442867",
                  "_blank"
                )
              }
              role="button"
              aria-label="Facebook"
              tabIndex={0}
            />
            <span
              className="fa-brands fa-instagram"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/renoptikrenoptik/",
                  "_blank"
                )
              }
              role="button"
              aria-label="Instagram"
              tabIndex={0}
            />
          </div>
        </div>
      </div>
      <div className="container_welcome-picture">
        <ScrollComponent>
          <img
            src={picture}
            alt="rénoptik"
          />
        </ScrollComponent>
      </div>
    </div>
  );
}
