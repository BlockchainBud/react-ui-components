import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './TextImage.css';

export class TextImage extends Component {
  render() {
    return (
      <section className="image-edge">
        {this.props.children}
      </section>
    )
  }
}

export class Text extends Component {
  render() {
    return (
      <Grid>
        <Col md={5} mdOffset={1} xs={7} xsOffset={1} className="v-align-transform right">
          {this.props.children}
        </Col>
      </Grid>
    )
  }
}

export class Image extends Component {
  render() {
    return (
      <Col md={6} xs={4} className="po img-content">
        <img src={this.props.imgSrc} className="mb-xs-24" />
      </Col>
    )
  }
}
