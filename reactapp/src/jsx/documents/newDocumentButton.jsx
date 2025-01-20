import '../../css/newDocumentButton.css';
import { Link } from 'react-router-dom';

const NewDocumentButton = () => {
	return (
		<div>
			<Link
				to='/new-document'
				className='plus-button'></Link>
		</div>
	);
};

export default NewDocumentButton;
