import React, {Component} from "react";
import "./Featured.css";
import UserCard from "./UserCard";

class Featured extends Component {
    constructor(props) {
        super(props);
        this.state = {
            featuredProjects: props.projects,
            entryTitle: props.title,
            entryParagraph: props.paragraph
        }
    }

    render() {
        return(
            <section className="featured">
                <div className="divider">
                    <div className="divider-inner"></div>
                </div>
                <div className="entry-contents">
                    <h1>
                        {this.state.entryTitle}
                    </h1>
                    <p>
                        {this.state.entryParagraph}
                    </p>
                </div>
                <div className="projects">
                    {
                        this.state.featuredProjects.map((project, index) => (
                            (project.ltr) ?
                            <div className="row" key={index}>
                                <div className="project-text right">
                                    <h1>
                                        {project.title}
                                    </h1>
                                    <p>
                                        {project.description}
                                    </p>
                                    <a href={project.link}><span className="icon icon-mooneye"></span> See case study</a>
                                </div>
                                <div className="project-image right">
                                    <img src={project.image} alt=""/>
                                    <div className="project-comment right">
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
                            </div> :
                            <div className="row" key={index}>
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
                                <p>
                                    {project.description}
                                </p>
                                <a href={project.link}><span className="icon icon-mooneye"></span> See case study</a>
                            </div>
                        </div>
                        ))
                    }
                </div>
            </section>
        )
    }
}

export default Featured;