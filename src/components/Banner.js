import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/robot-img2.png';

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['Software Developer', 'Frontend ? Backend ?', 'Full Stack Developer'];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100-Math.random()*100);
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(()=>{
            tick();
        }, delta);

        return () => {
            clearInterval(ticker);
        };
    }, [text]);

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

    return (
        <section className="banner" id="home">
            <Container>
                <Row className='align-items-top'>
                    <Col xs={12} md={6} xl={8}>
                        <span className="tagline">Welcome to my Portfolio！</span>
                        <h1>{`Hi, I'm Willa. `}
                            <br />
                            <span className='wrap'>{text}</span>
                        </h1>
                        <p>
                            I am a new graduate with a passion for creating innovative solutions, looking for an opportunity to grow as a software developer. I have practical projects in web development, mobile development. I am always looking for new challenges and opportunities to grow.
                        </p>
                        <button onClick={()=> console.log("connect")}>Let's Connect <ArrowRightCircle size={25} /> </button>
                    </Col>
                    {/* <Col xs={12} md={6} xl={1}></Col> */}
                    <Col xs={12} md={6} xl={4}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Banner;