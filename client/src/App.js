import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
// COMPONENTS
import Modal from "./components/modal/Modal";
import Header from "./components/header/Header";
import Planets from "./components/planets/Planets";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

function App() {
  return (
    <div className="App">
        <Header />
        <Modal />
        <Switch>
          <Route exact path="/" component={Planets} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
    </div>
  );
}

const mapStateToProps = state => ({
  display_modal: state.display_modal
});

export default compose(connect(mapStateToProps, null), withRouter)(App);