import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

import classNames from 'classnames';

import Button from './ui/Button';
import Input from './ui/Input';

import bellSound from '../sounds/bell-tone.mp3';

@inject('store')
@observer
export default class Session extends Component {
  constructor(props) {
    super(props);

    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.restartTimer = this.restartTimer.bind(this);
    this.countDown = this.countDown.bind(this);

    this.playBellSound = this.playBellSound.bind(this);

    this.store = this.props.store;
  }

  componentDidMount() {
    console.log(`seconds: ${this.store.appState.timerSeconds}, minutes: ${this.store.appState.timerMinutes}, hours: ${this.store.appState.timerHours}`);
  }

  secondsToTime(secs){
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      'h': hours,
      'm': minutes,
      's': seconds
    };

    return obj;
  }

  startTimer() {
    if (this.timer === 0) {
      this.store.appState.timerIsRunning = true;
      this.timer = setInterval(this.countDown, 1000);
    } else {
      this.store.appState.timerIsRunning = false;
      this.store.appState.timerIsStopped = true;

      clearInterval(this.timer);
    }
  }

  restartTimer() {
    this.store.appState.timerIsRunning = true;
    this.store.appState.timerIsStopped = false;
    this.timer = setInterval(this.countDown, 1000);
  }

  decreaseHours() {
    this.store.appState.timerHours = this.store.appState.timerHours - 1;

    this.store.appState.timerMinutes = this.store.appState.timerMinutes + 60;
    console.log('decrease hours');
  }

  decreaseMinutes() {
    this.store.appState.timerMinutes = this.store.appState.timerMinutes - 1;

    this.store.appState.timerSeconds = this.store.appState.timerSeconds + 60;
    console.log('decrease minutes');
  }

  countDown() {
    if (this.store.appState.timerHours > 0 || this.store.appState.timerMinutes > 0 || this.store.appState.timerSeconds > 0) {
      if (this.store.appState.timerSeconds === 0) {
        // If there are no seconds remaining
        // Check if there are any minutes remaining
        if (this.store.appState.timerMinutes > 0) {
          this.decreaseMinutes();

          this.countDown();
        } else if (this.store.appState.timerHours > 0) {
          // Check if there are any hours remaining
          this.decreaseHours();

          this.countDown();
        }
      } else {
        // If there is at least 1 second remaining
        // Remove one second, set state so a re-render happens.
        let seconds = this.store.appState.timerSeconds - 1;// this.state.seconds - 1;

        this.store.appState.time = this.secondsToTime(seconds);
        this.store.appState.timerSeconds = seconds;
      }
    } else {
      // Otherwise, play bell sound
      this.playBellSound();

      // Reset countdown
      clearInterval(this.timer);

      // Reset observables
      this.store.appState.timerIsFinished = true;
      this.store.appState.timerIsRunning = false;
      this.timer = 0;

      console.log('timer is finished: ' + this.store.appState.timerIsFinished);
    }
  }

  playBellSound() {
    const bellSoundFile = new Audio(bellSound);

    bellSoundFile.volume = 1; // 0.5 is half volume

    bellSoundFile.play();
  }

  renderButtons() {
    if (!this.store.appState.timerIsStopped) {
      return <Button className={classNames('btn btn--round', !this.store.appState.timerIsRunning ? 'btn btn--primary' : 'btn btn--danger')} onClick={this.startTimer} title={!this.store.appState.timerIsRunning ? <span className='fa fa-play'></span> : <span className='fa fa-pause'></span>} />
    } else {
      return <Button className='btn btn--round btn--primary' onClick={this.restartTimer} title={<span className='fa fa-play'></span>} />
    }
  }

  updateTimer(event) {
    let timerType = event.target.name;
    let userInput = event.target.value;

    this.store.appState.timerIsFinished = false;
    this.store.appState.timerIsRunning = false;
    this.store.appState.timerIsStopped = false;
    this.timer = 0;

    if (timerType.indexOf('hours') !== -1) {
      this.store.appState.timerHours = userInput;
    } else if (event.target.name.indexOf('minutes') !== -1) {
      this.store.appState.timerMinutes = userInput;
    } else if (event.target.name.indexOf('seconds') !== -1)  {
      this.store.appState.timerSeconds = userInput;
    }
  }

  render() {
    const store = this.store;

    return (
      <div className='page session'>
        <main className='main--centered'>
          <div className='home__hero'>
            <h4 className={classNames('h4', this.store.appState.timerIsRunning && 'hidden')}>Set the duration of your session.</h4>

            <div className={classNames('session-timer form-inline', this.store.appState.timerIsRunning && 'hidden')}>
              <div className='session-timer__input'>
                <Input value={this.store.appState.timerHours} onChange={this.updateTimer.bind(this)} className='form-control' name='timer-hours' type='text' />
                <label className='form-label' htmlFor='timer-hours'>h</label>
              </div>

              <div className='session-timer__input'>
                <span>:&nbsp;</span>
                <Input value={this.store.appState.timerMinutes} onChange={this.updateTimer.bind(this)} className='form-control' name='timer-minutes' type='text' />
                <label className='form-label' htmlFor='timer-minutes'>m</label>
                <span>&nbsp;:</span>
              </div>

              <div className='session-timer__input'>
                <Input value={this.store.appState.timerSeconds} onChange={this.updateTimer.bind(this)} className='form-control' name='timer-seconds' type='text' />
                <label className='form-label' htmlFor='timer-seconds'>s</label>
              </div>
            </div>

            <div className={classNames('session-countdown', !this.store.appState.timerIsRunning && 'hidden')}>
              <span className='countdown__value'>{this.store.appState.timerHours} h<span className='countdown__divider'>:</span></span>
              <span className='countdown__value'>{this.store.appState.timerMinutes} m<span className='countdown__divider'>:</span></span>
              <span className='countdown__value'>{this.store.appState.timerSeconds} s</span>
            </div>

            <div>
              {this.renderButtons()}
            </div>
          </div>
        </main>
      </div>
    );
  }
}
