import "./App.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <ul id="navUL">
        {/* Fluff Stuff homepage */}
        <li>
          <h1>
            <Link
              style={{ textDecoration: "none" }}
              className="textLink"
              to="/"
            >
              FLUFF STUFF
            </Link>
          </h1>
        </li>
        <div id="navItems">
          {/* Products, about, and cart pages */}
          <li className="navItem">
            <h2>
              <Link style={{ textDecoration: "none" }} to="/Products">
                All Products
              </Link>
            </h2>
          </li>
          <li className="navItem">
            <h2>
              <Link style={{ textDecoration: "none" }} to="/About">
                About Us
              </Link>
            </h2>
          </li>
          <li className="navItem">
            <h2>Cart</h2>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
