import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { displayToastError } from '../message';

const loginUser = async (username, password) => {
	const response = await fetch('http://localhost:3000/api/login', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ username, password }),
	});

	const data = await response.json();
	return data;
};

const Login = ({ setIsLoggedIn }) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = async () => {
		try {
			const data = await loginUser(username, password);

			if (data.token) {
				localStorage.setItem('token', data.token);
				setIsLoggedIn(true);
			}
			window.location.reload(false);
		} catch (error) {
			displayToastError(
				'An error occurred during registration. Please try again.'
			);
		}
	};

	return (
		<div>
			<h1>Login</h1>
			<input
				type='text'
				placeholder='Username'
				value={username}
				onChange={(event) => setUsername(event.target.value)}
			/>
			<input
				type='password'
				placeholder='Password'
				value={password}
				onChange={(event) => setPassword(event.target.value)}
			/>
			<button onClick={handleLogin}>Login</button>
			<ToastContainer />
		</div>
	);
};

export default Login;
