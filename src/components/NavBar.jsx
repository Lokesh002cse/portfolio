import { Navbar, Container, Nav } from "react-bootstrap";
import { useEffect, useState } from "react";


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
                    <Navbar.Brand href="#home" className="navbar-brand">
                        <span style={{ fontWeight: 'bold',color:'white' }}>LOKESH KUMAR</span>
                    </Navbar.Brand>
                    
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="navbar-nav">
                            <Nav.Link
                                href="#about"
                                className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'}
                                style={{ fontWeight: 'bold' }}
                                onClick={() => onUpdateActiveLink('about')}
                            >
                                ABOUT
                            </Nav.Link>
                            <Nav.Link
                                href="#skills"
                                className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                                style={{ fontWeight: 'bold' }}
                                onClick={() => onUpdateActiveLink('skills')}
                            >
                                SKILLS
                            </Nav.Link>
                            <Nav.Link
                                href="#projects"
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
