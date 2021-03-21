import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// COMPONENTS
import Header from "./components/header/Header";
import Test from "./components/test/Test";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Test} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;