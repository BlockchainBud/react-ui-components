import React, { Component } from 'react';
import Header from "./components/Header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
          {/* You can use light, dark and transparent style  */}
          <Header headerStyle="dark" />
      </div>
    );
  }
}

export default App;
