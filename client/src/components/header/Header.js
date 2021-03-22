import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";


class Header extends Component {

    render() {
        return (
            <nav>
                <div class="nav-wrapper">
                    <Link to={"/"} className="brand-logo">
                        Logo
                    </Link>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li>
                            <Link to={"/login"}>
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = state => ({
    test: state.test
});


export default compose(
    connect(mapStateToProps, null),
    withRouter
)(Header);