import { http, HttpResponse } from "msw";

const baseUrl = "http://43.203.246.164/youngustandard";

export const handler = [
	http.get(`${baseUrl}/1/1/`, () => {
		console.log("MSW");
		return HttpResponse.json({
			success: true,
			message: "성공",
		});
	}),
];
