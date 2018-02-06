import React, { Component } from 'react';

class OutcomePage extends Component {
	constructor() {
		super();
		this.state = {
			Outcome: ''
		}
	}


	render() {
		return (
			<h2>
				{this.state.Outcome}
			</h2>
		);
	}
}

export default OutcomePage;