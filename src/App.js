
import React, { Component } from 'react'
import { Grid } from 'react-flexbox-grid'
import Header from './components/Header/Header'
import Button from './components/Button/Button'
import Footer from './components/Footer/Footer'
import {TextImage, Text, Image} from './components/TextImage/TextImage'
import TextImage1 from './img/phone1.png'
import TextImage2 from './img/phone2.png'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Header headerStyle="light"/>
        <Header headerStyle="dark"/>
        <div className="main-container">
          <section>
            <Grid>
              <h1>Buttons</h1>
              <Button link="#" size="sm" rounded>Button</Button>
              <Button link="#" rounded>Button</Button>
              <Button link="#">Button</Button>
              <Button link="#" size="lg">Large Button</Button>
              <Button link="#" icon><span className="ti-arrow-up"/></Button>
              <Button link="#" rounded size="lg">New Button</Button>
            </Grid>
          </section>
          <section>
            <Grid>
              <h1>Text Image</h1>
            </Grid>
            <TextImage>
              <Image imgSrc={TextImage1} position="left"/>
              <Text position="right">
                <h1 className="large">Clean, Usable Image Blocks.</h1>
                <h6 className="uppercase">Left &amp; Right Variations Included</h6>
                <p className="lead">
                  We've built three distinct image and text combinations for you to showcase the features of your product or service. All combos come in left and right arrangements.
                </p>
                <Button link="#" size="lg" rounded>Explore React UI</Button>
              </Text>
            </TextImage>
            <TextImage>
              <Image imgSrc={TextImage2} position="right"/>
              <Text position="left">
                <h1 className="large">Clean, Usable Image Blocks.</h1>
                <h6 className="uppercase">Left &amp; Right Variations Included</h6>
                <p className="lead">
                  We've built three distinct image and text combinations for you to showcase the features of your product or service. All combos come in left and right arrangements.
                </p>
                <Button link="#" size="lg" rounded>Explore React UI</Button>
              </Text>
            </TextImage>
          </section>
          <Footer class="dark"/>
        </div>
      </div>
    )
  }
}

export default App
