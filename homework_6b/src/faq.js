import "./App.css";
import Navbar from "./navbar.js";
import { Link } from "react-router-dom";
import React, { Component } from "react";

class Faq extends Component {
  render() {
    return (
      <div>
        <header>
          <Navbar cartNum={this.props.cartNum} />
        </header>
        <body>
          <div id="faqSect">
            <h3>FAQs</h3>
            <div className="question">
              <h6>How do I take care of my Fluff Stuff pillow?</h6>
              <p>
                Your Fluff Stuff pillow is designed for longevity. Still, there
                are certain things you can do to make it as soft and luxurious
                for as long as possible. Make sure to handwash it in warm water,
                and hang it to dry. Never dry clean it or use bleach.
              </p>
            </div>
            <div className="question">
              <h6>
                I placed an order and it still hasn't arrived. What do I do?
              </h6>
              <p>
                We’re sorry your order is taking longer than expected! Please
                check the tracking link provided in the shipping confirmation
                email to view any unexpected delays in shipping. If that does
                not help, please email us at fluff@stuff.com and we will look
                into the problem.
              </p>
            </div>
            <div className="question">
              <h6>How do I make a return?</h6>
              <p>
                We’re sorry you’re unsatisfied with your purchase. If you’d like
                to make a return, please email us at fluff@stuff.com with the
                subject “Return Request” and include your order number in the
                body of the email. From there we will provide you with a return
                shipping label, no hassle.
              </p>
            </div>
            <div className="question">
              <h6>Where did my favorite color go?</h6>
              <p>
                Fluff Stuff regularly creates pillows in seasonal colors. If you
                loved a previous seasonal color, we’re sorry that it is no
                longer in production! Please send us a note at fluff@stuff.com
                to request that we make your favorite color a permanent part of
                our collection.
              </p>
            </div>
            <Link
              style={{ textDecoration: "none" }}
              className="textLink"
              to="/Contact"
            >
              <button className="filledButtonMinor aboutButton bottom">
                CONTACT US
              </button>
            </Link>
          </div>
        </body>
      </div>
    );
  }
}

export default Faq;
