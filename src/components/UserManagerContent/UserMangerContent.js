import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../../components/LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';

// A logged in user landing page specific to an Manager User
class UserManagerContent extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1 id="welcome">
            Welcome, Manager {this.props.store.user.username}!
          </h1>
          <p>
            Your manager access will allow you to see information specific to
            employees on your team. Contact an Administrator if you have any
            issues.
          </p>
          <LogOutButton className="log-in" />
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(UserManagerContent);
