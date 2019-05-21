import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Festival extends Component {
  state = {
    showDetails: false
  }

  onShowClick = e => {
    this.setState({
      showDetails: !this.state.showDetails
    })
  };

  onDeleteClick = () => {
    this.props.deleteClickHandler();
  }

  render() {
    const { name, dates, website } = this.props.festival;
    const { showDetails } = this.state;
    return (
      <div className="card card-body mb-3">
        <h4>
          {name}
          <i
            onClick={this.onShowClick}
            className="fas fa-sort-down"
          />
          <i className="fas fa-times"
            style={{
              cursor: "pointer", color: "red",
              float: "right"
            }}
            onClick={this.onDeleteClick}
          />
        </h4>
        {showDetails ? (
          <ul className="list-group">
            <li className="list-group-item">Dates: {dates}</li>
            <li className="list-group-item">Website: {website}</li>
          </ul>
        ) : null}
      </div>
    )
  };
};

Festival.propTypes = {
  festival: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired
};

export default Festival

