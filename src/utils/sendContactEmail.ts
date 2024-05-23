
import { toast } from "./toast";

interface ReqInterface {
	email: string;
	contents: string;
}

export const sendContactEmail = async (req: ReqInterface) => {
	try {
		const response = await fetch("/api/contact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(req),
			signal: AbortSignal.timeout(5000),
		});

		return await response.json();
	} catch (err: any) {

		toast("Error", "오류가 발생했어요, 다시 시도해주세요.");
		if (err.name === "AbortError") {
			throw new Error("failed SendEmailAuthCode");
		} else {
			throw new Error("Server Error");
		}
	}
};
