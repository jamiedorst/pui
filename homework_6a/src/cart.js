import "./App.css";
import Navbar from "./navbar.js";
import cartCouch from "./Assets/cartCouch.png"; // couch image for cart page

function Cart() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <body>
        <h3>Cart</h3>
        <div id="cartPage">
          {/* left hand side of page */}
          <div className="cartLeft">
            <img
              className="cartImg"
              src={cartCouch}
              alt="Red couch with a bright blue Fluff Stuff pillow"
            ></img>
            {/* left hand product info */}
            <div className="cartItem">
              <h4 className="miniMarg">Couch Pillow</h4>
              <h5>$89</h5>
              <div className="productChoices">
                <h6 className="miniMarg">Color: Cozy Denim</h6>
                <h6 className="miniMarg">Fill: Memory Foam</h6>
              </div>
              <div className="cartQty">
                <button className="addSub">–</button>
                <input type="text" value="1" className="cartInput" />
                <button className="addSub">+</button>
              </div>
              <div className="miniLink remCart">Remove from cart</div>
            </div>
          </div>
          {/* right hand side of page -- text */}
          <div id="cartSect">
            <div id="cartLine" />
            <div className="cartRight">
              <div id="cartText">
                <h4 className="miniMarg">ORDER SUMMARY</h4>
                <div className="numberRow">
                  <h5>Subtotal</h5>
                  <h5>$89</h5>
                </div>
                <div className="numberRow">
                  <h5>Shipping estimate</h5>
                  <h5>Free</h5>
                </div>
                <div className="numberRow">
                  <h5>Tax estimate</h5>
                  <h5>$4.57</h5>
                </div>
                <div className="numberRow" id="totalRow">
                  <h5>ESTIMATED TOTAL</h5>
                  <h5>$93.57</h5>
                </div>
              </div>
              <button className="filledButton" id="checkout">
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Cart;
