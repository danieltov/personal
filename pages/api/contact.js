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
	const { senderMail, name, content, phone, recipientMail } = req.body;

	// Check if fields are all filled
	if (
		senderMail === `` ||
		name === `` ||
		content === `` ||
		recipientMail === ``
	) {
		res.status(403).send(``);
		return;
	}

	const html = `<p>Name: ${name}</p><p>Email: ${senderMail}</p><p>Phone: ${phone}</p><p>Message: ${content}</p>`;

	const mailerRes = await mailer({
		senderMail,
		name,
		html,
	});
	res.send(mailerRes);
};

const mailer = ({ senderMail, name, html }) => {
	const from =
		name && senderMail
			? `${name} <${senderMail}>`
			: `${name || senderMail}`;
	const message = {
		from: senderMail,
		to: EMAIL,
		subject: `New Portfolio Message: ${from}`,
		html,
	};

	return new Promise((resolve, reject) => {
		transporter.sendMail(message, (error, info) =>
			error ? reject(error) : resolve(info)
		);
	});
};
