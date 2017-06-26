import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

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
        // this.store.appState.timerMinutes = this.store.appState.timerMinutes - 1;

        // this.store.appState.timerSeconds = this.store.appState.timerSeconds + 60;
      } else {
        // Check if there are any hours remaining
        if (this.store.appState.timerHours > 0) {
          this.decreaseHours();
          // this.store.appState.timerHours = this.store.appState.timerHours - 1; // Decrease the hours by one

          // this.store.appState.timerMinutes = this.store.appState.timerMinutes + 60; // Add 60 minutes to minutes

          if (this.store.appState.timerMinutes > 0) {
            this.decreaseMinutes();
            // this.store.appState.timerMinutes = this.store.appState.timerMinutes - 1;

            // this.store.appState.timerSeconds = this.store.appState.timerSeconds + 60;
            // this.countDown();
          }
        }
      }

      if (this.store.appState.timerSeconds === 0) {
        clearInterval(this.timer);

        this.store.appState.timerIsFinished = true;
        this.store.appState.timerIsRunning = false;

        console.log('timer is finished: ' + this.store.appState.timerIsFinished);
      }
    }
  }

	render() {
		const store = this.store;

		return (
			<div className='page session'>
				<main>
  				<div className='home__hero'>
						<h4>Set the duration of your session.</h4>

            <div>h: {this.store.appState.timerHours} m: {this.store.appState.timerMinutes} s: {this.store.appState.timerSeconds}</div>

            <div>
              <button onClick={this.startTimer}>Start</button>
            </div>
  				</div>
				</main>
			</div>
		);
	}
}
