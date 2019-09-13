import React, { Component } from 'react';
import { connect } from 'react-redux';
import Person from '../../components/Person/Person';
import { actionGetPersonPending, actionGetPersonResolved, actionGetPersonFailed } from '../actions/person';

class PersonContainer extends Component {
  render() {
    return (
      <Person {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  console.log(this.props);
  return { person: state.person };
}

function mapDispatchToProps(dispatch) {
  return {
    getPersonPending: () => dispatch(actionGetPersonPending()),
    getPersonResolved: (data, id) => dispatch(actionGetPersonResolved(data, id)),
    getPersonFailed: (error) => dispatch(actionGetPersonFailed(error)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonContainer);
