import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// COMPONENTS
import Header from "./components/header/Header";
import Planets from "./components/planets/Planets";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Planets} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;