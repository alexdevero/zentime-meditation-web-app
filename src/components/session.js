import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

@inject('store')
@observer
export default class Session extends Component {
	constructor(props) {
		super(props);

		this.store = this.props.store;
	}

	render() {
		const store = this.store;

		return (
			<div className='page session'>
				<main>
  				<div className='home__hero'>
						<h4>Set the duration of your session.</h4>
  				</div>
				</main>
			</div>
		);
	}
}
