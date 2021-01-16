import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../../components/LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';

// A logged in user landing page specific to an Peon User
class UserPeonContent extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>
          <p>
            You will be able to view all of your personal information and any
            notices sent out to your team. Contact your Manage if you have any
            issues.
          </p>
          <LogOutButton className="log-in" />
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(UserPeonContent);
