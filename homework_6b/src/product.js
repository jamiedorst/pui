import "./App.css";
import Navbar from "./navbar.js";
import React, { Component } from "react";

// make banner appear
function showBanner() {
  document.getElementById("bannerDiv").style.display = "flex";
}

function showBannerWish() {
  document.getElementById("bannerDivWish").style.display = "flex";
}

function hideWish() {
  document.getElementById("bannerDivWish").style.display = "none";
}

class Product extends Component {
  render() {
    return (
      <div>
        <header>
          <Navbar cartNum={this.props.cartNum} />
        </header>
        <body>
          <div id="bannerDiv">
            <div id="banner">
              ADDED TO CART &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; ↑
            </div>
          </div>
          <div id="bannerDivWish">
            <div id="bannerWish">
              ADDED TO WISHLIST &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ↑
            </div>
          </div>
          <div className="detailPage">
            {/* left hand side of page -- images */}
            <div className="detailImgs">
              {this.props.currentPhotos.map((jp) => (
                <div key={jp.id}>
                  <img
                    className="detailImg"
                    src={jp}
                    alt="Bright Fluff Stuff pillow"
                  ></img>
                </div>
              ))}
            </div>
            {/* right hand side of page -- text */}
            {/* product purchase info */}
            <div className="detailText">
              <h3>{this.props.name}</h3>
              <h5>{this.props.price}</h5>
              <h6>
                Color:{" "}
                {this.props.defaultColorID[this.props.colorCounter].commonName}
              </h6>
              <div className="pillowOptions">
                {this.props.defaultColorID.map((el) => {
                  return (
                    <div
                      key={el.id}
                      onClick={() => {
                        this.props.HandleColorToggle(el.id);
                      }}
                      className={[
                        "colorOption",
                        el.simpleName,
                        el.expanded ? "selected" : "unselected",
                      ].join(" ")}
                    />
                  );
                })}
              </div>
              <h6>
                Fill: {this.props.defaultFillID[this.props.fillCounter].fill}
              </h6>
              <div className="pillowOptions">
                {this.props.defaultFillID.map((al) => (
                  <div
                    key={al.id}
                    onClick={() => {
                      this.props.HandleFillToggle(al.id);
                    }}
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
              <div className="buttons">
                <button
                  className="filledButton"
                  onClick={() => {
                    this.props.AddToCart(
                      this.props.id,
                      this.props.colorCounter,
                      this.props.fillCounter
                    );
                    showBanner();
                    hideWish();
                  }}
                >
                  ADD TO CART
                </button>
                <button
                  className="filledButtonMinor"
                  onClick={() => {
                    this.props.AddToWish(
                      this.props.id,
                      this.props.colorCounter,
                      this.props.fillCounter
                    );
                    showBannerWish();
                  }}
                >
                  ADD TO WISHLIST
                </button>
              </div>
              {/* product description */}
              <div className="descSection">
                <h6 className="miniHeader">PRODUCT DESCRIPTION</h6>
                <p className="descText">{this.props.description}</p>
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

export default Product;
