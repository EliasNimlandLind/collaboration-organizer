import { UserContext } from './UserContext';

export const postUser = async (username, password, url) => {
	const response = await fetch(url, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ username, password }),
	});

	const data = await response.json();
	return {
		status: response.status,
		message: data.message,
	};
};
