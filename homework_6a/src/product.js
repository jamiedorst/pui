import "./App.css";
import Navbar from "./navbar.js";
import couch1 from "./Assets/couch1.png";
import couch2 from "./Assets/couch2.png";
import couch3 from "./Assets/couch3.png";
import couch4 from "./Assets/couch4.png";
import couch1Y from "./Assets/couch1Y.png";
import couch2Y from "./Assets/couch2Y.png";
import couch3Y from "./Assets/couch3Y.png";
import couch4Y from "./Assets/couch4Y.png";
import couch1W from "./Assets/couch1W.png";
import couch2W from "./Assets/couch2W.png";
import couch3W from "./Assets/couch3W.png";
import couch4W from "./Assets/couch4W.png";
import couch1B from "./Assets/couch1B.png";
import couch2B from "./Assets/couch2B.png";
import couch3B from "./Assets/couch3B.png";
import couch4B from "./Assets/couch4B.png";
import bed1 from "./Assets/bed1.png";
import bed1Y from "./Assets/bed1Y.png";
import bed1W from "./Assets/bed1W.png";
import bed1B from "./Assets/bed1B.png";
import round1 from "./Assets/round1.png";
import round1Y from "./Assets/round1Y.png";
import round1W from "./Assets/round1W.png";
import round1B from "./Assets/round1B.png";
import pouf1 from "./Assets/pouf1.png";
import pouf1Y from "./Assets/pouf1Y.png";
import pouf1W from "./Assets/pouf1W.png";
import pouf1B from "./Assets/pouf1B.png";

import React, { Component } from "react";

// banner appearing once user adds something to cart
function CartBanner() {
  return (
    <div id="banner">
      ADDED TO CART &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ↑
    </div>
  );
}

const Images = [
  [
    // Realistically there would be more images, but
    // for the purposes of this assignment
    // there is one per product per color, shown 4 times
    [couch1, couch2, couch3, couch4],
    [bed1, bed1, bed1, bed1],
    [round1, round1, round1, round1],
    [pouf1, pouf1, pouf1, pouf1],
  ],
  [
    [couch1Y, couch2Y, couch3Y, couch4Y],
    [bed1Y, bed1Y, bed1Y, bed1Y],
    [round1Y, round1Y, round1Y, round1Y],
    [pouf1Y, pouf1Y, pouf1Y, pouf1Y],
  ],
  [
    [couch1W, couch2W, couch3W, couch4W],
    [bed1W, bed1W, bed1W, bed1W],
    [round1W, round1W, round1W, round1W],
    [pouf1W, pouf1W, pouf1W, pouf1W],
  ],
  [
    [couch1B, couch2B, couch3B, couch4B],
    [bed1B, bed1B, bed1B, bed1B],
    [round1B, round1B, round1B, round1B],
    [pouf1B, pouf1B, pouf1B, pouf1B],
  ],
];

// all product color options
const Colors = [
  {
    id: 0,
    commonName: "Cozy Denim",
    simpleName: "blue",
    expanded: true,
    images: Images[0],
  },
  {
    id: 1,
    commonName: "After School Special",
    simpleName: "yellow",
    expanded: false,
    images: Images[1],
  },
  {
    id: 2,
    commonName: "Rainy Day",
    simpleName: "white",
    expanded: false,
    images: Images[2],
  },
  {
    id: 3,
    commonName: "Morning Haze",
    simpleName: "brown",
    expanded: false,
    images: Images[3],
  },
];

const defaultColorID = Colors[0];
const defaultFillID = "Select a fill";

// all product fill options
const Fills = [
  {
    id: 0,
    fill: "Duck Down",
    expanded: true,
  },
  {
    id: 1,
    fill: "Memory Foam",
    expanded: false,
  },
  {
    id: 2,
    fill: "Hypoallergenic Poly-Blend",
    expanded: false,
  },
];

