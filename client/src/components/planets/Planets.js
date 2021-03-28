import React, { Component } from 'react'
import { connect } from "react-redux";
import { get_planets } from "../../actions/planets";

class Planets extends Component {

  componentDidMount = () => {
    // const { profile_id } = this.props.match.params;
    // this.props.get_profile_by_id(profile_id);
    // console.log("DERP");

    const res = this.props.get_planets();

    // console.log(res);
  };

  render() {
    return (
      <div>
        Planets
      </div>
    )
  }
}

const mapStateToProps = state => ({
  planets: state.planets
});

export default connect(mapStateToProps, {
  get_planets
})(Planets);
