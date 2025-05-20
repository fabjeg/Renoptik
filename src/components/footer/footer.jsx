import "./footer.css";
import logo from "../../assets/logo-renoptik.JPG";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container_footer">
        <div className="footer_brand">
          <img
            src={logo}
            alt="Logo Rénoptik"
          />
          <div>
            <h3>Rénoptik</h3>
            <p>Rénovation de phares de voiture</p>
          </div>
          <div className="footer_contact">
            <h3>Contact</h3>
            <p>Email : contact@renoptik.com</p>
            <div className="footer_socials">
              <a
                href="https://www.facebook.com/profile.php?id=61572603442867"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="facebook-icon" />
              </a>
              <a
                href="https://www.instagram.com/renoptikrenoptik/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="instagram-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer_bottom">
        <p>&copy; {new Date().getFullYear()} Rénoptik. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
