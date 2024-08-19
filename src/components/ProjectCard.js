import { Col } from 'react-bootstrap';

const ProjectCard = ({title, description, imgUrl}) => {

    return (
        <Col sm={6} md={4}>
        <div className="project-imgbox">
            <img src={imgUrl} alt="Project Image" />
            <div className="project-info">
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </div>
        </Col>
    )
}

export default ProjectCard;