import React, { Component } from "react";
import UserCard from "../UserCard";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Registering the ScrollTrigger plugin
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger); 
}

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: props.project
        }
        this.Tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".projects",
                start: "center",
                end: "top 100px"
            },
            delay: 0.5
        })
    }

    componentDidMount() {
        const projects = document.querySelector(".projects");
        const projectText = document.querySelectorAll(".project-text>*");
        const projectImage = document.querySelectorAll(".project-image>*");
        
        gsap.to(projects, 0, {css: {visibility: "visible"}});

        const Tl = this.Tl;

        Tl.from(projectText, {x: 1000, opacity: 0, ease: "power3.out", stagger: .3})
        .from(projectImage, {x: 1000, opacity: 0, ease: "power3.out", stagger: .3}, .2)
    }

    render() {
        const project = this.state.project;
        return(
            <div className="row right">
                <div className="project-text right">
                    <h1>
                        {project.title}
                    </h1>
                    <pre>
                        {project.description}
                    </pre>
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
            </div>
        )
    }
}

export default Card;