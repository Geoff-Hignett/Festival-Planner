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
