import "./App.css";
import Homepage from "./homepage.js";
import Browse from "./browse.js";
import Couch from "./couch.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div id="App">
      {/* router to link my pages together */}
      <Router>
        <Switch>
          <Route exact path="/Products" component={Browse} />
          <Route exact path="/CouchPillow" component={Couch} />
          <Route exact path="/" component={Homepage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
