import React, { Component } from 'react'
import { Grid, Col } from 'react-flexbox-grid'
import PropTypes from 'prop-types'
import './TextImage.scss'

export class TextImage extends Component {
  render () {
    return (
      <section className='image-edge'>
        {this.props.children}
      </section>
    )
  }
}

export class Text extends Component {
  render () {
    const position = this.props.position ? this.props.position : 'right'
    return (
      <Grid>
        <Col md={5} xs={7} className={'v-align-transform ' + position}>
          {this.props.children}
        </Col>
      </Grid>
    )
  }
}

Text.propTypes = {
  position: PropTypes.string
}

export class Image extends Component {
  render () {
    const position = this.props.position ? this.props.position : 'left'
    if (position === 'left') {
      return (
        <Col md={6} xs={4} className='po img-content'>
          <img src={this.props.imgSrc} />
        </Col>
      )
    } else {
      return (
        <Col md={6} mdOffset={6} xs={4} className='po img-content'>
          <img src={this.props.imgSrc} />
        </Col>
      )
    }
  }
}

Image.propTypes = {
  position: PropTypes.string
}
