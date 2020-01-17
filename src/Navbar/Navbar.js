import React from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import logo from '../assets/logo.png';
import styles from './Navbar.module.css'

export function Navbar() {
	return(
		<div className={styles['nav-bar']}>
			<img src={logo} className={styles.logo} alt='logo'/>
			<SearchBar />
			<button className={`button ${styles['nav-button']}`}>Sign In</button>
			<button className={`button ${styles['nav-button']}`}>Register</button>
		</div>
	);
}