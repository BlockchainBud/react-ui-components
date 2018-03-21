import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Button.css'

class Button extends Component {
  constructor (props) {
    super(props)

    const defaultStyle = {
      color: '#47b475',
      backgroundColor: 'transparent',
      borderColor: '#47b475',
      hoverColor: '#fff',
      hoverBgColor: '#47b475',
      hoverBorderColor: '#47b475'
    }

    const buttonStyle = this.props.style ? this.props.style : defaultStyle

    this.state = {
      style: {
        color: buttonStyle.color,
        backgroundColor: buttonStyle.backgroundColor,
        borderColor: buttonStyle.borderColor
      },
      normalStyle: {},
      onHoverdStyle: {
        color: buttonStyle.hoverColor,
        backgroundColor: buttonStyle.hoverBgColor,
        borderColor: buttonStyle.hoverBorderColor
      },
      hovered: false,
      className: ['btn']
    }
    this._toggleHover = this._toggleHover.bind(this)
  }

  componentDidMount () {
    let normalStyle = this.state.style
    this.setState({
      normalStyle,
      className: this._addButtonClass(this.state.className)
    })
  }

  _addButtonClass (className) {
    // Size of the Button
    if (this.props.size) {
      className.push('btn-' + this.props.size)
    }

    // Rounded Button
    if (this.props.rounded) {
      className.push('btn-rounded')
    }

    // Icon Button
    if (this.props.icon) {
      className.push('btn-icon')
    }

    return className
  }

  _toggleHover () {
    let hovered = this.state.hovered
    let style = {}

    if (hovered) {
      style = this.state.normalStyle
    } else {
      style = this.state.onHoverdStyle
    }

    // toggle hovered state
    hovered = !hovered
    this.setState({
      hovered,
      style
    })
  }

  render () {
    return (
      <a
        href={this.props.link}
        className={this.state.className.join(' ')}
        style={Object.assign(this.state.style)}
        onMouseOver={this._toggleHover}
        onMouseOut={this._toggleHover}
      >
        {this.props.children}
      </a>
    )
  }
}

Button.propTypes = {
  style: PropTypes.object,
  size: PropTypes.string,
  rounded: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  link: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
}

export default Button
