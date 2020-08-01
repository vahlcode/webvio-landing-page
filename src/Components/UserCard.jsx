import React, { Component } from "react";
import "./User.css";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:  props.name,
            pic: props.pic,
            imgHeight: props.picHeight,
            imgWidth: props.imgWidth,
            position: props.position,
            nameSize: props.nameSize,
            positionSize: props.positionSize
        }
    }

    render() {
        return(
            <div className="user">
                <img src={this.state.pic} style={{height: this.state.picHeight, width: this.state.imgWidth}} alt=""/>
                <div className="user-about">
                    <div className="username" style={{fontSize: this.state.nameSize ? this.state.nameSize : "22px"}}>
                        {this.state.name}
                    </div>
                    <div className="user-position" style={{fontSize: this.state.positionSize ? this.state.positionSize : "16px"}}>
                        {this.state.position}
                    </div>
                </div>
            </div>
        )
    }
}

export default User;