import React, { Component } from 'react';
import Festivals from './components/festivals/Festivals';
import Header from './components/layout/Header';
import AddFestival from './components/festivals/AddFestival';

import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Festival Planner" />
          <div className="container">
            <AddFestival />
            <Festivals />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
