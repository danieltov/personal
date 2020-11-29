import nodemailer from 'nodemailer';

const { HOST, PORT, EMAIL, PASS } = process.env;

const transporter = nodemailer.createTransport({
	host: HOST,
	port: PORT,
	auth: {
		user: EMAIL,
		pass: PASS,
	},
});

export default async (req, res) => {
	const { email, name, message, phone } = req.body;

	// Check if fields are all filled
	if (email === `` || name === `` || message === ``) {
		res.status(403).send(``);
		return;
	}

	const html = `<p>Name: ${name}</p><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Message: ${message}</p>`;

	const mailerRes = await mailer({
		email,
		name,
		html,
	});
	res.send(mailerRes);
};

const mailer = ({ email, name, html }) => {
	const from = name && email ? `${name} <${email}>` : `${name || email}`;
	const sendThis = {
		from: email,
		to: EMAIL,
		subject: `New Portfolio Message: ${from}`,
		html,
	};

	return new Promise((resolve, reject) => {
		transporter.sendMail(sendThis, (error, info) =>
			error ? reject(error) : resolve(info)
		);
	});
};
