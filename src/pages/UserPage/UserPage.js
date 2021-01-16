import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// CUSTOM COMPONENTS
import UserAdminContent from '../../components/UserAdminContent/UserAdminContent';
import UserManagerContent from '../../components/UserManagerContent/UserManagerContent';
import UserPeonContent from '../../components/UserPeonContent/UserPeonContent';

class UserPage extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM
  render() {
    let userContent = (
      <>
        <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>
        <p>Loading...</p>
      </>
    );

    if (this.props.store.user.access_level === 0) {
      <UserAdminContent />;
    } else if (this.props.store.user.access_level === 3) {
      <UserManagerContent />;
    } else if (this.props.store.user.access_level === 6) {
      <UserPeonContent />;
    }

    return <div>{userContent}</div>;
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
