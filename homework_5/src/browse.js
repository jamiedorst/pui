import "./App.css";
import Navbar from "./navbar.js";
import { Link } from "react-router-dom";
import couchImg from "./Assets/couch.png"; // couch image for product page
import bedImg from "./Assets/bed.png"; // bed image for product page
import roundImg from "./Assets/round.png"; // round image for product page
import poufImg from "./Assets/pouf.png"; // floor pouf image for product page

function Browse(props) {
  return (
    <div>
      <header>
        <Navbar />
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
            <Link
              style={{ textDecoration: "none" }}
              className="textLink"
              to="/CouchPillow"
            >
              <h5>$89</h5>
            </Link>
          </div>
          {/* bed pillow */}
          <div className="browseItem">
            <img
              className="browseImg"
              src={bedImg}
              alt="Cozy bed showing off Fluff Stuff bed pillows"
            ></img>
            <h4>Bed Pillow</h4>
            <h5>$99</h5>
          </div>
          {/* round pillow */}
          <div className="browseItem">
            <img
              className="browseImg"
              src={roundImg}
              alt="White round Fluff Stuff pillow"
            ></img>
            <h4>Round Pillow</h4>
            <h5>$59</h5>
          </div>
          {/* floor pouf pillow */}
          <div className="browseItem">
            <img
              className="browseImg"
              src={poufImg}
              alt="Brown Fluff Stuff floor pouf"
            ></img>
            <h4>Floor Pouf Pillow</h4>
            <h5>$109</h5>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Browse;
