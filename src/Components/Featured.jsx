import React, {Component} from "react";
import "./Featured.css";
import LeftAlignCard from "./Left Align/Card";
import RightAlignCard from "./Right Align/Card";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Registering the ScrollTrigger plugin
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger); 
}

class Featured extends Component {
    constructor(props) {
        super(props);
        this.state = {
            featuredProjects: props.projects,
            entryTitle: props.title,
            entryParagraph: props.paragraph
        }
        this.featured = React.createRef();
        this.Tl = gsap.timeline( {
            scrollTrigger: {
                trigger: ".featured",
                start: "top 50%"
            }});
    }

    componentDidMount() {
        const featured = this.featured.current;
        const entryHeading = featured.querySelector(".entry-contents h1");
        const entryParagraph = featured.querySelector(".entry-contents p"); 

        console.log(entryHeading);

        gsap.to(featured, 0, {css: {visibility: "visible"}});

        const Tl = this.Tl;

        Tl.from(entryHeading, 1.2, {x: 100, opacity: 0, ease: "power3.out"})
        .from(entryParagraph, 1.2, {x: 100, opacity: 0, ease: "power3.out"}, .2)
    }

    render() {
        return(
            <section className="featured" ref={this.featured}>
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
                            <LeftAlignCard project={project} key={index}/> :
                            <RightAlignCard project={project} key={index}/>
                        ))
                    }
                </div>
            </section>
        )
    }
}

export default Featured;