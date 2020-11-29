import axios from 'axios';

export const sendContactMail = async (
	recipientMail,
	name,
	senderMail,
	phone,
	content
) => {
	const data = {
		recipientMail,
		name,
		senderMail,
		phone,
		content,
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
