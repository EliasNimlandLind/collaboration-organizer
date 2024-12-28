import { Outlet, Link } from 'react-router-dom';
import ColorModeSelector from '../colorModeSelector.jsx';
import LoginButton from '../loginButton.jsx';
import RegisterButton from '../registerButton.jsx';

import '../../css/header.css';

const Layout = () => {
	return (
		<>
			<nav>
				<ul className='nav-list'>
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
