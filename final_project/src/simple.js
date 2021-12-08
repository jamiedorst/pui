import "./App.css";
import React, { Component } from "react";

class SimpleFan extends Component {
  render() {
    return (
      <div className="fan">
        <div className="fanText">
          <div className="starter">
            <h4 className="fanName">{this.props.name}</h4>
            <p>{this.props.description}</p>
          </div>
          <h6>{this.props.points}</h6>
        </div>
        <h5>{this.props.exclusions}</h5>
      </div>
    );
  }
}

export default SimpleFan;
