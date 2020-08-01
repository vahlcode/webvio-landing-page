import React, {Component} from "react";
import "./Hero.css";

class Hero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heading: props.heading,
            subHeading: props.subHeading,
            paragraph: props.paragraph
        }
    }

    render() {
        return (
            <section className="hero">
                <div className="row">
                    <div className="text">
                        <h5>{this.state.subHeading}</h5>
                        <h1>{this.state.heading}</h1>
                        <p>{this.state.paragraph}</p>
                        <button className="hero-cta">
                            Get in touch
                        </button>
                    </div>
                </div>
            </section>
        )
    }
}

export default Hero;