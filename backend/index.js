require(`dotenv`).config();
const express = require(`express`);
const router = express.Router();
const cors = require(`cors`);
const nodemailer = require(`nodemailer`);

const app = express();
app.use(cors());
app.use(express.json());
app.use(`/`, router);
app.listen(5000, () => console.log(`Server Running`));

// TODO ENV VARIABLES
const { EMAIL, PASS, HOST } = process.env;

const contactEmail = nodemailer.createTransport({
	host: HOST,
	port: 465,
	auth: {
		user: EMAIL,
		pass: PASS,
	},
});

contactEmail.verify(error => {
	if (error) {
		console.log(error);
	} else {
		console.log(`Ready to Send`);
	}
});

router.post(`/contact`, (req, res) => {
	const name = req.body.name;
	const email = req.body.email;
	const message = req.body.message;
	const mail = {
		from: email,
		to: EMAIL,
		subject: `New Message From Portfolio`,
		html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
	};
	contactEmail.sendMail(mail, error => {
		if (error) {
			res.json({ status: `failed` });
		} else {
			res.json({ status: `sent` });
		}
	});
});
