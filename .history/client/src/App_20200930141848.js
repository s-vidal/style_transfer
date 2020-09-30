import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import StyleTransfer from "./pages/StyleTransfer";
import SuperResolution from "./pages/SuperResolution";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="bg-dark">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/super-resolution">
            <SuperResolution />
          </Route>
          <Route path="/style-transfer">
            <StyleTransfer />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
