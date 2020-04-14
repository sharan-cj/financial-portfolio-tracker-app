import React, { Component } from "react";
import "./Modal.css";

class Modal extends Component {
 
  render() {
    return (
      <>
        <div className="Modal"></div>
        
        {this.props.content}
        
      </>
    );
  }
}

export default Modal;
