import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { SiAboutdotme, SiAnilist, SiImdb } from 'react-icons/si';
import { HiCalculator } from 'react-icons/hi';

export const Projects = () => {
  const projects = [
    {
      title: "PORTFOLIO",
      icon: <SiAboutdotme size="7em" />,
      link: "https://lokesh002cse.github.io/portfolio/",
    },
    {
      title: "AI&ML",
      icon: <SiAnilist size="7em" />,
      link: "https://github.com/Lokesh002cse/AISIGNLANGUAGE",
    },
    {
      title: "IMDB - CLONE",
      icon: <SiImdb size="7em" />,
      link: "https://github.com/Lokesh002cse/imdb-clone",
    },
    {
      title: "CALCULATOR",
      icon: <HiCalculator size="7em" />,
      link: "https://lokesh002cse.github.io/calc/",
    },
    {
      title: "PORTFOLIO APP",
      icon: <SiAboutdotme size="7em" />,
      link: "https://lokesh002cse.github.io/portfolioapp/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>Projects</h2>
              <p>
                A showcase of my recent work, highlighting my expertise in web development and software design. Each project demonstrates my ability to solve real-world problems through innovative solutions, utilizing modern technologies and best practices. Explore detailed case studies, code snippets, and live demos to see how I approach challenges, design user-centric interfaces, and implement robust backend systems.
              </p>
              <Tab.Container id="projects-tabs" defaultActiveKey="tab0">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  {projects.map((project, index) => (
                    <Nav.Item key={index}>
                      <Nav.Link eventKey={`tab${index}`}>{project.title}</Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
                <Tab.Content>
                  {projects.map((project, index) => (
                    <Tab.Pane eventKey={`tab${index}`} key={index}>
                      <Row className="justify-content-center">
                        <Col md={6} className="d-flex flex-column align-items-center">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none', color: 'inherit' }}
                          >
                            {project.icon}
                            <div className="project-title">
                              <h3>{project.title}</h3>
                            </div>
                          </a>
                        </Col>
                      </Row>
                    </Tab.Pane>
                  ))}
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
