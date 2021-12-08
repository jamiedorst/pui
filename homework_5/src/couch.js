import "./App.css";
import Navbar from "./navbar.js";
import couch1 from "./Assets/couch1.png"; // couch image for product page
import couch2 from "./Assets/couch2.png"; // couch image for product page
import couch3 from "./Assets/couch3.png"; // couch image for product page
import couch4 from "./Assets/couch4.png"; // couch image for product page

function Browse() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <body className="detailPage">
        {/* left hand side of page -- images */}
        <div className="detailImgs">
          <img
            className="detailImg"
            src={couch1}
            alt="Red couch with a bright blue Fluff Stuff pillow"
          ></img>
          <img
            className="detailImg"
            src={couch2}
            alt="Red couch with a bright blue Fluff Stuff pillow"
          ></img>
          <img
            className="detailImg"
            src={couch3}
            alt="Red couch with a bright blue Fluff Stuff pillow"
          ></img>
          <img
            className="detailImg"
            src={couch4}
            alt="Red couch with a bright blue Fluff Stuff pillow"
          ></img>
        </div>
        {/* right hand side of page -- text */}
        {/* product purchase info */}
        <div className="detailText">
          <h3>Couch Pillow</h3>
          <h5>$89</h5>
          <h6>Color: Cozy Denim</h6>
          <div className="pillowOptions">
            <div className="colorOption blue"> </div>
            <div className="colorOption yellow"> </div>
            <div className="colorOption white"> </div>
            <div className="colorOption brown"> </div>
          </div>
          <h6>Select a fill</h6>
          <div className="pillowOptions">
            <div className="fillOption">DUCK DOWN</div>
            <div className="fillOption">MEMORY FOAM</div>
            <div className="fillOption">HYPOALLERGENIC POLY-BLEND</div>
          </div>
          <div className="miniLink">What fill should I get?</div>
          <button className="filledButton inactive">ADD TO CART</button>
          {/* product description */}
          <div className="descSection">
            <h6 className="miniHeader">PRODUCT DESCRIPTION</h6>
            <p className="descText">
              Delicately fabricated, our signature Couch Pillow will make your
              living room more inviting than ever. Our beautiful colors will
              complement any room and bring out the natural beauty of your
              decor.
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
              Free standard shipping on this item anywhere within the contingent
              United States. Estimated delivery time is within 1-4 business
              days. Upgradde to express shipping to receive within 1-2 business
              days. Free returns accepted within 30 days.
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
              This pillow is awesome! The quality is really good and I like to
              support small businesses. I had to remove a star because I find it
              difficult to wash. A pillow that I could just toss in the washer
              would be great.
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
              I love my new couch pillow. Thank you Fluff Stuff. Sadly shipping
              took much longer than expected.
            </p>
            <div className="centerButton">
              <button className="filledButtonMinor">LOAD MORE</button>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Browse;
