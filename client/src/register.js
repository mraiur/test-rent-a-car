import jquery from 'jquery';
import Bootstrap from 'bootstrap';
import Veriff from '@veriff/js-sdk';

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Nav from './components/public/Nav';

import './sass/register.scss';

class App extends React.Component{
	constructor(props)
	{
		super(props);
		this.state = {
			step: 1,
			login: '',
			password: '',
			repeat_password: '',
			errorMessages: []
		};
	}

	componentDidMount()
	{
		const veriff = Veriff({
			env: "production",
			apiKey: VERIFF_KEY,
			parentId: "veriff-root",
			onSession: function(err, response) {
				// Access verification ID through "response.verification.id"
				location.replace(response.verification.url);
			}
		});
		veriff.mount();
	}

	onSubmit(e){
		let state = this.state;
		e.preventDefault();
		let isValid = true;
		let errorMessages = [];
		if( state.password !== state.repeat_password)
		{
			errorMessages.push("Passwords dont match");
			isValid = false;
		}

		if( state.login.trim().length < 2 )
		{
			errorMessages.push("Login is too short");
			isValid = false;
		}

		if(isValid)
		{
			axios.post("/auth/register", this.state)
				.then( res => {
					console.log("res", res);
				})
				.catch(err=> {
					console.log("err", err);
					if(err.response.data && err.response.data.message )
					{
						this.setState({
							errorMessage: [err.response.data.message]
						});
					}
				})
		}
		else
		{
			state['errorMessages'] = errorMessages;
			this.setState(state);
		}
	}

	fieldChange(event){
		let state = this.state;
		state[event.target.name] = event.target.value.trim();
		state['errorMessages'] = [];
		this.setState(state);
	}

	render()
	{
		let messages = null;
		if( this.state.errorMessages )
		{
			messages = [];
			this.state.errorMessages.forEach( (msg, index) => {
				messages.push(<div className="alert alert-danger" key={`msg-${index}`}>{msg}</div>);
			});

		}

		return (
			<div className="container-fluid d-flex h-100 flex-column">
				<Nav />
				<div className="wrapper fadeInDown">
					<div id="formContent">

						<div id="formHeader">
							<h2>Register</h2>
						</div>

						<div className="fadeIn first">
							<div id="veriff-root" />
						</div>

						{messages}
						<div id="formFooter">
							<a className="underlineHover" href="/auth/login">Login</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
ReactDOM.render(<App/>, document.getElementById('app'));
