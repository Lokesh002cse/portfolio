import { Col, Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { FaLinkedin, FaInstagram, FaEnvelope, FaGithub } from 'react-icons/fa';
import Image from "react-bootstrap/Image";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const [showSocials, setShowSocials] = useState(false);
  const toRotate = ["Frontend Developer", "Web Designer", "UI/UX Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  const handleToggle = () => {
    setShowSocials(!showSocials);
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div className="image-container">
              {/* Add the image here */}
              <Image 
                src={require('../assets/img/pic1.jpg')} 
                alt="Profile"
                roundedCircle 
                className="profile-image"
                style={{ width: '150px', height: '150px', marginBottom: '20px' }} // Adjust size and margin as needed
              />
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>{`Hi! I'm Lokesh`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Frontend Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
              <p>A passionate and results-driven developer with a knack for creating intuitive, efficient, and scalable web applications. With a strong foundation in both frontend and backend technologies, I thrive on turning complex challenges into elegant solutions. My portfolio showcases the breadth and depth of my experience, from dynamic single-page applications to robust backend systems. I’m excited to share my journey, my work, and the skills that have shaped my career. Let’s build something amazing together!</p>
              <button onClick={handleToggle} style={{ display: 'flex', alignItems: 'center' }}>
                Let’s Connect <ArrowRightCircle size={25} />
              </button>
              {showSocials && (
                <div style={{ marginTop: '10px', display: 'flex', gap: '15px' }}>
                  <a href="https://www.linkedin.com/in/lokeshkmr2511/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={30} />
                  </a>
                  <a href="https://www.instagram.com/_itzzlokesh_007/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={30} />
                  </a>
                  <a href="mailto:lokeshkmr995@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope size={30} />
                  </a>
                  <a href="https://github.com/Lokesh002cse" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={30} />
                  </a>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
