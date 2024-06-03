export function loadKakaoSdk(): Promise<void> {
	return new Promise((resolve, reject) => {
		if (typeof window !== "undefined" && window.Kakao) {
			resolve();
			return;
		}

		const script = document.createElement("script");
		script.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
		script.async = true;

		script.onload = () => {
			if (window.Kakao) {
				window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY ?? "");
				resolve();
			} else {
				reject(console.log("Kakao SDK failed to load"));
			}
		};

		script.onerror = () => {
			console.log("Kakao SDK failed to load");
		};
		document.head.appendChild(script);
	});
}
