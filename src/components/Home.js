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
  						<div className='zentime-logo' />

  						<h1 className='zentime-name'>ZenTime</h1>
  					</div>

  					<div className='hero__content'>
  						<h4>A simple meditation timer to help you practice meditation.</h4>

              <p>
                Give it a try and <Link className='home-cta' to='/session'>start your first session!</Link>
              </p>
  					</div>
  				</div>
				</main>
			</div>
		);
	}
}
