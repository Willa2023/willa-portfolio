import { Container, Col, Row, Nav, Tab } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import snackshop from "../assets/img/snackshopstock.png";
import birdwood from "../assets/img/newBirdwood.png";
import encryption from "../assets/img/encrypt-MainPage copy.png";
import mevoMap from "../assets/img/androidMap.png";
import animalMatchingGame from "../assets/img/AnimalMatching.png";
import bugworld from "../assets/img/bugworld2.png";

const Projects = () => {

    const webProjects = [
        {
            title: 'Snack Shop',
            description: 'Snack purchasing for clients, and management with AI assistance for admins.',
            imgUrl: snackshop,
            linkWeb: 'https://snackshopfrontend.z8.web.core.windows.net/',
        },
        {
            title: 'Birdwood Reserve',
            description: 'Donation for Birdwood Reserve Environmental Project.',
            imgUrl: birdwood,
            linkWeb: 'https://www.birdwoodreserve.com',
        },
        {
            title: 'Encryption',
            description: 'Securely encrypt and decrypt messages.',
            imgUrl: encryption,
            linkWeb: 'https://github.com/Willa2023/Encrypt-Decrypt',
        },
    ]

    const mobileProjects = [
        {
            title: 'Mevo Map',
            description: 'Retrieve vehicle positions, park zones from Mevo public API.',
            imgUrl: mevoMap,
            linkWeb: 'https://github.com/Willa2023/Mevo',
        },
        {
            title: 'Bug World Game',
            description: 'Bee eats flower, worm eats grass, spider eats worm',
            imgUrl: bugworld,
            linkWeb: 'https://github.com/Willa2023/bugworld',
        },
        {
            title: 'Animal Matching Game',
            description: 'Matching animal images to win!',
            imgUrl: animalMatchingGame,
            linkWeb: 'https://github.com/Willa2023/AnimalMatchingGame',
        },
    ]

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>Here are some of the projects I have worked on</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Advanced Application</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">lightweight Application</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>x
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        webProjects.map((project, index) => {
                                            return (
                                                <ProjectCard 
                                                    key={index}
                                                    title={project.title}
                                                    description={project.description}
                                                    imgUrl={project.imgUrl}
                                                    linkWeb={project.linkWeb}
                                                    />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Row>
                                    {
                                        mobileProjects.map((project, index) => {
                                            return (
                                                <ProjectCard 
                                                    key={index}
                                                    title={project.title}
                                                    description={project.description}
                                                    imgUrl={project.imgUrl}
                                                    linkWeb={project.linkWeb}
                                                    />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp2} alt="Background" className="background-image-right"/>
        </section>
    )
}

export default Projects;