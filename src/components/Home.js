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
				<header>
					<div className='hero-unit'>
						<div className='zentime-logo' />

						<h1 className='zentime-name'>ZenTime</h1>
					</div>

					<div className='hero-subunit'>
						<h4>
							A simple meditation timer to help you practice meditation.
						</h4>
					</div>
				</header>

				<main>
					<div className='section-header extras'>
						<h4>Features:</h4>

						<hr />

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
