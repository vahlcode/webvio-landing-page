import React, {Component} from "react";
import "./Services.css";
import UserCard from "./UserCard";
import {gsap, TweenMax, TimelineLite, Power3} from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logos: props.logos,
            heading: props.heading,
            paragraph: props.paragraph,
            subHeading: props.subHeading,
            ceoComment: props.ceoComment,
            ceoPic: props.ceoPic
        }
        this.services = React.createRef();
        this.tl = new TimelineLite()
    }

    componentDidMount() {
        const services = this.services.current;
        const brands = services.children[0].querySelectorAll(".logo");
        const leftText = services.children[1].children[0].querySelectorAll("*");
        const ceoComment = services.children[1].children[1].querySelectorAll("*");
        
        TweenMax.to(services, 0, {css: {visibility: "visible"}});

        const Tl = this.tl;

        // Registering the ScrollTrigger plugin
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger); 
        }  

        Tl.from(brands, {x: 1000, opacity: 0, ease: Power3.easeOut, stagger: .3})
            .from(leftText, {x: 1000, opacity: 0, ease: Power3.easeOut, stagger: .3}, .2)
            .from(ceoComment, {x: 1000, opacity: 0, ease: Power3.easeOut, stagger: .3}, .4)

        // Initializing the ScrollTrigger plugin
        ScrollTrigger.create({
            trigger: ".services",
            animation: Tl,
            start: "top center",
            end: "top 100px"
          })
    }

    render() {
        return(
            <section className="services" ref={this.services}>
                <div className="brands">
                    {
                    (this.state.logos) ? 
                    this.state.logos.map((logo, index) => (
                        <div className="logo" key={index}>
                            <img src={logo} alt=""/>
                        </div>
                    )) :
                    ""
                    }
                </div>
                <div className="row">
                    <div className="left-text">
                        <h5>
                            {this.state.subHeading}
                        </h5>
                        <h1>
                            {this.state.heading}
                        </h1>
                        <p>
                            {this.state.paragraph}
                        </p>
                        <a href="">
                            Know more about us
                        </a>
                    </div>
                    <div className="ceo-comment">
                        <p className="comment">
                            {this.state.ceoComment}
                        </p>
                        <UserCard 
                            name="Genevieve Rodriquez" 
                            position="Founder & CEO, Webovio" 
                            pic={this.state.ceoPic}
                            imgHeight="90px"
                            imgWidth="90px"
                        />
                    </div>
                </div>
            </section>
        )
    }
}

export default Services;