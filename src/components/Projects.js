import { Container, Col, Row, Nav, Tab } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import projectImg1 from "../assets/img/project-img1.png";
import projectImg2 from "../assets/img/project-img2.png";
import projectImg3 from "../assets/img/project-img3.png";

const Projects = () => {

    const projects = [
        {
            title: 'Project 1',
            description: 'This is a project description',
            imgUrl: projectImg1,
        },
        {
            title: 'Project 2',
            description: 'This is a project description',
            imgUrl: projectImg2,
        },
        {
            title: 'Project 3',
            description: 'This is a project description',
            imgUrl: projectImg3,
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
                                <Nav.Link eventKey="first">Full-stack Application</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Mac Games</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Android Application</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return (
                                                <ProjectCard 
                                                    key={index}
                                                    title={project.title}
                                                    description={project.description}
                                                    imgUrl={project.imgUrl}
                                                    />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">Second Tab</Tab.Pane>
                            <Tab.Pane eventKey="third">Third Tab</Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp2} alt="Background Image" className="background-image-right"/>
        </section>
    )
}

export default Projects;