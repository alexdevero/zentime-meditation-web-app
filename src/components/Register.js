import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Button from './ui/Button';
import Input from './ui/Input';

@inject('store')
@observer
export default class Register extends Component {
	render() {
		return (
			<div className='page register'>
				<div className="container">
				  <div className="row">
				    <div className="col-md-6 push-md-3 col-lg-4 push-md-4">
				      <h1 className="h3">Create your account</h1>

              <form>
                <fieldset>
                  <label>Chose your username:</label>
                  <Input  />
                </fieldset>

                <fieldset>
                  <label>Choose your password:</label>
                  <Input />

                  <br />

                  <a>
                    <small>Show password</small>
                  </a>
                </fieldset>

                <fieldset>
                  <Button className='btn btn--primary' title='Create new account' />
                </fieldset>
              </form>
				    </div>
				  </div>
				</div>
			</div>
		);
	}
}
