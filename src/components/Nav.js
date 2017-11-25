import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Route, Link } from 'react-router-dom';

import ActiveLink from './ui/ActiveLink';

@inject('store')
@observer
export default class Nav extends Component {
  constructor(props) {
    super(props);

    this.store = this.props.store.appState;
  }

  authenticate(e) {
    if (e) e.preventDefault();

    this.props.store.authenticate();
  }

  render() {
    const { authenticated, authenticating } = this.store;

    return (
      <nav className='nav'>
        <ActiveLink activeOnlyWhenExact={true} to='/'>Home</ActiveLink>{/* for prodution use to='/labs/zentime/' */}

        <ActiveLink activeOnlyWhenExact={true} to='/why'>Why</ActiveLink>{/* for prodution use to='/labs/zentime/about' */}

        <ActiveLink activeOnlyWhenExact={true} to='/how'>How</ActiveLink>{/* for prodution use to='/labs/zentime/how' */}

        <ActiveLink activeOnlyWhenExact={true} to='/presets'>Presets</ActiveLink>{/* for prodution use to='/labs/zentime/presets' */}

        <ActiveLink activeOnlyWhenExact={true} to='/session'>Session</ActiveLink>{/* for prodution use to='/labs/zentime/presets' */}

        {/* <ActiveLink activeOnlyWhenExact={true} to='/register'>Register</ActiveLink> */}

        {/* {authenticated && <ActiveLink to='/posts'>Presets</ActiveLink>} */}
      </nav>
    );
  }
}
