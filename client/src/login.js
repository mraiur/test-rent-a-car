import jquery from 'jquery';
import Bootstrap from 'bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Nav from './components/public/Nav';

import './sass/login.scss';

class App extends React.Component{
	constructor(props)
	{
		super(props);
		this.state = {
			login: '',
			password: '',
			errorMessage: ''
		};
	}

	componentDidMount() {
	}

	onSubmit(e){
		console.log('submit', this.state);
		e.preventDefault();
		axios.post("/auth/login", this.state)
			.then( res => {
				console.log("res", res);
			})
			.catch(err=> {
				console.log("err", err);
				if(err.response.data && err.response.data.message )
				{
					this.setState({
						errorMessage: err.response.data.message
					});
				}
			})
	}

	fieldChange(event){
		console.log(event.target.name, event.target.value);
		let state = this.state;
		state[event.target.name] = event.target.value.trim();
		state['errorMessage'] = '';
		this.setState(state);
	}

	render()
	{
		let message = null;
		if( this.state.errorMessage )
		{
			message = <div className="alert alert-danger" key="msg">{this.state.errorMessage}</div>;
		}
		return (
			<div className="container-fluid d-flex h-100 flex-column">
				<Nav />
				<div className="wrapper fadeInDown">
					<div id="formContent">


						<div id="formHeader">
							<h2>Login</h2>
						</div>

						<div className="fadeIn first">
							<img src="/img/user_icon.svg" id="icon" alt="User Icon"/>
						</div>

						<form onSubmit={this.onSubmit.bind(this)}>
							<input type="text"
								   value={this.state.login}
								   name="login"
								   onChange={this.fieldChange.bind(this)}
								   className="fadeIn second"
								   placeholder="login" />
							<input type="text"
								   value={this.state.password}
								   name="password"
								   onChange={this.fieldChange.bind(this)}
								   className="fadeIn third"
								   placeholder="password"/>
							{message}
							<input type="submit" className="fadeIn fourth" value="Log In" />
						</form>



						<div id="formFooter">
							<a className="underlineHover" href="/auth/register">Register</a>
						</div>

					</div>
				</div>
			</div>
		);
	}
}
ReactDOM.render(<App/>, document.getElementById('app'));
