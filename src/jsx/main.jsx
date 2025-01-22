import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';
import '../css/index.css';

import { ThemeProvider } from './themeContext.jsx';
import { UserProvider } from './UserContext.jsx';

import LoadingAnimation from './loadingAnimation.jsx';

import DocumentParent from './document/documentParent';
import DocumentToolbar from './document/documentToolbar';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<UserProvider>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</UserProvider>
	</StrictMode>
);

const Main = () => {
	return (
		<div>
			<LoadingAnimation></LoadingAnimation>
			<DocumentToolbar></DocumentToolbar>
			<DocumentParent></DocumentParent>
		</div>
	);
};

export default Main;
