import React, { Component } from 'react';
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";

class App extends Component {
  render() {
    return (
      <div className="App">
          {/* You can use light, dark and transparent style  */}
          <Header headerStyle="dark" />
          <div className="main-container">
            <section>
              <div className="container">
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
                      style={{}}
                    >Button
                  </Button>

                  <Button
                      link="#"
                      size="lg"
                      style={{}}
                    >Button
                  </Button>

                    <Button
                      link="#"
                      icon
                      style={{}}
                    ><i className="ti-arrow-up"></i>
                  </Button>
              </div>
            </section>
          </div>
      </div>
    );
  }
}

export default App;
