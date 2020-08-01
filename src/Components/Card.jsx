import React, {Component} from "react";
import "./Card.css";

class Card extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            paragraph: props.paragraph,
            link: props.link
        }
    }

    render() {
        return(
            <div className="card">
                <h3>{this.state.title}</h3>
                <p>{this.state.paragraph}</p>
                <a href={this.state.link}>Read More</a>
            </div>
        )
    }
}

export default Card;