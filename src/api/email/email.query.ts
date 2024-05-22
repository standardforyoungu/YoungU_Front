import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 465,
	secure: true,
	auth: {
		user: process.env.NEXT_PUBLIC_AUTH_USER,
		pass: process.env.NEXT_PUBLIC_AUTH_PASS,
	},
});

interface ReqInterface {
	email: string;
	contents: string;
}

export const sendEmail = async (req: ReqInterface) => {
	const mailData = {
		to: process.env.NEXT_PUBLIC_AUTH_USER,
		subject: `[영유스탠다드] 문의사항입니다.`,
		from: req.email,
		html: `
      <h1>[영유스탠다드] 문의사항입니다.</h1>
      <div>${req.contents}</div>
      </br>
      <p>보낸사람: ${req.email}</p>
    `,
	};

	return transporter.sendMail(mailData);
};
