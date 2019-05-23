import React, { Component } from 'react';
import Festival from './Festival';
import { Consumer } from '../../context';

class Festivals extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { festivals } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Festival</span> List
              </h1>
              {festivals.map(festival => (
                <Festival key={festival.id} festival={festival} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Festivals;
