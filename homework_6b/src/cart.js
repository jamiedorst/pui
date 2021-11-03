import "./App.css";
import Navbar from "./navbar.js";

import React, { Component } from "react";

class Cart extends Component {
  render() {
    return (
      <div>
        <header>
          <Navbar cartNum={this.props.cartNum} />
        </header>
        <body>
          <div className="cartTop">
            <h3>Cart</h3>
            <div id="cartPage">
              {/* left hand side of page */}
              <div className="items">
                {this.props.cartItems.map((item) => (
                  <div className="cartLeft" key={item.itNum}>
                    <img
                      className="cartImg"
                      src={item.photo}
                      alt="Bright Fluff Stuff pillow"
                    ></img>
                    <div className="cartLeftInfo">
                      <h4 className="miniMarg">{item.name}</h4>
                      <h5>{item.price}</h5>
                      <div className="productChoices">
                        <h6 className="miniMarg">Color: {item.color}</h6>
                        <h6 className="miniMarg">Fill: {item.fill}</h6>
                      </div>
                      <div
                        className="miniLink remCart"
                        onClick={() => {
                          this.props.RemoveFromCart(item.itNum);
                        }}
                      >
                        Remove from cart
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* right hand side of page -- text */}
              <div id="cartSect">
                <div id="cartLine" />
                <div className="cartRight">
                  <div id="cartText">
                    <h4 className="miniMarg">ORDER SUMMARY</h4>
                    <div className="numberRow">
                      <h5>Subtotal</h5>
                      <h5>${this.props.totalPrice}</h5>
                    </div>
                    <div className="numberRow">
                      <h5>Shipping estimate</h5>
                      <h5>Free</h5>
                    </div>
                    <div className="numberRow">
                      <h5>Tax estimate</h5>
                      <h5>${(this.props.totalPrice * 0.0634).toFixed(2)}</h5>
                    </div>
                    <div className="numberRow" id="totalRow">
                      <h5>ESTIMATED TOTAL</h5>
                      <h5>
                        $
                        {(
                          this.props.totalPrice +
                          this.props.totalPrice * 0.0634
                        ).toFixed(2)}
                      </h5>
                    </div>
                  </div>
                  <button className="filledButton" id="checkout">
                    CHECKOUT
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* WISHLIST */}
          <hr className="divider" />
          <div className="wishlist">
            <h3>Wishlist</h3>
            {/* left hand side of page */}
            <div className="wishItems">
              {this.props.wishItems.map((item) => (
                <div className="cartLeft" key={item.itNum}>
                  <img
                    className="cartImg"
                    src={item.photo}
                    alt="Bright Fluff Stuff pillow"
                  ></img>
                  <div className="cartLeftInfo">
                    <h4 className="miniMarg">{item.name}</h4>
                    <h5>{item.price}</h5>
                    <div className="productChoices">
                      <h6 className="miniMarg">Color: {item.color}</h6>
                      <h6 className="miniMarg">Fill: {item.fill}</h6>
                    </div>
                    <button
                      className="filledButton"
                      onClick={() => {
                        this.props.RemoveFromWish(item.itNum);
                        this.props.AddToCart(
                          item.id,
                          this.props.colorCounter,
                          this.props.fillCounter
                        );
                      }}
                    >
                      ADD TO CART
                    </button>
                    <div
                      className="miniLink remCart"
                      onClick={() => {
                        this.props.RemoveFromWish(item.itNum);
                      }}
                    >
                      Remove from wishlist
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </body>
      </div>
    );
  }
}

export default Cart;
