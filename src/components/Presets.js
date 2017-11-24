import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

import classNames from 'classnames';

import Button from './ui/Button';

@inject('store')
@observer
export default class Presets extends Component {
  constructor(props) {
    super(props);

    this.usePresetFive = this.usePresetFive.bind(this);
    this.usePresetTwentyFive = this.usePresetTwentyFive.bind(this);
    this.usePresetFifty = this.usePresetFifty.bind(this);

    this.store = this.props.store;
  }

  usePresetFive() {
    console.log('Preset 5');

    this.store.appState.timerHours = 0;
    this.store.appState.timerMinutes = 5;
    this.store.appState.timerSeconds = 0;

    this.store.appState.presetSet = true;
    this.store.appState.presetFiveSet = true;
    this.store.appState.presetTwentyFiveSet = false;
    this.store.appState.presetFiftySet = false;

    console.log(`seconds: ${this.store.appState.timerSeconds}, minutes: ${this.store.appState.timerMinutes}, hours: ${this.store.appState.timerHours}`);
  }

  usePresetTwentyFive() {
    console.log('Preset 25');

    this.store.appState.timerHours = 0;
    this.store.appState.timerMinutes = 25;
    this.store.appState.timerSeconds = 0;

    this.store.appState.presetSet = true;
    this.store.appState.presetFiveSet = false;
    this.store.appState.presetTwentyFiveSet = true;
    this.store.appState.presetFiftySet = false;

    console.log(`seconds: ${this.store.appState.timerSeconds}, minutes: ${this.store.appState.timerMinutes}, hours: ${this.store.appState.timerHours}`);
  }

  usePresetFifty() {
    console.log('Preset 50');

    this.store.appState.timerHours = 0;
    this.store.appState.timerMinutes = 50;
    this.store.appState.timerSeconds = 0;

    this.store.appState.presetSet = true;
    this.store.appState.presetFiveSet = false;
    this.store.appState.presetTwentyFiveSet = false;
    this.store.appState.presetFiftySet = true;

    console.log(`seconds: ${this.store.appState.timerSeconds}, minutes: ${this.store.appState.timerMinutes}, hours: ${this.store.appState.timerHours}`);
  }

  render() {
    return (
      <div className='page presets'>
        <main className='main--centered'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 push-md-3'>
                <div className='presets__presets'>
                  <div className="icon icon--stopwatch"></div>

                  <h4 className='h4 text-center'>Presets to help you start</h4>

                  <p className='mt-4 mb-4 text-center'>Not sure how long should your meditation session be? No problem! Here are some presets to help you get started.</p>

                  <ul className='list-unstyled text--light'>
                    <li>
                      <Button className={classNames('preset', this.store.appState.presetFiveSet && 'preset--active')} onClick={this.usePresetFive} title={<span>
                        <span className='preset__time'>5</span><span className='preset__unit'>mins</span></span>} />
                    </li>

                    <li>
                      <Button className={classNames('preset', this.store.appState.presetTwentyFiveSet && 'preset--active')} onClick={this.usePresetTwentyFive} title={<span>
                        <span className='preset__time'>25</span><span className='preset__unit'>mins</span></span>} />
                    </li>

                    <li>
                      <Button className={classNames('preset', this.store.appState.presetFiftySet && 'preset--active')} onClick={this.usePresetFifty} title={<span>
                        <span className='preset__time'>50</span><span className='preset__unit'>mins</span></span>} />
                    </li>
                  </ul>

                  <div className={classNames('mt-5 text-center', !this.store.appState.presetSet && 'hidden')}>
                    <Link className='btn btn--primary' to='/session'>Go to timer</Link> {/* for prodution use to='/labs/zentime/session' */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
