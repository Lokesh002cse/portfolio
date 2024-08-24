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
          <Nav.Link
           as="a"
           href="https://drive.google.com/file/d/1Hnblyk3PMLCs0ajn6tqhabie0Hp0eerT/view" // Google Drive link
           className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'}
           style={{ fontWeight: 'bold' }}
           onClick={() => onUpdateActiveLink('resume')}
           target="_blank" // Open link in a new tab
           rel="noopener noreferrer" // Security best practice when using target="_blank"
            >
             RESUME
            </Nav.Link>

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
              style={{ fontWeight: 'bold'}}
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