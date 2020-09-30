import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import StyleTransfer from "./pages/StyleTransfer";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/training">
            <TrainingPage
              runTraining={runTraining}
              setRunTraining={setRunTraining}
            />    </Route>

            <Route path="/">
              <HomePage setRunTraining={setRunTraining} />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
