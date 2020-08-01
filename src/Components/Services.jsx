import React, {Component} from "react";
import "./Services.css";
import UserCard from "./UserCard";

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
    }

    render() {
        return(
            <section className="services">
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
                        <button>
                            Know more about us
                        </button>
                    </div>
                    <div className="ceo-comment">
                        <p className="comment">
                            {this.state.ceoComment}
                        </p>
                        <UserCard 
                            name="Genevieve Rodriquez" 
                            position="Founder & CEO, Webovic" 
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