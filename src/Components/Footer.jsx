import React, {Component} from "react";
import "./Footer.css";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logo: props.logo
        }
    }

    render() {
        return(
            <footer>
                <div className="footer-cta">
                    <h1 className="cta-title">
                        Let’s make something amazing together.
                    </h1>
                    <a href="#" className="cta-link">LET'S GET STARTED</a>
                </div>
                <div className="contact-details">
                    <div className="contact">
                        <h5>Phone</h5>
                        <p>+32 50 31 28 32</p>
                    </div>
                    <div className="contact">
                        <h5>Address</h5>
                        <p>491 Merlin Crest Suite 963</p>
                    </div>
                </div>
                <div className="lower-contact-details">
                    <div className="links">
                        <div className="link">
                            <h5>SERVICES</h5>
                            <ul>
                                <li>
                                    <a href="#">Strategy Design</a>
                                </li>
                                <li>
                                    <a href="#">Product Design</a>
                                </li>
                                <li>
                                    <a href="#">Content Strategy</a>
                                </li>
                                <li>
                                    <a href="#">Brand Strategy</a>
                                </li>
                                <li>
                                    <a href="#">Development</a>
                                </li>
                            </ul>
                        </div>
                        <div className="link">
                            <h5>HELP AND ADVICE</h5>
                            <ul>
                                <li>
                                    <a href="#">How it Works</a>
                                </li>
                                <li>
                                    <a href="#">Contact Support</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#">FAQ</a>
                                </li>
                            </ul>
                        </div>
                        <div className="link">
                            <h5>COMPANY</h5>
                            <ul>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">Blog</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                                <li>
                                    <a href="#">Jobs</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="info">
                        <h5>GET IN TOUCH</h5>
                        <p>Feel free to get in touch with us vai email</p>
                        <h3>info.webovio@gmail.com</h3>
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
                <div className="inner-footer">
                    <div className="logo">
                        <img src={this.state.logo} alt=""/>
                    </div>
                    <div className="copyright">
                        © 2020@webovio. All Rights Reserved.
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;