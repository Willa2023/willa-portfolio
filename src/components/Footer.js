import {Container, Row, Col} from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                    <p>Copyright 2024. Created By Willa</p>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/mingyue-wang-41774a292/"><img src={navIcon1} alt="Icon" /></a>
                            <a href="#"><img src={navIcon2} alt="Icon" /></a>
                            <a href="#"><img src={navIcon3} alt="Icon" /></a>
                        </div>
                        
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;