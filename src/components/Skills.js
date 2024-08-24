import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Container, Row, Col} from 'react-bootstrap';
import javaIcon from '../assets/img/skill-java-original-wordmark.svg';
import csharpIcon from '../assets/img/skill-csharp-original.svg';
import dotnetIcon from '../assets/img/skill-dot-net-original-wordmark.svg';
import reactIcon from '../assets/img/skill-react-original-wordmark.svg';
import jsIcon from '../assets/img/skill-javascript-original.svg';
import tsIcon from '../assets/img/skill-typescript-original.svg';
import androidIcon from '../assets/img/skill-android-original-wordmark.svg';
import nodejsIcon from '../assets/img/skill-nodejs-original-wordmark.svg';
import nextjsIcon from '../assets/img/skill-nextjs-original-wordmark.svg';
import mysqlIcon from '../assets/img/skill-mysql-original-wordmark.svg';
import azureIcon from '../assets/img/skill-azure-original-wordmark.svg';
import chartjsIcon from '../assets/img/skill-chartjs-logo-title.svg';
import muiIcon from '../assets/img/skill-materialui-original.svg';

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
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
            <Container>
                <Row>
                    <Col>
                        <div className="skill-box">
                            <h2>
                                Skills
                            </h2>
                            <p>Here are the skills I have applied in practice through various projects.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <a href="https://www.java.com/" target="_blank" rel="noreferrer"> 
                                        <img src={javaIcon} alt="java" />
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="https://learn.microsoft.com/en-us/dotnet/csharp/" target="_blank" rel="noreferrer"> 
                                        <img src={csharpIcon} alt="csharp" />
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="https://learn.microsoft.com/en-us/dotnet/" target="_blank" rel="noreferrer"> 
                                        <img src={dotnetIcon} alt="dotnet" />
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> 
                                        <img src={reactIcon} alt="react" />
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
                                        <img src={jsIcon} alt="javascript" />
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> 
                                        <img src={tsIcon} alt="typescript" />
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="https://nextjs.org/" target="_blank" rel="noreferrer"> 
                                        <img src={nextjsIcon} alt="nextjs" />
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="https://nodejs.org" target="_blank" rel="noreferrer"> 
                                        <img src={nodejsIcon} alt="nodejs" />
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="https://developer.android.com" target="_blank" rel="noreferrer"> 
                                        <img src={androidIcon} alt="android" />
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> 
                                        <img src={mysqlIcon} alt="mysql" />
                                    </a>
                                </div>                                
                                <div className="item">
                                    <a href="https://azure.microsoft.com/" target="_blank" rel="noreferrer"> 
                                        <img src={azureIcon} alt="azure" />
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="https://www.chartjs.org" target="_blank" rel="noreferrer"> 
                                        <img src={chartjsIcon} alt="chartjs" /> 
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="https://mui.com/material-ui/all-components/" target="_blank" rel="noreferrer"> 
                                        <img src={muiIcon} alt="materialui" /> 
                                    </a>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Skills;