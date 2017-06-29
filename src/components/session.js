import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

import Button from './ui/Button';
import Input from './ui/Input';

import classNames from 'classnames';

@inject('store')
@observer
export default class Session extends Component {
	constructor(props) {
		super(props);

    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);

		this.store = this.props.store;
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

  decreaseHours() {
    this.store.appState.timerHours = this.store.appState.timerHours - 1;

    this.store.appState.timerMinutes = this.store.appState.timerMinutes + 60;
  }

  decreaseMinutes() {
    this.store.appState.timerMinutes = this.store.appState.timerMinutes - 1;

    this.store.appState.timerSeconds = this.store.appState.timerSeconds + 60;
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.store.appState.timerSeconds - 1;// this.state.seconds - 1;

    this.store.appState.time = this.secondsToTime(seconds);
    this.store.appState.timerSeconds = seconds;

    // Check if we're at zero.
    if (this.store.appState.timerSeconds === 0) {
      // Check if there are any minutes remaining
      if (this.store.appState.timerMinutes > 0) {
        this.decreaseMinutes();

        this.countDown();
      } else {
        // Check if there are any hours remaining
        if (this.store.appState.timerHours > 0) {
          this.decreaseHours();

          this.countDown();
          if (this.store.appState.timerMinutes > 0) {
            this.decreaseMinutes();

            this.countDown();
          }
        }
      }

      if (this.store.appState.timerSeconds === 0) {
        clearInterval(this.timer);

        this.store.appState.timerIsFinished = true;
        this.store.appState.timerIsRunning = false;
        this.timer = 0;

        console.log('timer is finished: ' + this.store.appState.timerIsFinished);
      }
    }
  }

  updateTimer(event) {
    let timerType = event.target.name;
    let userInput = event.target.value;

    this.store.appState.timerIsFinished = false;
    this.store.appState.timerIsRunning = false;
    this.store.appState.timerIsStopped = false;

    if (timerType.indexOf('hours') !== -1) {
      this.store.appState.timerHours = userInput;
    } else if (event.target.name.indexOf('minutes') !== -1) {
      this.store.appState.timerMinutes = userInput;
    } else if (event.target.name.indexOf('seconds') !== -1)  {
      this.store.appState.timerSeconds = userInput;
    }
  }

  formatTimerValues(value) {
    if (value.toString().length === 1) {
      return ('0' + value);
    }
  }

	render() {
		const store = this.store;

		return (
			<div className='page session'>
				<main>
  				<div className='home__hero'>
						<h4>Set the duration of your session.</h4>

            <div className={classNames('session-timer form-inline', this.store.appState.timerIsRunning && 'hidden')}>
              <Input value={/*this.formatTimerValues(*/this.store.appState.timerHours/*)*/} onChange={this.updateTimer.bind(this)} className='form-control' name='timer-hours' type='text' />

              <Input value={/*this.formatTimerValues(*/this.store.appState.timerMinutes/*)*/} onChange={this.updateTimer.bind(this)} className='form-control' name='timer-minutes' type='text' />

              <Input value={/*this.formatTimerValues(*/this.store.appState.timerSeconds/*)*/} onChange={this.updateTimer.bind(this)} className='form-control' name='timer-seconds' type='text' />
            </div>

            <div className={classNames('session-countdown', !this.store.appState.timerIsRunning && 'hidden')}>
              {this.store.appState.timerHours} h : {this.store.appState.timerMinutes} m : {this.store.appState.timerSeconds} s
            </div>

            <div>
              {!this.store.appState.timerIsStopped && <Button className={classNames('btn', !this.store.appState.timerIsRunning ? 'btn btn--secondary' : 'btn btn--danger')} onClick={this.startTimer} title={!this.store.appState.timerIsRunning? 'Start session' : 'Stop session'} />}

              {this.store.appState.timerIsStopped && <Button className='btn btn--primary' onClick={this.startTimer} title='Restart Timer' />}
            </div>
  				</div>
				</main>
			</div>
		);
	}
}
