import React, { Component } from 'react'
import { connect } from "react-redux";
import { compose } from "redux";
import { get_planets } from "../../actions/planets";
import { display_modal } from "../../actions/modal";
import { withRouter } from "react-router-dom";

class Planets extends Component {

  display_modal = () => {
    this.props.display_modal("Test Title", "Test Body", "Confirm", "Cancel");
  }

  render() {
    return (
      <div>
        Planets
        <button onClick={this.display_modal} className="btn">Display Modal</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  planets: state.planets
});

export default compose(connect(mapStateToProps, { get_planets, display_modal }), withRouter)(Planets);
