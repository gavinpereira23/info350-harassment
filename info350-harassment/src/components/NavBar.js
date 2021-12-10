import {Link, NavLink} from 'react-router-dom';
import {Navbar, Container, Nav, Col, NavDropdown} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap"

export function NavBar(){
  return(
      <Navbar className="color-nav mb-3" collapseOnSelect expand="lg" variant="light" fixed="top">
      <Container>
          <LinkContainer to="./Welcome">
              <Navbar.Brand className="nav-brand pt-2.5 nav-text-color">&lt;/ Harassment &gt;</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto nav-text">
                <LinkContainer to="./Welcome">
                    <Nav.Link className="nav-text-color">WELCOME</Nav.Link>
                </LinkContainer>
                <LinkContainer to="./Stats">
                    <Nav.Link className="nav-text-color">STATISTICS</Nav.Link>
                </LinkContainer>
                <LinkContainer to="./Forum">
                    <Nav.Link className="nav-text-color" href="#">FORUM</Nav.Link>
                </LinkContainer>
                <LinkContainer to="./Resources">
                    <Nav.Link className="nav-text-color">RESOURCES</Nav.Link>
                </LinkContainer>
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>

);
}
