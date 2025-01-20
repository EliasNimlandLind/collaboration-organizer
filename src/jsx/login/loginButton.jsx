import React, { useState, useEffect } from 'react';
import LoginForm from './loginForm.jsx';

function LoginButton() {
	const [showLoginForm, setShowLoginForm] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem('token');
		setIsLoggedIn(!!token);
	}, []);

	const handleButtonClick = () => {
		if (isLoggedIn) {
			localStorage.removeItem('token');
			setIsLoggedIn(false);
			window.location.reload();
		} else {
			setShowLoginForm((prevShowLoginForm) => !prevShowLoginForm);
		}
	};

	return (
		<div>
			<button
				id='register-button'
				className='btn btn-primary'
				onClick={handleButtonClick}>
				{isLoggedIn
					? 'Log out'
					: showLoginForm
					? 'Hide login form'
					: 'Show log in form'}
			</button>
			{!isLoggedIn && showLoginForm && (
				<LoginForm setIsLoggedIn={setIsLoggedIn} />
			)}
		</div>
	);
}

export default LoginButton;
