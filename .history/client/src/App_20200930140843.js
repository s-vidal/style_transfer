import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import StyleTransfer from "./pages/StyleTransfer";
import SuperResolution from "./pages/SuperResolution";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import HomePage from "../"

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/super-resolution">
            <SuperResolution />
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
