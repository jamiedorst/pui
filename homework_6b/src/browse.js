import "./App.css";
import Navbar from "./navbar.js";
import { Link } from "react-router-dom";
import couchImg from "./Assets/couch.jpg"; // couch image for product page
import bedImg from "./Assets/bed.jpg"; // bed image for product page
import roundImg from "./Assets/round.jpg"; // round image for product page
import poufImg from "./Assets/pouf.jpg"; // floor pouf image for product page
import React, { Component } from "react";

class Browse extends Component {
  render() {
    return (
      <div>
        <header>
          <Navbar cartNum={this.props.cartNum} />
        </header>
        <body>
          {/* header text */}
          <div>
            <h3>All Products</h3>
            <p>
              All of our hand-made pillows come in your choice of four beautiful
              colors and three luxurious fills.
            </p>
          </div>
          {/* images and captions */}
          <div id="browseImgs">
            {/* couch pillow */}
            <div className="browseItem">
              <Link
                style={{ textDecoration: "none" }}
                className="textLink"
                to="/CouchPillow"
              >
                <img
                  className="browseImg"
                  src={couchImg}
                  alt="Gray couch showing off Fluff Stuff couch pillows"
                ></img>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                className="textLink"
                to="/CouchPillow"
              >
                <h4>Couch Pillow</h4>
              </Link>
              <h5>$89</h5>
            </div>
            {/* bed pillow */}
            <div className="browseItem">
              <Link
                style={{ textDecoration: "none" }}
                className="textLink"
                to="/BedPillow"
              >
                <img
                  className="browseImg"
                  src={bedImg}
                  alt="Cozy bed showing off Fluff Stuff bed pillows"
                ></img>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                className="textLink"
                to="/BedPillow"
              >
                <h4>Bed Pillow</h4>
              </Link>
              <h5>$99</h5>
            </div>
            {/* round pillow */}
            <div className="browseItem">
              <Link
                style={{ textDecoration: "none" }}
                className="textLink"
                to="/RoundPillow"
              >
                <img
                  className="browseImg"
                  src={roundImg}
                  alt="White round Fluff Stuff pillow"
                ></img>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                className="textLink"
                to="/RoundPillow"
              >
                <h4>Round Pillow</h4>
              </Link>
              <h5>$59</h5>
            </div>
            {/* floor pouf pillow */}
            <div className="browseItem">
              <Link
                style={{ textDecoration: "none" }}
                className="textLink"
                to="/FloorPoufPillow"
              >
                <img
                  className="browseImg"
                  src={poufImg}
                  alt="Brown Fluff Stuff floor pouf"
                ></img>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                className="textLink"
                to="/FloorPoufPillow"
              >
                <h4>Floor Pouf Pillow</h4>
              </Link>
              <h5>$109</h5>
            </div>
          </div>
        </body>
      </div>
    );
  }
}

export default Browse;
