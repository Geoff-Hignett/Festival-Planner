import React, { Component } from 'react';
import Festivals from "./components/Festivals";
import Header from "./components/Header";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Header branding="Festival Planner" />
        <div className="container">
          <Festivals />
        </div>
      </div>
    );
  }
}

export default App;
