import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import StyleTransfer from "./pages/StyleTransfer";
import 
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        {/* <NavBar /> */}
        <Switch>
          <Route path="/home-page">
            <div></div>
          </Route>
          <Route path="/">
            <StyleTransfer />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
