import "./navbar.css";
import logo from "../../assets/logo_renoptik.jpg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

export function NavBar() {
  const expand = "xxl";

  return (
    <Navbar expand={expand} className="bg-body-tertiary mb-3">
      <Container fluid className="container_navbar">
        <img src={logo} alt="Rénoptik" />
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Accueil</Nav.Link>
              <Nav.Link href="#action2">Nos Services</Nav.Link>
              <Nav.Link href="#action3">Galerie</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
