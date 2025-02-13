import { useEffect } from "react";  // Import useEffect
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import { Container, Row, Col } from 'reactstrap';
import logo from '../assets/images/logo.png';
import '../style/Home.css';
import Info from "../components/utlis/Info";
import TabComponent from "../components/utlis/TabComponent";

const Home = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 800, 
      offset: 200,   
      easing: 'ease-in-out',
      once: true,   
    });
  }, []); 

  return (
    <>
    <section className="home">
      <Container>
        <Row className="align-items-center hero_section">
          {/* Image Column */}
          <Col lg="8" md="6">
            <div className="image-container"></div>
          </Col>

          {/* Text Column */}
          <Col lg="4" md="6">
            <div
              className="text-overlay"
              data-aos="fade-left"
            >
              <img src={logo} alt="" className='border' />
              <h4>Deliver the skills that move business forward.</h4>
              <p>
                <i>The only skill development platform that’s built with real-time skills and career data from LinkedIn.</i>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <Info/>
    <TabComponent/>
    </>
  );
};

export default Home;