// all products
const ProductList = [
  {
    id: 0,
    defaultColorID: defaultColorID,
    name: "Couch Pillow",
    defaultFillID: defaultFillID,
    price: "$89",
    description:
      "Delicately fabricated, our signature Couch Pillow will make your living room more inviting than ever. Our beautiful colors will complement any room and bring out the natural beauty of your decor.",
  },
  {
    id: 1,
    defaultColorID: defaultColorID,
    name: "Bed Pillow",
    defaultFillID: defaultFillID,
    price: "$99",
    description:
      "Delicately fabricated, our signature Bed Pillow will make your bedroom more inviting than ever. Our beautiful colors will complement any room and bring out the natural beauty of your decor.",
  },
  {
    id: 2,
    defaultColorID: defaultColorID,
    name: "Round Pillow",
    defaultFillID: defaultFillID,
    price: "$59",
    description:
      "Delicately fabricated, our signature Round Pillow will make any room more inviting than ever. Our beautiful colors will complement any room and bring out the natural beauty of your decor.",
  },
  {
    id: 3,
    defaultColorID: defaultColorID,
    name: "Floor Pouf Pillow",
    defaultFillID: defaultFillID,
    price: "$109",
    description:
      "Delicately fabricated, our signature Floor Pouf Pillow will make any room more inviting than ever. Our beautiful colors will complement any room and bring out the natural beauty of your decor.",
  },
];

