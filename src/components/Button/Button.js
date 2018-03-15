import React, { Component } from 'react';
import './Button.css';

class Button extends Component {

  constructor(props) {
    super(props);

    const buttonStyle = this.props.style;

    this.state = {
      style: {
        color: buttonStyle.color ? buttonStyle.color : '#47b475',
        backgroundColor: buttonStyle.backgroundColor ? buttonStyle.backgroundColor : 'transparent',
        borderColor: buttonStyle.borderColor ? buttonStyle.borderColor : '#47b475'
      },
      normalStyle : {},
      onHoverdStyle : {
        color: buttonStyle.hoverColor ? buttonStyle.hoverColor : '#fff',
        backgroundColor: buttonStyle.hoverBgColor ? buttonStyle.hoverBgColor : '#47b475',
        borderColor: buttonStyle.hoverBorderColor ? buttonStyle.hoverBorderColor : '#47b475',
      },
      hovered: false,
      className: ['btn']
    }


		this._toggleHover = this._toggleHover.bind(this);


  }

  componentDidMount() {

		let normalStyle = this.state.style;

		this.setState({
			normalStyle,
      className: this._addButtonClass(this.state.className)
		});

	}

  _addButtonClass(className) {

    //Size of the Button
    if(this.props.size) {
      className.push("btn-"+this.props.size);
    }

    //Rounded Button
    if(this.props.rounded) {
      className.push("btn-rounded");
    }

    //Icon Button
    if(this.props.icon) {
      className.push("btn-icon");
    }

    return className

  }

	_toggleHover() {

		let hovered = this.state.hovered;
		let style = {};

		if(hovered) {
			style = this.state.normalStyle;
		} else {
			style = this.state.onHoverdStyle;
		}

		// toggle hovered state
		hovered = !hovered;
		this.setState({
			hovered,
			style
		});

	}

  render() {

    return (
      <a
        href={this.props.link}
        className={this.state.className.join(" ")}
        style={Object.assign(this.state.style)}
        onMouseOver={this._toggleHover}
        onMouseOut={this._toggleHover}
      >
        {this.props.children}
      </a>
    )
  }

}

export default Button
