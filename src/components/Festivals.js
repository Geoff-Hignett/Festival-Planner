import React, { Component } from 'react';
import Festival from './Festival';

class Festivals extends Component {
  state = {
    festivals: [
      {
        id: 1,
        name: "Reading",
        dates: "23 - 25 August 2019",
        website: "www.readingfestival.com"
      },
      {
        id: 2,
        name: "Glastonbury",
        dates: "26 - 30 June 2019",
        website: "www.glastonburyfestivals.co.uk"
      },
      {
        id: 3,
        name: "Latitude",
        dates: "18 - 21 July 2019",
        website: "www.latitudefestival.com"
      }
    ]
  };

  deleteDetails = (id) => {
    const { festivals } = this.state;

    const newFestivals = festivals.filter(festival =>
      festival.id !== id);

    this.setState({
      festivals: newFestivals
    });
  };

  render() {

    const { festivals } = this.state;

    return (
      <React.Fragment>
        {festivals.map(festival => (
          <Festival
            key={festival.id}
            festival={festival}
            deleteClickHandler={this.deleteDetails.bind(this, festival.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}


export default Festivals