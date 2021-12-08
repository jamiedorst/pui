import "./App.css";
import Navbar from "./navbar.js";
import jump from "./Assets/jump.jpg"; // jumping image
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <body>
        {/* background image */}
        <div id="aboutBackground">
          <img
            id="aboutImg"
            src={jump}
            alt="Person jumping for joy over a couch and pillows"
          ></img>
        </div>
        {/* text */}
        <div id="aboutText">
          <h3>About Us</h3>
          <div id="miniPopText">
            Beautifully made pillows. Exceptional Quality. For every home.
          </div>
          <p>
            Here at Fluff Stuff, we create pillows that give your home a new
            sense of comfort. We want you to jump for joy when you receive our
            products! We handmake everything local in Pittsburgh, Pennsylvania.
            Our company is devoted to meeting a high standard of execution and
            service for our customers. Thank you for visiting and please reach
            out with questions!
          </p>
          <div id="aboutButtons">
            <Link
              style={{ textDecoration: "none" }}
              className="textLink"
              to="/FAQs"
            >
              <button className="filledButtonMinor aboutButton">FAQs</button>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              className="textLink"
              to="/Contact"
            >
              <button className="filledButtonMinor aboutButton">
                CONTACT US
              </button>
            </Link>
          </div>
        </div>
      </body>
    </div>
  );
}

export default About;
