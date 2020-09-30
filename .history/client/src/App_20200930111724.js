import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import StyleTransfer from "./pages/StyleTransfer";

function App() {
  return (
    <div style={theme}>
      <Router>
        <ThemeContext.Provider value={theme}>
          <div>
            <div className="main-bg">
              <NavBar theme={theme} setTheme={setTheme} />
              <Switch>
                <Route path="/training">
                  <TrainingPage
                    runTraining={runTraining}
                    setRunTraining={setRunTraining}
                  />
                </Route>
                <Route path="/experiments">
                  <ComparePage
                    runTraining={runTraining}
                    setRunTraining={setRunTraining}
                    setExperiment={setExperiment}
                  />
                </Route>
                <Route path="/experiment-page">
                  <ExperimentPage experiment={experiment} />
                </Route>
                <Route path="/inference">
                  <InferencePage />
                </Route>
                <Route path="/">
                  <HomePage setRunTraining={setRunTraining} />
                </Route>
              </Switch>
              <Footer />
            </div>
          </div>
        </ThemeContext.Provider>
      </Router>
    </div>
  );
}

export default App;
