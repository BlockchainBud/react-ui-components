import React from 'react'
import { storiesOf } from '@storybook/react'
import '../index.scss'
import '../../public/css/themify-icons.css'
import Header from '../components/Header/Header'
import Button from '../components/Button/Button'
import {TextImage, Text, Image} from '../components/TextImage/TextImage'
import TextImage1 from '../img/phone1.png'
import TextImage2 from '../img/phone2.png'
import Modal from '../components/Modal/Modal'
import { Row, Col } from 'react-flexbox-grid'
import IconBox from '../components/IconBox/IconBox'

storiesOf('Header', module)
  .add('Light', () => (
    <Header headerStyle="light"/>
  ))
  .add('Dark', () => (
    <Header headerStyle="dark"/>
  ))

storiesOf('Buttons', module)
  .add('Normal', () => (
    <div>
      <Button link="#" size="sm">Button Small</Button>
      <Button link="#">Button Regular</Button>
      <Button link="#" size="lg">Button Large</Button>
    </div>
  ))
  .add('Round', () => (
    <div>
      <Button link="#" size="sm" rounded>Button Small</Button>
      <Button link="#" rounded>Button Regular</Button>
      <Button link="#" size="lg" rounded>Button Large</Button>
    </div>
  ))
  .add('With Icon', () => (
    <div>
      <Button link="#" size="sm" icon><span className="ti-arrow-up"/></Button>
      <Button link="#" icon><span className="ti-arrow-up"/></Button>
      <Button link="#" size="lg" icon><span className="ti-arrow-up"/></Button>
    </div>
  ))
  .add('Custom Buttons', () => (
    <div>
      <Button link="#" size="sm" style={{
        color: 'white',
        backgroundColor: 'blue',
        borderColor: 'yellow',
        hoverColor: 'blue',
        hoverBgColor: 'white',
        hoverBorderColor: 'blue'
      }}>Button Small</Button>
      <Button link="#" style={{
        color: 'red',
        backgroundColor: 'green',
        borderColor: 'black',
        hoverColor: 'orange',
        hoverBgColor: 'pink',
        hoverBorderColor: 'purple'
      }}>Button Regular</Button>
      <Button link="#" size="lg" style={{
        color: 'red',
        backgroundColor: 'green',
        borderColor: 'black',
        hoverColor: 'orange',
        hoverBgColor: 'pink',
        hoverBorderColor: 'purple'
      }}>Button Regular</Button>
    </div>
  ))

storiesOf('Text Image', module)
  .add('Left', () => (
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
  ))
  .add('Right', () => (
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
  ))

storiesOf('Modal', module)
  .add('Short Text Modal', () => (
    <Modal ButtonLabel='Short Text Modal'>
      <h3>Hey there, I'm a cool multi-purpose modal. Use me for almost anything!</h3>
      <hr/>
      <p>Convergence unicorn thinker-maker-doer ideate thinker-maker-doer pitch deck piverate food-truck long shadow disrupt. Sticky note engaging latte integrate driven convergence food-truck pitch deck. Quantitative vs. qualitative disrupt sticky note piverate 360 campaign co-working bootstrapping long shadow actionable insight agile latte. Thinker-maker-doer bootstrapping integrate personas long shadow Steve Jobs entrepreneur sticky note ship it grok sticky note.</p>
      <p>Grok Steve Jobs user centered design driven earned media food-truck waterfall is so 2000 and late human-centered design workflow ideate sticky note actionable insight entrepreneur unicorn. Experiential parallax physical computing disrupt cortado human-centered design intuitive grok bootstrapping quantitative vs. qualitative driven.</p>
    </Modal>
  ))
  .add('Long Text Modal', () => (
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
  ))

storiesOf('Icon Box', module)
  .add('Style 1', () => (
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
  ))
  .add('Style 2', () => (
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
  ))
  .add('Style 3', () => (
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
  ))
