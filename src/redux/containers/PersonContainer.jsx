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
  return { person: state.person };
}

function mapDispatchToProps(dispatch) {
  return {
    getPersonPending: () => dispatch(actionGetPersonPending()),
    getPersonResolved: (data) => dispatch(actionGetPersonResolved(data)),
    getPersonFailed: (error) => dispatch(actionGetPersonFailed(error)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonContainer);
