import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import LazyRoute from 'lazy-route';
import DevTools from 'mobx-react-devtools';

import Header from './Header';

@inject('store', 'routing')
@observer
export default class App extends Component {
	constructor(props) {
		super(props);

		this.store = this.props.store;
	}

	componentDidMount() {
		// this.authenticate(); // Disable automatic login
	}

	authenticate(e) {
		if (e) e.preventDefault();

		this.store.appState.authenticate();
	}

	render() {
		const {
			authenticated,
			authenticating,
			timeToRefresh,
			refreshToken,
			testval
		} = this.store.appState;

		return (
			<div className='wrapper'>
				{/*<DevTools />*/}
				<Header location={this.props.routing.location} />

				<Route
					exact
					path='/' // for production: /labs/zentime/
					render={props => (
						<LazyRoute {...props} component={import('./Home')} />
					)}
				/>

				{/* <Route
					exact
					path='/posts' // for production: /labs/zentime/posts
					render={props => (
						<LazyRoute {...props} component={import('./SubPage')} />
					)}
				/> */}

				<Route
					exact
					path='/why' // for production: /labs/zentime/about
					render={props => (
						<LazyRoute {...props} component={import('./Why')} />
					)}
				/>

				<Route
					exact
					path='/how' // for production: /labs/zentime/about
					render={props => (
						<LazyRoute {...props} component={import('./How')} />
					)}
				/>

				<Route
					exact
					path='/presets' // for production: /labs/zentime/about
					render={props => (
						<LazyRoute {...props} component={import('./Presets')} />
					)}
				/>

				<Route
					exact
					path='/register' // for production: /labs/zentime/register
					render={props => (
						<LazyRoute {...props} component={import('./Register')} />
					)}
				/>

				<Route
					exact
					path='/posts/:id' // for production: /labs/zentime/posts/:id
					render={props => (
						<LazyRoute {...props} component={import('./SubItem')} />
					)}
				/>

				<Route
					exact
					path='/login' // for production: /labs/zentime/login
					render={props => (
						<LazyRoute {...props} component={import('./Login')} />
					)}
				/>

				<Route
					exact
					path='/session' // for production: /labs/zentime/session
					render={props => (
						<LazyRoute {...props} component={import('./Session')} />
					)}
				/>

				<footer>
					{testval}
					<a href='https://twitter.com/alexdevero' target='_blank'>@alexdevero</a>

					{' '}
					| github:
					{' '}

					<a href='https://github.com/alexdevero' target='_blank'>alexdevero</a>

					{' '}
					| app repository:
					{' '}

					<a href='https://github.com/alexdevero/zentime-meditation-web-app' target='_blank'>ZenTime</a>
				</footer>
			</div>
		);
	}
}
