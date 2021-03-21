import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";


class Header extends Component {
    //   state = {
    //     show_dropdown: false
    //   };

    //   handle_logout = () => {
    //     this.props.logout_user(this.props.history);
    //   };

    render() {
        // const { is_authenticated } = this.props.auth;
        // const { first_name } = this.props.auth.user;
        return (
            <nav>
                <div class="nav-wrapper">
                    <a href="#" class="brand-logo">Logo</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">JavaScript</a></li>
                    </ul>
                </div>
            </nav>
            //   <div className="navbar-fixed custom-navbar-fixed">
            //     <nav className="landing-nav">
            //       <div className="container">
            //         <div className="nav-wrapper">
            //           <Link className="brand-logo custom-brand-logo" to={"/"}>
            //             <img className="logo-nav" src={logo_nav} alt="" />
            //           </Link>
            //           {is_authenticated ? (
            //             <div className="dropdown right hide-on-med-and-down">
            //               <ul className="dropdown_menu">
            //                 <li className="dropdown_menu-item">
            //                   <a className="dropdown-link valign-wrapper fw-600">
            //                     {first_name}
            //                     <i className="material-icons right account-icon">
            //                       account_circle
            //                     </i>
            //                   </a>
            //                   <div>
            //                     <ul className="dropdown_submenu">
            //                       <li className="dropdown_submenu-item ">
            //                         <Link to={"/"}>
            //                           <i className="material-icons left account-icon">
            //                             menu
            //                           </i>
            //                           Dashboard
            //                         </Link>
            //                       </li>
            //                       <li className="dropdown_submenu-item ">
            //                         <Link to={"/account"}>
            //                           <i className="material-icons left account-icon">
            //                             settings
            //                           </i>
            //                           Account
            //                         </Link>
            //                       </li>
            //                       <li className="dropdown_submenu-item ">
            //                         <a onClick={this.handle_logout}>
            //                           <i className="material-icons left account-icon">
            //                             exit_to_app
            //                           </i>
            //                           Logout
            //                         </a>
            //                       </li>
            //                     </ul>
            //                   </div>
            //                 </li>
            //               </ul>
            //             </div>
            //           ) : (
            //             <ul id="nav-mobile" className="right hide-on-med-and-down">
            //               <li>
            //                 <Link to={"/register"} className="mr-35 fw-600">
            //                   Register
            //                 </Link>
            //               </li>
            //               <li>
            //                 <Link to={"/login"} className="fw-600">
            //                   Login
            //                 </Link>
            //               </li>
            //             </ul>
            //           )}
            //         </div>
            //       </div>
            //     </nav>
            //   </div>
        );
    }
}

const mapStateToProps = state => ({
    test: state.test
});

// export default compose(
//   connect(mapStateToProps, { logout_user }),
//   withRouter
// )(Header);

export default compose(
    connect(mapStateToProps, null),
    withRouter
)(Header);