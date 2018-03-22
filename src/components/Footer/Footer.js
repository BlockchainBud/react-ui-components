import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col } from 'react-flexbox-grid'
import './Footer.scss'
import logoLight from './img/logo-light.png'

class Footer extends Component {
  render () {
    return (
      <footer className={this.props.class}>
        <Grid>
          <Row>
            <Col xs={12} md={6} lg={3}>
              <img alt='Logo' className='logo' src={logoLight}/>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <h6 className='title'>Latest Updates</h6>
              <hr/>
              <ul className='link-list recent-posts'>
                <li>
                  <a href='#'>Hugging pugs is super trendy</a>
                  <span className='date'>February
                    <span className='number'>14, 2015</span>
                  </span>
                </li>
                <li>
                  <a href='#'>Spinning vinyl is oh so cool</a>
                  <span className='date'>February
                    <span className='number'>9, 2015</span>
                  </span>
                </li>
                <li>
                  <a href='#'>Superior theme design by pros</a>
                  <span className='date'>January
                    <span className='number'>27, 2015</span>
                  </span>
                </li>
              </ul>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <h6 className='title'>Latest Updates</h6>
              <hr/>
              <ul className='link-list recent-posts'>
                <li>
                  <a href='#'>Hugging pugs is super trendy</a>
                  <span className='date'>February
                    <span className='number'>14, 2015</span>
                  </span>
                </li>
                <li>
                  <a href='#'>Spinning vinyl is oh so cool</a>
                  <span className='date'>February
                    <span className='number'>9, 2015</span>
                  </span>
                </li>
                <li>
                  <a href='#'>Superior theme design by pros</a>
                  <span className='date'>January
                    <span className='number'>27, 2015</span>
                  </span>
                </li>
              </ul>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <h6 className='title'>Latest Updates</h6>
              <hr/>
              <ul className='link-list recent-posts'>
                <li>
                  <a href='#'>Hugging pugs is super trendy</a>
                  <span className='date'>February
                    <span className='number'>14, 2015</span>
                  </span>
                </li>
                <li>
                  <a href='#'>Spinning vinyl is oh so cool</a>
                  <span className='date'>February
                    <span className='number'>9, 2015</span>
                  </span>
                </li>
                <li>
                  <a href='#'>Superior theme design by pros</a>
                  <span className='date'>January
                    <span className='number'>27, 2015</span>
                  </span>
                </li>
              </ul>
            </Col>
          </Row>
        </Grid>
      </footer>
    )
  }
}

Footer.propTypes = {
  class: PropTypes.string
}

export default Footer
