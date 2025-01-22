import React from 'react';

import SearchBar from '../searchBar';
import NewDocumentButton from './newDocumentButton';

import '../../css/documentToolbar.css';

const DocumentToolbar = () => {
	return (
		<div id='document-toolbar'>
			<SearchBar />
			<NewDocumentButton />
		</div>
	);
};

export default DocumentToolbar;
