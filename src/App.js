
import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Header from './components/Header/Header'
import Button from './components/Button/Button'
import Footer from './components/Footer/Footer'
import {TextImage, Text, Image} from './components/TextImage/TextImage'
import TextImage1 from './img/phone1.png'
import TextImage2 from './img/phone2.png'
import Modal from './components/Modal/Modal'
import IconBox from './components/IconBox/IconBox'

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
          <section>
            <Grid>
              <h1>Modal</h1>
              <Modal ButtonLabel='Short Text Modal'>
                <h3>Hey there, I'm a cool multi-purpose modal. Use me for almost anything!</h3>
                <hr/>
                <p>Convergence unicorn thinker-maker-doer ideate thinker-maker-doer pitch deck piverate food-truck long shadow disrupt. Sticky note engaging latte integrate driven convergence food-truck pitch deck. Quantitative vs. qualitative disrupt sticky note piverate 360 campaign co-working bootstrapping long shadow actionable insight agile latte. Thinker-maker-doer bootstrapping integrate personas long shadow Steve Jobs entrepreneur sticky note ship it grok sticky note.</p>
                <p>Grok Steve Jobs user centered design driven earned media food-truck waterfall is so 2000 and late human-centered design workflow ideate sticky note actionable insight entrepreneur unicorn. Experiential parallax physical computing disrupt cortado human-centered design intuitive grok bootstrapping quantitative vs. qualitative driven.</p>
              </Modal>
              <Modal ButtonLabel='Long Text Modal'>
                <h3>Hey there, I'm a cool multi-purpose modal. Use me for almost anything!</h3>
                <hr/>
                <p>Convergence unicorn thinker-maker-doer ideate thinker-maker-doer pitch deck piverate food-truck long shadow disrupt. Sticky note engaging latte integrate driven convergence food-truck pitch deck. Quantitative vs. qualitative disrupt sticky note piverate 360 campaign co-working bootstrapping long shadow actionable insight agile latte. Thinker-maker-doer bootstrapping integrate personas long shadow Steve Jobs entrepreneur sticky note ship it grok sticky note.</p>
                <p>Grok Steve Jobs user centered design driven earned media food-truck waterfall is so 2000 and late human-centered design workflow ideate sticky note actionable insight entrepreneur unicorn. Experiential parallax physical computing disrupt cortado human-centered design intuitive grok bootstrapping quantitative vs. qualitative driven.</p>
                <p>Convergence unicorn thinker-maker-doer ideate thinker-maker-doer pitch deck piverate food-truck long shadow disrupt. Sticky note engaging latte integrate driven convergence food-truck pitch deck. Quantitative vs. qualitative disrupt sticky note piverate 360 campaign co-working bootstrapping long shadow actionable insight agile latte. Thinker-maker-doer bootstrapping integrate personas long shadow Steve Jobs entrepreneur sticky note ship it grok sticky note.</p>
                <p>Grok Steve Jobs user centered design driven earned media food-truck waterfall is so 2000 and late human-centered design workflow ideate sticky note actionable insight entrepreneur unicorn. Experiential parallax physical computing disrupt cortado human-centered design intuitive grok bootstrapping quantitative vs. qualitative driven.</p>
                <p>Convergence unicorn thinker-maker-doer ideate thinker-maker-doer pitch deck piverate food-truck long shadow disrupt. Sticky note engaging latte integrate driven convergence food-truck pitch deck. Quantitative vs. qualitative disrupt sticky note piverate 360 campaign co-working bootstrapping long shadow actionable insight agile latte. Thinker-maker-doer bootstrapping integrate personas long shadow Steve Jobs entrepreneur sticky note ship it grok sticky note.</p>
                <p>Grok Steve Jobs user centered design driven earned media food-truck waterfall is so 2000 and late human-centered design workflow ideate sticky note actionable insight entrepreneur unicorn. Experiential parallax physical computing disrupt cortado human-centered design intuitive grok bootstrapping quantitative vs. qualitative driven.</p>
                <p>Convergence unicorn thinker-maker-doer ideate thinker-maker-doer pitch deck piverate food-truck long shadow disrupt. Sticky note engaging latte integrate driven convergence food-truck pitch deck. Quantitative vs. qualitative disrupt sticky note piverate 360 campaign co-working bootstrapping long shadow actionable insight agile latte. Thinker-maker-doer bootstrapping integrate personas long shadow Steve Jobs entrepreneur sticky note ship it grok sticky note.</p>
                <p>Grok Steve Jobs user centered design driven earned media food-truck waterfall is so 2000 and late human-centered design workflow ideate sticky note actionable insight entrepreneur unicorn. Experiential parallax physical computing disrupt cortado human-centered design intuitive grok bootstrapping quantitative vs. qualitative driven.</p>
              </Modal>
            </Grid>
          </section>
          <section>
            <Grid>
              <h1>Icon Box</h1>
              <Row>
                <Col md={4} sm={4} xs={12}>
                  <IconBox type="centered" iconClass="ti-package" iconSize='large'>
                    <h5>Expert, Modular Design</h5>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
                    </p>
                  </IconBox>
                </Col>
                <Col md={4} sm={4} xs={12}>
                  <IconBox type="centered" bordered iconClass="ti-panel" iconSize='large'>
                    <h5>Expert, Modular Design</h5>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
                    </p>
                  </IconBox>
                </Col>
                <Col md={4} sm={4} xs={12}>
                  <IconBox type="centered" boxed iconClass="ti-pulse" iconSize='large'>
                    <h5>Expert, Modular Design</h5>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
                    </p>
                  </IconBox>
                </Col>
              </Row>
              <Row>
                <Col md={4} sm={4} xs={12}>
                  <IconBox type="centered" iconClass="ti-package" circularIcon>
                    <h5>Expert, Modular Design</h5>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
                    </p>
                  </IconBox>
                </Col>
                <Col md={4} sm={4} xs={12}>
                  <IconBox type="centered" bordered iconClass="ti-panel" circularIcon>
                    <h5>Expert, Modular Design</h5>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
                    </p>
                  </IconBox>
                </Col>
                <Col md={4} sm={4} xs={12}>
                  <IconBox type="centered" boxed iconClass="ti-pulse" circularIcon>
                    <h5>Expert, Modular Design</h5>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
                    </p>
                  </IconBox>
                </Col>
              </Row>
              <Row>
                <Col md={6} sm={6} xs={12}>
                  <IconBox type="left" iconClass="ti-package">
                    <h5>Expert, Modular Design</h5>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
                    </p>
                  </IconBox>
                </Col>
                <Col md={6} sm={6} xs={12}>
                  <IconBox type="left" bordered iconClass="ti-panel" iconSize="large">
                    <h5>Expert, Modular Design</h5>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
                    </p>
                  </IconBox>
                </Col>
              </Row>
            </Grid>
          </section>
          <Footer class="dark"/>
        </div>
      </div>
    )
  }
}

export default App
