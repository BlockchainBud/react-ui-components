import React, { Component } from 'react';
import './Header.css';
import Logo from "./HeaderLogo/HeaderLogo";
import HeaderNav from "./HeaderNav/HeaderNav";
import logoLight from "../../img/logo-light.png";
import logoDark from "../../img/logo-dark.png";


class Header extends Component {

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const navigation = document.getElementById('navigation');

    if(window.pageYOffset > navigation.offsetHeight) {
      navigation.classList.add('fixed', 'outOfSight');
    } else {
      navigation.classList.remove('fixed', 'outOfSight');
    }

    if(window.pageYOffset > 100) {
      navigation.classList.add('scrolled');
    } else {
      navigation.classList.remove('scrolled');
    }
  }

  render() {
    const navClass = this.props.headerStyle;

    return (
      <div className={"nav-container " + navClass}>
        <nav id="navigation" className={(navClass === "transparent") ? "absolute transparent" : null}>
          <div className="nav-bar">
            <Logo
              link="index.html"
              logoLight={logoLight}
              logoDark={logoDark}
              alt="React UI" />

            <div className="module widget-handle mobile-toggle right visible-sm visible-xs">
                <i className="ti-menu"></i>
            </div>

            <HeaderNav />
          </div>
        </nav>
      </div>
    )
  }

}

export default Header;
