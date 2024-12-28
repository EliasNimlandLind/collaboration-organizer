import React, { useContext, useEffect } from 'react';
import Main from './main';

import ThemeContext from './ThemeContext.jsx';
import '../css/App.css';

import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';

import NoPage from './pages/NoPage';

function App() {
	const { theme } = useContext(ThemeContext);

	useEffect(() => {
		document.body.className = theme === 'dark' ? 'dark-theme' : 'light-theme';
	}, [theme]);

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={<Layout />}>
						<Route
							path='privacy-policy'
							element={<PrivacyPolicy />}
						/>

						<Route
							path='*'
							element={<NoPage />}
						/>
					</Route>
				</Routes>
				<div className='container'>
					<Main />
				</div>
			</BrowserRouter>
		</>
	);
}

export default App;
