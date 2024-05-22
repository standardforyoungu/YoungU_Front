import { toast } from "react-toastify";

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
		toast.error("메일 전송을 실패했습니다. 잠시 후 다시 시도해주세요.");
		if (err.name === "AbortError") {
			throw new Error("failed SendEmailAuthCode");
		} else {
			throw new Error("Server Error");
		}
	}
};
