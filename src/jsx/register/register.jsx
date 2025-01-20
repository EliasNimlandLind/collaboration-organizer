import React, { useState } from 'react';

import { ToastContainer } from 'react-toastify';
import { displayToastError, displayToastSuccess } from '../message.jsx';

import { postUser } from '../user.js';

const Register = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleRegister = async () => {
		try {
			const data = await postUser(
				username,
				password,
				'http://localhost:3000/api/register'
			);

			if (data.status === 201) {
				localStorage.setItem('userRegistered', 'true');
				displayToastSuccess('Registration successful!');
			} else if (data.status === 400) {
				toast.error(data.message, { autoClose: 3000 });
			}
		} catch (error) {
			displayToastError(
				'An error occurred during registration. Please try again.'
			);
		}
	};

	return (
		<div>
			<h1>Register</h1>
			<form>
				<div>
					<label>Username:</label>
					<input
						type='text'
						value={username}
						onChange={(event) => setUsername(event.target.value)}
					/>
				</div>
				<div>
					<label>Password:</label>
					<input
						type='password'
						value={password}
						onChange={(event) => setPassword(event.target.value)}
					/>
				</div>
				<button
					type='button'
					onClick={handleRegister}>
					Register
				</button>
			</form>
			<ToastContainer />
		</div>
	);
};

export default Register;
