import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link, withRouter } from 'react-router-dom';

import Nav from './Nav';

// @withRouter
@inject('store')
@observer
export default class Header extends Component {
  constructor(props) {
    super(props);

    this.store = this.props.store.appState;
  }

  authenticate(e) {
    if (e) e.preventDefault();

    this.store.authenticate();
  }

  render() {
    const { authenticated } = this.store;

    return (
      <header className='header'>
        <Nav location={this.props.location} />

        {/* <a onClick={this.authenticate.bind(this)}>{authenticated ? 'Log out' : 'Sign in'}</a> */}
      </header>
    );
  }
}
