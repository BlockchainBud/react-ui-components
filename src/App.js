import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import Footer from "./components/Footer/Footer";
import {TextImage, Text, Image} from "./components/TextImage/TextImage";

import Timage1 from './img/phone1.png';

class App extends Component {
  render() {
    return (
      <div className="App">
          {/* You can use light, dark and transparent style  */}
          <Header headerStyle="dark" />
          <div className="main-container">
            <section>
              <Grid>
                <h1>Buttons</h1>
                <Button
                  link="#"
                  size="sm"
                  rounded
                  style={{
                    color: 'white',
                    backgroundColor: 'red',
                    borderColor: '#000',
                    hoverColor: '#000',
                    hoverBgColor: 'gray',
                    hoverBorderColor: "green"
                  }}>Button</Button>

                  <Button
                    link="#"
                    rounded
                    style={{
                      color: 'white',
                      backgroundColor: 'blue',
                      borderColor: 'yellow',
                      hoverColor: 'blue',
                      hoverBgColor: 'white',
                      hoverBorderColor: "blue"
                    }}>Button
                  </Button>

                  <Button
                      link="#"
                    >Button
                  </Button>

                  <Button
                      link="#"
                      size="lg"
                    >Button
                  </Button>

                    <Button
                      link="#"
                      icon
                    ><span className="ti-arrow-up"></span>
                  </Button>
              </Grid>
            </section>
          </div>
          <section>
            <Grid>
              <h1>Text Image</h1>
            </Grid>
            <TextImage>
              <Image imgSrc={Timage1} position="left" />
              <Text>
                <h1 className="large mb40 mb-xs-16">Clean, Usable Image Blocks.</h1>
                <h6 className="uppercase mb16">Left &amp; Right Variations Included</h6>
                <p className="lead mb40">
                    We've built three distinct image and text combinations for you to showcase the features of your product or service. All combos come in left and right arrangements.
                </p>
                <a className="btn-lg btn" href="#">Explore Foundry</a>
              </Text>
            </TextImage>
          </section>
          <div className="main-container">
            <Footer class="dark" />
          </div>
      </div>
    );
  }
}

export default App;
