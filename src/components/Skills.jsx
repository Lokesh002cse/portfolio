import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaReact, FaPython} from 'react-icons/fa'; // Adjust based on available icons
import { SiCplusplus } from "react-icons/si";
import { BiLogoFlutter, BiLogoPostgresql } from "react-icons/bi";
export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>A comprehensive overview of the technical skills that define my expertise and approach to problem-solving. This section highlights my proficiency in a range of programming languages, frameworks, and tools, as well as my ability to collaborate effectively, adapt to new challenges, and lead projects to successful completion. Whether it's frontend design, backend development, these skills reflect my commitment to continuous learning and delivering high-quality results.</p>
                            <Carousel 
                                responsive={responsive} 
                                infinite={true} 
                                autoPlay={true} 
                                autoPlaySpeed={4000} // 5 seconds
                                showArrows={true} // Enable arrows for navigation
                                className="owl-carousel owl-theme skill-slider"
                            >
                                <div className="item">
                                    <FaReact size="5em" />
                                    <h5>ReactJS</h5>
                                </div>
                                <div className="item">
                                    <FaPython size="5em" />
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <SiCplusplus size="5em" />
                                    <h5>C++</h5>
                                </div>
                                <div className="item">
                                    <BiLogoPostgresql size="5em" />
                                    <h5>Postgre SQL</h5>
                                </div>
                                <div className="item">
                                    <BiLogoFlutter size="5em" />
                                    <h5>Flutter</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        
        </section>
    );
}
