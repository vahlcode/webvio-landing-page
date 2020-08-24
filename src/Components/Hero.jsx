import React, { Component } from "react";
import "./Hero.css";
import {TweenMax, TimelineLite, Power3} from "gsap";
import isInViewport from "../Assets/Js/isInViewPort";

class Hero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heading: props.heading,
            subHeading: props.subHeading,
            paragraph: props.paragraph
        }
        this.tl = new TimelineLite({paused:true, reversed: true, delay: 0.5});
        this.hero = React.createRef();
    }

    componentDidMount() {
        const tl = this.tl;

        const hero = this.hero.current;

        const h5 = hero.children[0].children[0].children[0];
        const h1 = hero.children[0].children[0].children[1];
        const paragraph = hero.children[0].children[0].children[2];
        const button = hero.children[0].children[0].children[3];
        
        TweenMax.to(hero, 0, {css: {visibility: "visible"}})

        tl.from(h5, 1.2, {opacity: 0, ease: Power3.easeOut})
            .from(h1, 1.2, {y: 1200, x: 1200, ease: Power3.easeOut}, .2)
            .from(paragraph, 1.2, {y: 1200, x: 1200, ease: Power3.easeOut}, .3)
            .from(button, 1.2, {y: 1200, x: 1200, ease: Power3.easeOut}, .4)

        if (isInViewport([h5, h1, paragraph, button]) || tl.reversed()) {
            tl.play();
        } else {
            tl.reverse()
        }
    }

    render() {
        return (
            <section className="hero" ref={this.hero}>
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