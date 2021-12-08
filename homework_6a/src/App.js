import "./App.css";
import Homepage from "./homepage.js";
import Browse from "./browse.js";
import Product from "./product.js";
import About from "./about.js";
import Faq from "./faq.js";
import Contact from "./contact.js";
import Cart from "./cart.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div id="App">
      {/* router to link my pages together */}
      <Router>
        <Switch>
          <Route exact path="/Products" component={Browse} />
          <Route
            exact
            path="/CouchPillow"
            component={() => <Product id={0} />}
          />
          <Route exact path="/BedPillow" component={() => <Product id={1} />} />
          <Route
            exact
            path="/RoundPillow"
            component={() => <Product id={2} />}
          />
          <Route
            exact
            path="/FloorPoufPillow"
            component={() => <Product id={3} />}
          />
          <Route exact path="/Cart" component={Cart} />
          <Route exact path="/About" component={About} />
          <Route exact path="/FAQs" component={Faq} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/" component={Homepage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