// setting initial state
export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ProductList[props.id],
      defaultColorID: Colors,
      defaultFillID: Fills,
      price: ProductList[props.price],
      name: ProductList[props.name],
      colorCounter: 0,
      fillCounter: 0,
      cartItems: null,
    };
  }

  // change color name and images based on which color is selected
  handleColorToggle = (id) => {
    const newColors = this.state.defaultColorID.map((button) => {
      if (button.id === id && button.expanded === false) {
        return {
          ...button,
          expanded: true,
        };
      }
      if (button.expanded === true && button.id !== id) {
        return {
          ...button,
          expanded: false,
        };
      } else {
        return button;
      }
    });
    this.setState({
      ...this.state,
      defaultColorID: newColors,
      colorCounter: id,
    });
  };

  // update fill name based on which fill is selected
  handleFillToggle = (id) => {
    const newFill = this.state.defaultFillID.map((button) => {
      if (button.id === id && button.expanded === false) {
        return {
          ...button,
          expanded: true,
        };
      }
      if (button.expanded === true && button.id !== id) {
        return {
          ...button,
          expanded: false,
        };
      } else {
        return button;
      }
    });
    this.setState({
      ...this.state,
      defaultFillID: newFill,
      fillCounter: id,
    });
  };

  // change number of items in cart
  addToCart = () => {
    this.setState({
      cartItems: this.state.cartItems + 1,
    });
  };

  // make banner appear
  showBanner = () => {
    document.getElementById("bannerDiv").style.display = "flex";
  };

  render() {
    return (
      <div>
        <header>
          <Navbar addToCart={this.state.cartItems} />
        </header>
        <body>
          <div id="bannerDiv">
            <CartBanner />
          </div>
          <div className="detailPage">
            {/* left hand side of page -- images */}
            <div className="detailImgs">
              <img
                className="detailImg"
                src={
                  this.state.defaultColorID[this.state.colorCounter].images[
                    this.props.id
                  ][0]
                }
                alt="Bright Fluff Stuff pillow"
              ></img>
              <img
                className="detailImg"
                src={
                  this.state.defaultColorID[this.state.colorCounter].images[
                    this.props.id
                  ][1]
                }
                alt="Bright Fluff Stuff pillow"
              ></img>
              <img
                className="detailImg"
                src={
                  this.state.defaultColorID[this.state.colorCounter].images[
                    this.props.id
                  ][2]
                }
                alt="Bright Fluff Stuff pillow"
              ></img>
              <img
                className="detailImg"
                src={
                  this.state.defaultColorID[this.state.colorCounter].images[
                    this.props.id
                  ][3]
                }
                alt="Bright Fluff Stuff pillow"
              ></img>
            </div>
            {/* right hand side of page -- text */}
            {/* product purchase info */}
            <div className="detailText">
              <h3>{ProductList[this.props.id].name}</h3>
              <h5>{ProductList[this.props.id].price}</h5>
              <h6>
                Color:{" "}
                {this.state.defaultColorID[this.state.colorCounter].commonName}
              </h6>
              <div className="pillowOptions">
                {this.state.defaultColorID.map((el) => (
                  <div
                    key={el.id}
                    onClick={() => this.handleColorToggle(el.id)}
                    className={[
                      "colorOption",
                      el.simpleName,
                      el.expanded ? "selected" : "unselected",
                    ].join(" ")}
                  />
                ))}
              </div>
              <h6>
                Fill: {this.state.defaultFillID[this.state.fillCounter].fill}
              </h6>
              <div className="pillowOptions">
                {this.state.defaultFillID.map((al) => (
                  <div
                    key={al.id}
                    onClick={() => this.handleFillToggle(al.id)}
                    className={[
                      "fillOption",
                      al.expanded ? "selected" : "unselected",
                    ].join(" ")}
                  >
                    {al.fill}
                  </div>
                ))}
              </div>
              <div className="miniLink">What fill should I get?</div>
              <button
                className="filledButton"
                onClick={() => {
                  this.addToCart();
                  this.showBanner();
                }}
              >
                ADD TO CART
              </button>
              {/* product description */}
              <div className="descSection">
                <h6 className="miniHeader">PRODUCT DESCRIPTION</h6>
                <p className="descText">
                  {ProductList[this.props.id].description}
                </p>
                <ul className="descList">
                  <li>
                    <p className="descBullet">Handmade in Pittsburgh, PA</p>
                  </li>
                  <li>
                    <p className="descBullet">On-seam closure</p>
                  </li>
                  <li>
                    <p className="descBullet">Knife-edge tailoring</p>
                  </li>
                  <li>
                    <p className="descBullet">Yarn-dyed with reactive dyes</p>
                  </li>
                </ul>
              </div>
              {/* care instructions */}
              <div className="descSection">
                <h6 className="miniHeader">CARE INSTRUCTIONS</h6>
                <ul className="descList">
                  <li>
                    <p className="descBullet">Hand wash only in warm water</p>
                  </li>
                  <li>
                    <p className="descBullet">Hang to dry</p>
                  </li>
                  <li>
                    <p className="descBullet">Do not dry clean</p>
                  </li>
                  <li>
                    <p className="descBullet">Do not bleach</p>
                  </li>
                  <li>
                    <p className="descBullet">Low iron as needed</p>
                  </li>
                </ul>
              </div>
              {/* shipping and returns info */}
              <div className="descSection">
                <h6 className="miniHeader">SHIPPING AND RETURNS</h6>
                <p className="descText">
                  Free standard shipping on this item anywhere within the
                  contingent United States. Estimated delivery time is within
                  1-4 business days. Upgradde to express shipping to receive
                  within 1-2 business days. Free returns accepted within 30
                  days.
                </p>
              </div>
              {/* reviews */}
              <div className="descSection">
                <div className="starSection reviewSect">
                  <h6 className="miniHeader">REVIEWS</h6>
                  {/* overall star rating */}
                  <div className="stars">
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                  </div>
                  <h6 className="miniHeader">4.1</h6>
                </div>
                <div className="starSection">
                  <h6 className="miniHeader">Jennifer S.</h6>
                  <div className="stars">
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                  </div>
                </div>
                <p className="descText">
                  I love this pillow! It's super soft and makes my couch look so
                  much more luxurious than it is. I'm going to buy one in every
                  color!
                </p>
                <div className="starSection">
                  <h6 className="miniHeader">James R.</h6>
                  <div className="stars">
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                  </div>
                </div>
                <p className="descText">
                  This pillow is awesome! The quality is really good and I like
                  to support small businesses. I had to remove a star because I
                  find it difficult to wash. A pillow that I could just toss in
                  the washer would be great.
                </p>
                <div className="starSection">
                  <h6 className="miniHeader">Julie B.</h6>
                  <div className="stars">
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                  </div>
                </div>
                <p className="descText">
                  I love my new couch pillow. Thank you Fluff Stuff. Sadly
                  shipping took much longer than expected.
                </p>
                <div className="centerButton">
                  <button className="filledButtonMinor">LOAD MORE</button>
                </div>
              </div>
            </div>
          </div>
        </body>
      </div>
    );
  }
}
