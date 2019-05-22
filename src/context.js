import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_FESTIVAL':
      return {
        ...state,
        festivals: state.festivals.filter(
          festival => festival.id !== action.payload
        )
      };
    case 'ADD_FESTIVAL':
      return {
        ...state,
        festivals: [action.payload, ...state.festivals]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    festivals: [
      {
        id: 1,
        name: 'Reading',
        dates: '23 - 25 August 2019',
        website: 'www.readingfestival.com'
      },
      {
        id: 2,
        name: 'Glastonbury',
        dates: '26 - 30 June 2019',
        website: 'www.glastonburyfestivals.co.uk'
      },
      {
        id: 3,
        name: 'Latitude',
        dates: '18 - 21 July 2019',
        website: 'www.latitudefestival.com'
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
