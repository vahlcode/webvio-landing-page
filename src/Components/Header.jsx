import React, {Component} from "react";
import "./Header.css";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logo: props.logo
        }
    }

    render() {
        return(
            <header className="no-bg">
                <div className="row">
                    <div className="logo">
                        <img src={this.state.logo} alt=""/>
                    </div>
                    <div className="menu">
                        <button>
                            <span className="icon icon-moonmenu"></span>
                        </button>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;