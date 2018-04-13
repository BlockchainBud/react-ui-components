import React, { Component } from 'react'
import './IconBox.scss'

class IconBox extends Component {
  render () {
    const bordered = (this.props.bordered) ? 'bordered' : ''
    const boxed = (this.props.boxed) ? 'boxed' : ''
    const circularIcon = (this.props.circularIcon) ? 'circular' : ''

    if (this.props.type === 'centered') {
      return (
        <div className={'feature ' + bordered + ' ' + boxed}>
          <div className='text-center'>
            <span className={this.props.iconSize + ' ' + this.props.iconClass + ' icon ' + circularIcon} />
            {this.props.children}
          </div>
        </div>
      )
    } else {
      return (
        <div className={'feature ' + bordered + ' ' + boxed}>
          <div className={this.props.iconSize + ' left'}>
            <span className={this.props.iconSize + ' ' + this.props.iconClass + ' icon ' + circularIcon} />
          </div>
          <div className={this.props.iconSize + ' right'}>
            {this.props.children}
          </div>
        </div>
      )
    }
  }
}

export default IconBox
