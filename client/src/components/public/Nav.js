import React from "react";

export default class nav extends React.Component{
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
			<div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
				<a href="/" className="my-0 mr-md-auto font-weight-normal">Rent-a-Car</a>
				<a className="btn btn-outline-primary" href="/auth/login">Sing up</a>
			</div>
		);
	}
}