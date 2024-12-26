import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
	service: "gmail",
	host: "smtp.gmail.com",
	port: 587,
	secure: false,
	auth: {
		user: process.env.EMAIL_ID,
		pass: process.env.PASSWORD,
	},
});

export async function POST(req) {
	const { email, client, message } = await req.json();

	const reply =
		`Greetings ${client},\n\n` +
		`This is a automated response to inform you that you sent a mail to Aditya Pandey, through his website "${process.env.WEBSITE_DOMAIN_NAME}".\n` +
		`The details of the message are as follows:\n\n` +
		`Name: ${client}\n` +
		`Email ID: ${email}\n` +
		`Message:${message}\n\n` +
		`Thanks for contacting :)\n\n` +
		`If you think it was not you, then consider changing you password as soon as possible.`;

	const mailOptions = {
		from: {
			name: "Aditya Pandey",
			address: process.env.EMAIL_ID,
		},
		to: [process.env.EMAIL_ID, email],
		subject: `PORTFOLIO: ${client} sent a message`,
		text: reply,
	};

	// transporter.sendMail(mailOptions, (error, info) => {
	// 	if (error) {
	// 		// return res.status(500).send(error.toString());
	// 		return NextResponse.json({ success: false, data: error.toString() });
	// 	}
	// 	// res.status(200).send("Email sent: " + info.response);
	// 	return NextResponse.json({ success: true, data: "Lol Lmao xD" });
	// });
	try {
		const info = await transporter.sendMail(mailOptions);
		// return NextResponse.json({ success: true, data: info.response });
		return NextResponse.json({ success: true, data: "Lol Lmao xD" });
	} catch (error) {
		return NextResponse.json({ success: false, data: error.toString() });
	}
}
