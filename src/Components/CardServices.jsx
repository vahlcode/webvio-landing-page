import React, {Component} from "react";
import "./CardServices.css";
import Card from "./Card";

class CardServices extends Component{
    constructor(props) {
        super(props);
        this.state = {
            entryTitle: props.title,
            services: props.services
        }
    }

    render() {
        return(
            <section className="card-services">
                <div className="divider">
                    <div className="divider-inner"></div>
                </div>
                <div className="entry-title">
                    <h1>
                        {this.state.entryTitle}
                    </h1>
                </div>
                <div className="cards">
                    {
                        this.state.services.map((service, index) => (
                            <Card title={service.title} paragraph={service.paragraph} link={service.link} key={index} />
                        ))
                    }
                </div>
            </section>
        )
    }
}

export default CardServices;