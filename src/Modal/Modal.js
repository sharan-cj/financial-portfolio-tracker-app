import React, { Component } from "react";
import "./Modal.css";

class Modal extends Component {
  constructor(props) {
    
    super(props);
  }
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
