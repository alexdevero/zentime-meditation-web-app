import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

@inject('store')
@observer
export default class Session extends Component {
	constructor(props) {
		super(props);

    this.state = {
      time: {},
      seconds: 5
    };
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
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;

    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    // Check if we're at zero.
    if (this.state.seconds === 0) {
      clearInterval(this.timer);
    }
  }

	render() {
		const store = this.store;

		return (
			<div className='page session'>
				<main>
  				<div className='home__hero'>
						<h4>Set the duration of your session.</h4>

            <div>m: {this.state.time.m} s: {this.state.time.s}</div>

            <div>
              <button onClick={this.startTimer}>Start</button>
            </div>
  				</div>
				</main>
			</div>
		);
	}
}
