import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/robot-img2.png';
import { HashLink } from 'react-router-hash-link';
import {
    BrowserRouter as Router
  } from "react-router-dom";

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['Software Developer', 'Frontend ? Backend ?', 'Full Stack Developer'];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100-Math.random()*100);
    const period = 1000;
    const aboutMe1 = 'As a recent graduate in software development, I am seeking for an opportunity to grow as a software developer. I thrive on solving problems through hands-on projects and continuously learning new skills, especially in emerging technologies.';
    const aboutMe2 = 'With a background in architecture, I’ve developed strong collaboration skills and a solid foundation in design. Transitioning into software development has allowed me to combine these strengths with my passion for innovation and creativity.';

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta/2);
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(prevLoopNum => prevLoopNum + 1);
            setDelta(300);
        }
    }

    useEffect(() => {
        let ticker = setInterval(()=>{
            tick();
        }, delta);

        return () => {
            clearInterval(ticker);
        };
    }, [text]);

    return (
        <Router>
            <section className="banner" id="home">
                <Container>
                    <Row className='align-items-top'>
                        <Col xs={12} md={6} xl={8}>
                            <span className="tagline">Welcome to my Portfolio！</span>
                            <h1>{`Hi, I'm Willa. `}
                                <br />
                                <span className='txt-rotate' dataPeriod="1000" data-rotate='["Software Developer", "Frontend ? Backend ?", "Full Stack Developer"]'>
                                    <span className='wrap' >{text}</span>
                                </span>
                            </h1>
                            <p>{aboutMe1}</p>
                            <p>{aboutMe2}</p>
                            <HashLink to="#contacts">
                                <button onClick={()=> console.log("connect")}>Let's Connect <ArrowRightCircle size={25} /> </button>
                            </HashLink>
                        </Col>
                        <Col xs={12} md={6} xl={4}>
                            <img src={headerImg} alt="Header Img" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </Router>
    );
}

export default Banner;