import { Outlet, Link } from 'react-router-dom';
import ColorModeSelector from '../colorModeSelector.jsx';
import LoginButton from '../login/loginButton.jsx';
import RegisterButton from '../register/registerButton.jsx';

import ThemeContext from '../themeContext.jsx';
import React, { useContext } from 'react';

import '../../css/header.css';

const Layout = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<>
			<nav
				className={`nav ${
					theme === 'dark' ? 'dark-theme-header' : 'light-theme-header'
				}`}>
				<ul
					className={`ul ${
						theme === 'dark' ? 'dark-theme-list' : 'light-theme-list'
					}`}>
					<li className='nav-item btn-primary'>
						<Link to='/'>Home</Link>
					</li>
					<li className='nav-item btn-primary'>
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
		</>
	);
};

export default Layout;
