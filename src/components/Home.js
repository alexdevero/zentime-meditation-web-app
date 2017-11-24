import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

@inject('store')
@observer
export default class Home extends Component {
  constructor(props) {
    super(props);

    this.store = this.props.store;
  }

  render() {
    const store = this.store;

    return (
      <div className='page home'>
        <main className='main--centered'>
          <div className='home__hero'>
            <div className='hero__logo'>
              <div className='icon icon--zentime-logo' />

              <h1 className='zentime-name'>ZenTime</h1>
            </div>

            <div className='hero__content'>
              <h4>Meditation practice made simple.</h4>

              <Link className='btn btn--primary mt-2' to='/session'>Start your session</Link> {/* for prodution use to='/labs/zentime/session' */}
            </div>
          </div>
        </main>
      </div>
    );
  }
}
