import { http, HttpResponse } from "msw"

export const handler = [
	http.get("http://localhost:3000/test", () => {
		console.log("here")
		return HttpResponse.json({
			success: true,
			message: "성공",
		})
	}),
]
