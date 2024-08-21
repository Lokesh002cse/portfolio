import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { HiCalculator } from "react-icons/hi";
import { SiImdb, SiAboutdotme, SiAnilist } from "react-icons/si";

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
      title: "PORTFOLIO",
      icon: <SiAboutdotme size="7em" />,
      link: "https://lokesh002cse.github.io/portfolioapp/",
    },
  ];


  // Split the projects into chunks of 2
  const projectChunks = [];
  for (let i = 0; i < projects.length; i += 2) {
    projectChunks.push(projects.slice(i, i + 2));
  }

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>Projects</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <Tab.Container id="projects-tabs" defaultActiveKey="tab1">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  {projectChunks.map((_, index) => (
                    <Nav.Item key={index}>
                      <Nav.Link eventKey={`tab${index + 1}`}>
                        Tab {index + 1}
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
                <Tab.Content>
                  {projectChunks.map((chunk, index) => (
                    <Tab.Pane eventKey={`tab${index + 1}`} key={index}>
                      <Row>
                        {chunk.map((project, projectIndex) => (
                          <Col key={projectIndex} md={6} className="justify-content-center">
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ textDecoration: 'none', color: 'inherit' }}
                              className="d-flex flex-column align-items-center" // Stack icon and title vertically
                            >
                              {project.icon}
                              <div className="project-title">
                                <h3>{project.title}</h3>
                              </div>
                            </a>
                          </Col>
                        ))}
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