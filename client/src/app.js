import jquery from 'jquery';
import Bootstrap from 'bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';

import './sass/app.scss';

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

				asdasd
			</div>
		);
	}
}
ReactDOM.render(<App/>, document.getElementById('app'));
