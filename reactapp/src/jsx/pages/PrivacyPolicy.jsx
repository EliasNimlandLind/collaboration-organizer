import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
	return (
		<div>
			<h1>Privacy Policy</h1>
			<p>
				Your privacy is important to us. This privacy policy explains what
				information we collect, how we use it, and how we protect your data.
			</p>
			<h2>Information We Collect</h2>
			<p>
				We may collect personal information such as your name, email address,
				and other contact details when you interact with our website.
			</p>
			<h2>How We Use Your Information</h2>
			<p>
				We use the information to provide and improve our services, communicate
				with you, and ensure the security of our website.
			</p>
			<h2>Your Rights</h2>
			<p>
				You have the right to access, update, or delete your personal
				information. Please contact us if you have any concerns.
			</p>
			<Link to='/'>Go back to Home</Link>
		</div>
	);
};

export default PrivacyPolicy;
