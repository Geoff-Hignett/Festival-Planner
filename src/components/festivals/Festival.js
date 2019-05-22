import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';

class Festival extends Component {
  state = {
    showDetails: false
  };

  onShowClick = e => {
    this.setState({
      showDetails: !this.state.showDetails
    });
  };

  onDeleteClick = (id, dispatch) => {
    dispatch({ type: 'DELETE_FESTIVAL', payload: id });
  };

  render() {
    const { id, name, dates, website } = this.props.festival;
    const { showDetails } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}
                <i onClick={this.onShowClick} className="fas fa-sort-down" />
                <i
                  className="fas fa-times"
                  style={{
                    cursor: 'pointer',
                    color: 'red',
                    float: 'right'
                  }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
              </h4>
              {showDetails ? (
                <ul className="list-group">
                  <li className="list-group-item">Dates: {dates}</li>
                  <li className="list-group-item">Website: {website}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Festival.propTypes = {
  festival: PropTypes.object.isRequired
};

export default Festival;
