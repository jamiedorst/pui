import "./App.css";
import Navbar from "./navbar.js";
import couch1 from "./Assets/couch1.jpg"; // couch image for homepage
import React, { Component } from "react";

class Homepage extends Component {
  render() {
    return (
      <div>
        <header>
          <Navbar cartNum={this.props.cartNum} />
        </header>
        <body>
          {/* background image */}
          <div id="homepageBackground">
            <img
              id="homepageImg"
              src={couch1}
              alt="Red couch with a bright blue Fluff Stuff pillow"
            ></img>
          </div>
          <div id="homepageText">
            {/* text */}
            <div className="subPopText">ADD A</div>
            <div id="popText">POP</div>
            <div className="subPopText">OF COLOR</div>
            <p>With our new Cozy Denim.</p>
            {/* shop now button */}
            <button className="hollowButton">SHOP NOW</button>
          </div>
        </body>
      </div>
    );
  }
}

export default Homepage;
