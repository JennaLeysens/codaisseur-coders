import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Switch>
          <Route component={HomePage} />
        </Switch>
      </Switch>
    </div>
  );
}

export default App;
