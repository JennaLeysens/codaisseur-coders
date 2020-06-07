import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import ToolBar from "./components/toolbar";
import { useDispatch } from "react-redux";
import { bootstrapLoginState } from "./auth/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bootstrapLoginState);
  }, []);

  return (
    <div className="App">
      <ToolBar />
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
