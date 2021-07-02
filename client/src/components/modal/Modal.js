import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

class Modal extends Component {

    render() {
        return (
            <div>Modal</div>
        );
    }
}
    
export default connect(null, null)(Modal);

