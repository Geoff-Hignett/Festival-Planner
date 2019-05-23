import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Festivals from './components/festivals/Festivals';
import AddFestival from './components/festivals/AddFestival';
import Header from './components/layout/Header';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Festival Planner" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Festivals} />
                <Route exact path="/festival/add" component={AddFestival} />
                <Route exact path="/about/" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
