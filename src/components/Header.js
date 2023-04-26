import React, { Component } from 'react';
import styles from './Header.module.css';

const HeaderStyle = {
	backgroundColor: '#6aa84f',
	margin: '2% 1%',
	height: '20%'
};


class Header extends Component {
	render() {
		return (
			<div className={styles.header} style={HeaderStyle}>Header</div>
		)
	}
}
export default Header;
