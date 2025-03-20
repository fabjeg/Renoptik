import { ButtonRealisation } from "../../index";
import "./welcome.css";
import picture from '../../assets/pictures_welcome.jpg'
import { ScrollComponent } from "../scrollComponent/scrollComponent";

export function Welcome() {
  return (
    <div className="container_welcome">
      <div className="container_welcome_description">
        <h1>Bienvenue chez Rénoptik</h1>
        <strong>Experts en rénovation de phares de voiture</strong>
        <p>
          Découvrez comment nous transformons vos phares pour améliorer leurs
          performances et sublimer leur esthétique.<br/> Rénoptik, où la qualité
          rencontre l'expertise.
        </p>
        <ButtonRealisation/>
      </div>
      <div className="container_welcome-picture">
      <ScrollComponent>
        <img src={picture} alt="rénoptik" />
      </ScrollComponent>
      </div>
    </div>
  );
}
