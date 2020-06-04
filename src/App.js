import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Switch>
          <Route path="/post/:id" component={PostPage} />
          <Route component={HomePage} />
        </Switch>
      </Switch>
    </div>
  );
}

export default App;
