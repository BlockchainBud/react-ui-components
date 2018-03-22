import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './HeaderLogo.scss'
import defaultLogoLight from './img/logo-light.png'
import defaultLogoDark from './img/logo-dark.png'

class Logo extends Component {
  render () {
    const logoLight = this.props.logoLight ? this.props.logoLight : defaultLogoLight
    const logoDark = this.props.logoDark ? this.props.logoDark : defaultLogoDark

    return (
      <div className='module'>
        <a href={this.props.link}>
          <img className='logo logo-light' alt={this.props.alt} src={logoLight} />
          <img className='logo logo-dark' alt={this.props.alt} src={logoDark} />
        </a>
      </div>
    )
  }
}

Logo.propTypes = {
  logoLight: PropTypes.string,
  logoDark: PropTypes.string,
  link: PropTypes.string,
  alt: PropTypes.string
}

export default Logo
