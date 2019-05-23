import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import uuid from 'uuid';

class AddFestival extends Component {
  state = {
    name: '',
    dates: '',
    website: '',
    errors: {}
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();

    const { name, dates, website } = this.state;

    // Check For Errors
    if (name === '') {
      this.setState({
        errors: {
          name: 'Name is required'
        }
      });
      return;
    }

    if (dates === '') {
      this.setState({
        errors: {
          dates: 'Dates is required'
        }
      });
      return;
    }

    if (website === '') {
      this.setState({
        errors: {
          website: 'Website is required'
        }
      });
      return;
    }

    const newFestival = {
      id: uuid(),
      name,
      dates,
      website
    };

    dispatch({ type: 'ADD_FESTIVAL', payload: newFestival });
    // Clear
    this.setState({
      name: '',
      dates: '',
      website: '',
      errors: {}
    });

    this.props.history.push('/');
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, dates, website, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div>
              <div className="card mb-3">
                <div className="card-header">Add Festival</div>
                <div className="card-body">
                  <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                    <TextInputGroup
                      label="Name"
                      name="name"
                      placeholder="Enter Name"
                      value={name}
                      onChange={this.onChange}
                      error={errors.name}
                    />
                    <TextInputGroup
                      label="Dates"
                      name="dates"
                      placeholder="Enter Dates"
                      value={dates}
                      onChange={this.onChange}
                      error={errors.dates}
                    />
                    <TextInputGroup
                      label="Website"
                      name="website"
                      placeholder="Enter Website"
                      value={website}
                      onChange={this.onChange}
                      error={errors.website}
                    />
                    <input
                      type="submit"
                      value="Add Festival"
                      className="btn btn-light btn-block"
                    />
                  </form>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddFestival;
