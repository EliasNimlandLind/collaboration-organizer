/* import React, { useContext } from 'react';

import '../css/header.css';

import ThemeContext from './ThemeContext';
import ColorModeSelector from './colorModeSelector.jsx';
import LoginButton from './loginButton.jsx';
import RegisterButton from './registerButton.jsx';
import { Link, Outlet } from 'react-router-dom';

function Header() {
	const { theme } = useContext(ThemeContext);

	return (
		<header id='navigation-bar'>
			<nav
				className={`nav ${
					theme === 'dark' ? 'dark-theme-header' : 'light-theme-header'
				}`}>
				<ul
					className={`ul ${
						theme === 'dark' ? 'dark-theme-list' : 'light-theme-list'
					}`}>
					{' '}
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li className='nav-item'>
						<Link to='/privacy-policy'>Privacy policy</Link>
					</li>
					<li className='nav-item'>
						<RegisterButton></RegisterButton>
					</li>
					<li className='nav-item'>
						<LoginButton></LoginButton>
					</li>
					<li className='nav-item'>
						<ColorModeSelector></ColorModeSelector>
					</li>
				</ul>
			</nav>
			<Outlet />
		</header>
	);
}

export default Header;
 */
