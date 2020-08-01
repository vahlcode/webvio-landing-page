import React, { Component } from 'react';
import './App.css';
import Logo from "./Assets/Images/Logo.png";
import DropDown from "./Components/DropDown";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Logos from "./Logos";
import Services from "./Components/Services";
import Featured from "./Components/Featured";
import CardServices from "./Components/CardServices";
import Footer from "./Components/Footer";
import Projects from "./Projects";
import services from "./Services";
import ceoPic from "./Assets/Images/Genevieve.png";
import isInViewPort from "./Assets/Js/isInViewPort";
import FooterLogo from "./Assets/Images/footer-logo.png";
import "./Assets/Icons/icon.css";

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          showMenu: false
      }
  }

  componentDidMount(){
    const top = document.querySelector(".top");
    const Header = document.querySelector("header");
    const MenuButton = document.querySelectorAll(".menu>button");

    document.addEventListener("scroll", (e) => {
      if (!isInViewPort(top)) {
        Header.classList.replace("no-bg", "background")
      } else{
        Header.classList.replace("background", "no-bg")
      }
    })

    for (let i = 0; i < MenuButton.length; i++) {
      MenuButton[i].addEventListener("click", (e) => {
        this.setState({showMenu: !this.state.showMenu})
      })
    }
  }
  render() {
    return (
      <div className="App">
        <DropDown show={this.state.showMenu}/>
        <Header logo={Logo} />
        <div className="top"></div>
        <Hero 
          heading="A creative agency for redemptive brand" 
          subHeading="We are" 
          paragraph="Webvio is a leading strategic design firm that builds powerful digital solutions for startups and enterprises." 
        />
        <Services 
          heading="Strategy. Design  Content. Technology Development"
          paragraph="There’s no secret sauce, no wizard behind the curtain. What makes Aerolab tick is an interdisciplinary team with a framework that fosters candid collaboration."
          ceoComment="With More than 10 Years of Knowledge and Expertise we Design and Code Websites and Apps, We Build Brands and Help Them Succeed"
          subHeading="What we do for you"
          logos={Logos}
          ceoPic={ceoPic}
        />
        <Featured 
          projects={Projects}
          title="We Have Some Awesome Project."
          paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
        />
        <CardServices 
          title="Deation & Evaluation - Best Way to Kick off Your Product Idea"
          services={services}
        />
        <Footer logo={FooterLogo} />
      </div>
    );
  }
}

export default App;
