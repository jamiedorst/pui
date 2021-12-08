import "./App.css";
import Homepage from "./homepage.js";
import Browse from "./browse.js";
import Product from "./product.js";
import About from "./about.js";
import Faq from "./faq.js";
import Contact from "./contact.js";
import Cart from "./cart.js";
import couch1 from "./Assets/couch1.jpg";
import couch2 from "./Assets/couch2.jpg";
import couch3 from "./Assets/couch3.jpg";
import couch4 from "./Assets/couch4.jpg";
import couch1Y from "./Assets/couch1Y.jpg";
import couch2Y from "./Assets/couch2Y.jpg";
import couch3Y from "./Assets/couch3Y.jpg";
import couch4Y from "./Assets/couch4Y.jpg";
import couch1W from "./Assets/couch1W.jpg";
import couch2W from "./Assets/couch2W.jpg";
import couch3W from "./Assets/couch3W.jpg";
import couch4W from "./Assets/couch4W.jpg";
import couch1B from "./Assets/couch1B.jpg";
import couch2B from "./Assets/couch2B.jpg";
import couch3B from "./Assets/couch3B.jpg";
import couch4B from "./Assets/couch4B.jpg";
import bed1 from "./Assets/bed1.jpg";
import bed1Y from "./Assets/bed1Y.jpg";
import bed1W from "./Assets/bed1W.jpg";
import bed1B from "./Assets/bed1B.jpg";
import round1 from "./Assets/round1.jpg";
import round1Y from "./Assets/round1Y.jpg";
import round1W from "./Assets/round1W.jpg";
import round1B from "./Assets/round1B.jpg";
import pouf1 from "./Assets/pouf1.jpg";
import pouf1Y from "./Assets/pouf1Y.jpg";
import pouf1W from "./Assets/pouf1W.jpg";
import pouf1B from "./Assets/pouf1B.jpg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Component } from "react";

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
    name: "Couch Pillow",
    price: "$89",
    description:
      "Delicately fabricated, our signature Couch Pillow will make your living room more inviting than ever. Our beautiful colors will complement any room and bring out the natural beauty of your decor.",
  },
  {
    id: 1,
    name: "Bed Pillow",
    price: "$99",
    description:
      "Delicately fabricated, our signature Bed Pillow will make your bedroom more inviting than ever. Our beautiful colors will complement any room and bring out the natural beauty of your decor.",
  },
  {
    id: 2,
    name: "Round Pillow",
    price: "$59",
    description:
      "Delicately fabricated, our signature Round Pillow will make any room more inviting than ever. Our beautiful colors will complement any room and bring out the natural beauty of your decor.",
  },
  {
    id: 3,
    name: "Floor Pouf Pillow",
    price: "$109",
    description:
      "Delicately fabricated, our signature Floor Pouf Pillow will make any room more inviting than ever. Our beautiful colors will complement any room and bring out the natural beauty of your decor.",
  },
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultColorID: Colors,
      defaultFillID: Fills,
      colorCounter: 0,
      fillCounter: 0,
      cartItems: [],
      wishItems: [],
      color: null,
      fill: null,
      itNum: 0,
      totalPrice: 0,
    };
  }

  // change color name and images based on which color is selected
  HandleColorToggle = (id) => {
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
  HandleFillToggle = (id) => {
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
  AddToCart = (id, idC, idF) => {
    const newPur = {
      ...ProductList[id],
      color: this.state.defaultColorID[idC].commonName,
      fill: this.state.defaultFillID[idF].fill,
      photo: Images[this.state.colorCounter][id][0],
      itNum: this.state.itNum,
    };
    this.setState({
      cartItems: [...this.state.cartItems, newPur],
      itNum: this.state.itNum + 1,
      totalPrice:
        this.state.totalPrice + parseInt(newPur.price.replace("$", "")),
    });
  };

  RemoveFromCart = (ipo) => {
    const revisedCart = this.state.cartItems.filter(
      (item) => item.itNum !== ipo
    );
    const remItemAr = this.state.cartItems.filter((item) => item.itNum === ipo);
    const remItem = remItemAr[0];
    this.setState({
      ...this.state,
      cartItems: revisedCart,
      totalPrice:
        this.state.totalPrice - parseInt(remItem.price.replace("$", "")),
    });
  };

  // change number of items in wishlist
  AddToWish = (id, idC, idF) => {
    const newPur = {
      ...ProductList[id],
      color: this.state.defaultColorID[idC].commonName,
      fill: this.state.defaultFillID[idF].fill,
      photo: Images[this.state.colorCounter][id][0],
      itNum: this.state.itNum,
    };
    this.setState({
      wishItems: [...this.state.wishItems, newPur],
      itNum: this.state.itNum + 1,
    });
  };

  RemoveFromWish = (ipo) => {
    const revisedWish = this.state.wishItems.filter(
      (item) => item.itNum !== ipo
    );
    this.setState({
      ...this.state,
      wishItems: revisedWish,
    });
  };

  render() {
    console.log(this.state.cartItems);
    return (
      <div id="App">
        {/* router to link my pages together */}
        <Router>
          <Switch>
            <Route
              exact
              path="/Products"
              render={(props) => (
                <Browse {...props} cartNum={this.state.cartItems.length} />
              )}
            />
            <Route
              exact
              path="/CouchPillow"
              render={(props) => (
                <Product
                  {...props}
                  id={0}
                  defaultColorID={this.state.defaultColorID}
                  defaultFillID={this.state.defaultFillID}
                  price={ProductList[0].price}
                  name={ProductList[0].name}
                  description={ProductList[0].description}
                  colorCounter={this.state.colorCounter}
                  itNum={this.state.itNum}
                  fillCounter={this.state.fillCounter}
                  currentPhotos={Images[this.state.colorCounter][0]}
                  currentPhoto={Images[this.state.colorCounter][0][0]}
                  cartNum={this.state.cartItems.length}
                  HandleColorToggle={this.HandleColorToggle}
                  HandleFillToggle={this.HandleFillToggle}
                  AddToCart={this.AddToCart}
                  AddToWish={this.AddToWish}
                />
              )}
            />
            <Route
              exact
              path="/BedPillow"
              render={(props) => (
                <Product
                  {...props}
                  id={1}
                  defaultColorID={this.state.defaultColorID}
                  defaultFillID={this.state.defaultFillID}
                  price={ProductList[1].price}
                  name={ProductList[1].name}
                  description={ProductList[1].description}
                  colorCounter={this.state.colorCounter}
                  fillCounter={this.state.fillCounter}
                  currentPhotos={Images[this.state.colorCounter][1]}
                  currentPhoto={Images[this.state.colorCounter][1][1]}
                  cartNum={this.state.cartItems.length}
                  HandleColorToggle={this.HandleColorToggle}
                  HandleFillToggle={this.HandleFillToggle}
                  AddToCart={this.AddToCart}
                  AddToWish={this.AddToWish}
                />
              )}
            />
            <Route
              exact
              path="/RoundPillow"
              render={(props) => (
                <Product
                  {...props}
                  id={2}
                  defaultColorID={this.state.defaultColorID}
                  defaultFillID={this.state.defaultFillID}
                  price={ProductList[2].price}
                  name={ProductList[2].name}
                  description={ProductList[2].description}
                  colorCounter={this.state.colorCounter}
                  fillCounter={this.state.fillCounter}
                  currentPhotos={Images[this.state.colorCounter][2]}
                  currentPhoto={Images[this.state.colorCounter][2][2]}
                  cartNum={this.state.cartItems.length}
                  HandleColorToggle={this.HandleColorToggle}
                  HandleFillToggle={this.HandleFillToggle}
                  AddToCart={this.AddToCart}
                  AddToWish={this.AddToWish}
                />
              )}
            />
            <Route
              exact
              path="/FloorPoufPillow"
              render={(props) => (
                <Product
                  {...props}
                  id={3}
                  defaultColorID={this.state.defaultColorID}
                  defaultFillID={this.state.defaultFillID}
                  price={ProductList[3].price}
                  name={ProductList[3].name}
                  description={ProductList[3].description}
                  colorCounter={this.state.colorCounter}
                  fillCounter={this.state.fillCounter}
                  currentPhotos={Images[this.state.colorCounter][3]}
                  currentPhoto={Images[this.state.colorCounter][3][3]}
                  cartNum={this.state.cartItems.length}
                  HandleColorToggle={this.HandleColorToggle}
                  HandleFillToggle={this.HandleFillToggle}
                  AddToCart={this.AddToCart}
                  AddToWish={this.AddToWish}
                />
              )}
            />

            <Route
              exact
              path="/Cart"
              render={(props) => (
                <Cart
                  {...props}
                  cartItems={this.state.cartItems}
                  wishItems={this.state.wishItems}
                  cartNum={this.state.cartItems.length}
                  RemoveFromCart={this.RemoveFromCart}
                  RemoveFromWish={this.RemoveFromWish}
                  totalPrice={this.state.totalPrice}
                  AddToCart={this.AddToCart}
                  colorCounter={this.state.colorCounter}
                  fillCounter={this.state.fillCounter}
                />
              )}
            />
            <Route
              exact
              path="/About"
              render={(props) => (
                <About {...props} cartNum={this.state.cartItems.length} />
              )}
            />
            <Route
              exact
              path="/FAQs"
              render={(props) => (
                <Faq {...props} cartNum={this.state.cartItems.length} />
              )}
            />
            <Route
              exact
              path="/Contact"
              render={(props) => (
                <Contact {...props} cartNum={this.state.cartItems.length} />
              )}
            />
            <Route
              exact
              path="/"
              render={(props) => (
                <Homepage {...props} cartNum={this.state.cartItems.length} />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
