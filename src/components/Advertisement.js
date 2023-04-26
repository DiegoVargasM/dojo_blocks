import React, { Component } from 'react';

const AdStye = {
	backgroundColor: '#b4a7d6',
	margin: '2% 3%',
	width: '94%',
	height: '80%',
	display: 'flex',
	flexDirection: 'column',
};

class Advertisement extends Component {
	render() {
		return (
			<div style={AdStye}>Advertisement</div>
		)
	}
}

export default Advertisement
