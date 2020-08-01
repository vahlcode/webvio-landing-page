import React, {Component} from "react";
import "./DropDown.css";

class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: props.show
        }
    }

    componentWillReceiveProps() {
        this.setState({...this.state, show: this.props.show})
    }

    render() {
        return(
            <section className="drop-down" style={{transform: this.state.show ? "translateX(0)" : "translateX(-100%)", transition: ".5s"}}>
                <div className="menu">
                    <button>
                        <span className="icon icon-mooncross"></span>
                    </button>
                </div>
                <div className="row">
                    <div className="links">
                        <ul>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Services</a>
                            </li>
                            <li>
                                <a href="#">Projects</a>
                            </li>
                            <li>
                                <a href="#">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="info">
                        <h5>GET IN TOUCH</h5>
                        <h1>
                            info.webovio@gmail.com
                        </h1>
                        <ul>
                            <li>
                                <a href=""><span className="icon icon-moonfacebook"></span></a>
                            </li>
                            <li>
                                <a href=""><span className="icon icon-mooninstagram"></span></a>
                            </li>
                            <li>
                                <a href=""><span className="icon icon-moontwitter"></span></a>
                            </li>
                            <li>
                                <a href=""><span className="icon icon-moonlinkedin"></span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}

export default DropDown;