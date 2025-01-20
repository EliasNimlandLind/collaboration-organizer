import React, { useState } from 'react';
import RegisterForm from './registerForm.jsx';

function LoginButton() {
	const [showRegisterForm, setShowRegisterForm] = useState(false);

	const handleButtonClick = () => {
		setShowRegisterForm((prevShowLoginForm) => !prevShowLoginForm);
	};

	return (
		<div>
			<button
				id='register-button'
				className='btn btn-primary'
				onClick={handleButtonClick}>
				{showRegisterForm ? 'Hide registration form' : 'Show registration form'}
			</button>
			{showRegisterForm && <RegisterForm />}
		</div>
	);
}

export default LoginButton;
