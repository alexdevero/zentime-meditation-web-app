import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

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
				<main>
  				<div className='home__hero'>
  					<div className='hero__logo'>
  						<div className='zentime-logo' />

  						<h1 className='zentime-name'>ZenTime</h1>
  					</div>

  					<div className='hero__content'>
  						<h4>A simple meditation timer to help you practice meditation.</h4>

              <a>Let's start your first session!</a>
  					</div>
  				</div>

					<div className='home__features'>
						<h4>Main features:</h4>

						<ul>
							<li>✓ Simple to set up</li>

							<li>✓ No clutter</li>

							<li>✓ Ready-to-use presets</li>
						</ul>
					</div>
				</main>
			</div>
		);
	}
}
