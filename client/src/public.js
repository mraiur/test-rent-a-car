import jquery from 'jquery';
import Bootstrap from 'bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/public/Nav';

import './sass/public.scss';

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
				asdasd
			</div>
		);
	}
}
ReactDOM.render(<App/>, document.getElementById('app'));
