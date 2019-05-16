import jquery from 'jquery';
import Bootstrap from 'bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/public/Nav';

import './sass/register.scss';

class App extends React.Component{
	constructor(props)
	{
		super(props);
		this.state = {};
	}

	componentDidMount() {
	}

	render()
	{
		return (
			<div className="container-fluid d-flex h-100 flex-column">
				<Nav />
				<div className="wrapper fadeInDown">
					<div id="formContent">

						<div id="formHeader">
							<h2>Register</h2>
						</div>

						<div className="fadeIn first">
							<img src="/img/user_icon.svg" id="icon" alt="User Icon"/>
						</div>

						<form>
							<input type="text" id="login" className="fadeIn second" name="login" placeholder="login" />
							<input type="text" id="password" className="fadeIn third" name="password" placeholder="password"/>
							<input type="text" id="repeat_password" className="fadeIn fourth" name="repeat_password" placeholder="repeat password"/>
							<input type="submit" className="fadeIn fourth" value="Register" />
						</form>

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
