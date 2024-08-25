import { Col } from 'react-bootstrap';

const ProjectCard = ({title, description, imgUrl, linkWeb}) => {

    return (
        <Col sm={6} md={4}>
        <div className="project-imgbox">
            <a href={linkWeb}  target="_blank" rel="noreferrer">
            <img src={imgUrl} alt="Project" width="100" height="100"/>
            <div className="project-info">
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
            </a>
        </div>
        </Col>
    )
}

export default ProjectCard;