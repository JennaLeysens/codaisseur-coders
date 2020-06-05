import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import "./App.css";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/post/:id" component={PostPage} />
          <Route component={HomePage} />
        </Switch>
      </Switch>
    </div>
  );
}

export default App;
