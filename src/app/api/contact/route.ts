import { sendEmail } from "@/api/email/email.query";

export const POST = async (req: Request) => {
	const body = await req.json();

	return sendEmail(body)
		.then(() => new Response(JSON.stringify({ message: "메일을 성공적으로 보냈습니다." }), { status: 200 }))
		.catch((error) => {
			console.log(error);

			return new Response(JSON.stringify({ message: "메일 보내기를 실패했습니다." }), { status: 500 });
		});
};
