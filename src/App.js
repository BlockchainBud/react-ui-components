import React, { Component } from 'react'
import { Grid } from 'react-flexbox-grid'
import Header from './components/Header/Header'
import Button from './components/Button/Button'
import Footer from './components/Footer/Footer'

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
              <Button link="#" size="sm" rounded style={{}}>Button</Button>
              <Button link="#" rounded style={{}}>Button</Button>
              <Button link="#" style={{}}>Button</Button>
              <Button link="#" size="lg" style={{}}>Large Button</Button>
              <Button link="#" icon style={{}}><span className="ti-arrow-up"/></Button>
              <Button link="#" rounded size="lg" style={{}}>New Button</Button>
            </Grid>
          </section>
          <Footer class="dark"/>
        </div>
      </div>
    )
  }
}

export default App
