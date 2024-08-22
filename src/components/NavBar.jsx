import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand as={Link} to="/portfolio" className="navbar-brand">
          <span style={{ fontWeight: 'bold', color: 'white' }}>LOKESH KUMAR</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav">
            <NavDropdown
              title="ABOUT"
              id="about-dropdown"
              className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'}
              style={{ fontWeight: 'bold' }}
              onClick={() => onUpdateActiveLink('about')}
            >
              <NavDropdown.Item href="#about-1">Me</NavDropdown.Item>
              <NavDropdown.Item href="#about-2">Resume</NavDropdown.Item>
             
            </NavDropdown>
            <Nav.Link
              as={Link}
              to="/skills"
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
              style={{ fontWeight: 'bold' }}
              onClick={() => onUpdateActiveLink('skills')}
            >
              SKILLS
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/projects"
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              style={{ fontWeight: 'bold' }}
              onClick={() => onUpdateActiveLink('projects')}
            >
              PROJECTS
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}