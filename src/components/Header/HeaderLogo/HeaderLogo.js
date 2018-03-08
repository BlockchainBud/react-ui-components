import React, { Component } from 'react';
import './HeaderLogo.css';
import defaultLogoLight from "./img/logo-light.png";
import defaultLogoDark from "./img/logo-dark.png";

class Logo extends Component {
  render() {
    const logoLight = this.props.logoLight ? this.props.logoLight : defaultLogoLight;
    const logoDark = this.props.logoLight ? this.props.logoLight : defaultLogoDark;

    return (
      <div className="module">
        <img className="logo logo-light" alt={this.props.alt} src={logoLight} />
        <img className="logo logo-dark" alt={this.props.alt} src={logoDark} />
      </div>
    )
  }
}

export default Logo;
