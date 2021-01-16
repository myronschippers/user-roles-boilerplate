import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../../components/LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';

// A logged in user landing page specific to an Admin User
class UserAdminContent extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1 id="welcome">
            Welcome, Administrator {this.props.store.user.username}!
          </h1>
          <p>
            Your administrative access will allow you to see more information
            than others. Use the power wisely.
          </p>
          <LogOutButton className="log-in" />
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(UserAdminContent);
