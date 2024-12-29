import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
				toast.success('Registration successful!', { autoClose: 3000 });
			} else if (data.status === 400) {
				toast.error(data.message, { autoClose: 3000 });
			}
		} catch (error) {
			toast.error('An error occurred during registration. Please try again.', {
				autoClose: 3000,
			});
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
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div>
					<label>Password:</label>
					<input
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
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
