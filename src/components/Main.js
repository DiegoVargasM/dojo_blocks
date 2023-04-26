import React, { Component } from 'react';

const MainStyle = {
	backgroundColor: '#e06666',
	margin: '2% 1%',
	width: '70%',
	height: '80%',
	display: 'flex',
	flexDirection: 'column',
};

class Main extends Component {
	render() {
		return (
			<div style={MainStyle}>
				{this.props.children}
			</div>
		)
	}
}

export default Main
