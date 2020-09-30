import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import StyleTransfer from "./pages/StyleTransfer";

function App() {
  return (
    <div>
      <Router>
        {/* <NavBar /> */}
        <Switch>
          <Route path="/home-page">
            <div>Hello</div>
          </Route>
          <Route path="/">
            <StyleTransfer />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
