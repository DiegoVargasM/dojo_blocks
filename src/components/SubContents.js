import React, { Component } from 'react';

const SubContentStyle = {
	backgroundColor: '#ffd966',
	width: '30%',
	heigth: '66%',
	margin: '2% 3%'
};

class SubContents extends Component {
	render() {
		return (
			<div  style={SubContentStyle}>Subcontents</div>
		)
	}
}

export default SubContents
