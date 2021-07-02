import React, { Component } from 'react'
import { connect } from "react-redux";
import { compose } from "redux";
import { get_planets } from "../../actions/planets";
import { toggle_modal } from "../../actions/modal";
import { withRouter } from "react-router-dom";

class Planets extends Component {

  componentDidMount = () => {
    // const { profile_id } = this.props.match.params;
    // this.props.get_profile_by_id(profile_id);
    // console.log("DERP");
    // const res = this.props.get_planets();
    // console.log(res);
  };

  toggle_modal = () => {
    this.props.toggle_modal();
  }

  render() {
    return (
      <div>
        Planets
        <button onClick={this.toggle_modal}>Toggle Modal</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  planets: state.planets
});

export default compose(connect(mapStateToProps, { get_planets, toggle_modal }), withRouter)(Planets);
