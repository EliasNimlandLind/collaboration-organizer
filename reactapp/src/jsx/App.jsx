import React, { useContext, useEffect } from 'react';
import Main from './main';

import ThemeContext from './themeContext.jsx';
import '../css/App.css';

import PrivacyPolicy from './pages/privacyPolicy.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/layout';

import NoPage from './pages/noPage';

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
