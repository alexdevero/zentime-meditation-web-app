import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Button from './ui/Button';
import Input from './ui/Input';

@inject('store')
@observer
export default class Register extends Component {
  constructor(props) {
		super(props);

    this.showPassword = this.showPassword.bind(this);
    this.createAccount = this.createAccount.bind(this);

		this.store = this.props.store;
	}

  showPassword() {
    const passwordInput = document.querySelector('.input-password');

    // Switch between 'true' and 'false' (passwordIsVisible)
    this.store.appState.passwordIsVisible = !this.store.appState.passwordIsVisible
  }

  createAccount() {
    const regPassword = document.querySelector('.input-password');
    const regUsername = document.querySelector('.input-username');
    let storedPassword = this.store.appState.registerPassword;
    let storedUsername = this.store.appState.registerUsername;

    // Create new account if password and username contain characters
    if (regPassword.value.length !== 0 && regUsername.value.length !== 0) {
      storedPassword = regPassword.value;
      storedUsername = regUsername.value;

      console.log(`Your username is ${storedUsername} and your password is ${storedPassword}.`);
    } else {
      if (regPassword.value.length === 0) {
        regPassword.classList.add('has-error');
      } else {
        regPassword.classList.remove('has-error');
      }

      if (regUsername.value.length === 0) {
        regUsername.classList.add('has-error');
      } else {
        regUsername.classList.remove('has-error');
      }
    }
  }

	render() {
		return (
			<div className='page register'>
				<main className='main--centered'>
				  <div className="container">
				    <div className="row">
				      <div className="col-md-6 push-md-3 col-lg-4 push-md-4">
				        <h1 className="h3 text--light">Create your account</h1>

                <hr className='divider' />

                <form>
                  <fieldset>
                    <label className='form-label' htmlFor='register-username'>Chose your username:</label>
                    <Input className='form-control input-username' id='register-username'  onChange={this.storeUsername} name='register-username' type='text' />
                  </fieldset>

                  <fieldset>
                    <label className='form-label' htmlFor='register-password'>Choose your password:</label>
                    <Input className='form-control input-password' id='register-password' onChange={this.storePassword} name='register-password' type={this.store.appState.passwordIsVisible ? 'text' : 'password'} />

                    <a onClick={this.showPassword}>
                      <small>
                        <strong>{!this.store.appState.passwordIsVisible ? 'Show password' : 'Hide password'}</strong>
                      </small>
                    </a>
                  </fieldset>

                  <fieldset>
                    <Button className='btn btn--primary' onClick={this.createAccount} title='Create new account' />
                  </fieldset>
                </form>
				      </div>
				    </div>
				  </div>
				</main>
			</div>
		);
	}
}
