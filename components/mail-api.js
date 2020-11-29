import axios from 'axios';

export const sendContactMail = async (name, email, phone, message) => {
	const data = {
		name,
		email,
		phone,
		message,
	};

	try {
		const res = await axios({
			method: `post`,
			url: `/api/contact`,
			headers: {
				'Content-Type': `application/json`,
			},
			data,
		});
		return res;
	} catch (error) {
		return error;
	}
};
