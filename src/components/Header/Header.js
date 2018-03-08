import React, { Component } from 'react';
import './Header.css';
import Logo from "./HeaderLogo/HeaderLogo";
import HeaderNav from "./HeaderNav/HeaderNav";
import logoLight from "../../img/logo-light.png";
import logoDark from "../../img/logo-dark.png";


class Header extends Component {

  render() {
    return (
      <div className="nav-container">
        <nav className="absolute transparent">
          <div className="nav-bar">
            <Logo
              logoLight={logoLight}
              logoDark={logoDark}
              alt="Foundry" />
            <HeaderNav />
          </div>
        </nav>
      </div>
    )
  }

}

export default Header;
