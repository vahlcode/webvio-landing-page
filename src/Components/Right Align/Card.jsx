import React, { Component } from "react";
import UserCard from "../UserCard";

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: props.project
        }
    }

    render() {
        const project = this.state.project;
        return(
            <div className="row">
                <div className="project-image left">
                    <img src={project.image} alt=""/>
                    <div className="project-comment left">
                        <p>
                            {project.comment.comment}
                        </p>
                        <UserCard 
                            name={project.comment.clientName}
                            position={project.comment.clientPosition}
                            pic={project.comment.clientPic}
                            imgHeight="46px"
                            imgWidth="46px"
                            nameSize="16px"
                            positionSize="14px"
                        />
                    </div>
                </div>
                <div className="project-text left">
                    <h1>
                        {project.title}
                    </h1>
                    <pre>
                        {project.description}
                    </pre>
                    <a href={project.link}><span className="icon icon-mooneye"></span> See case study</a>
                </div>
            </div>
        )
    }
}

export default Card;