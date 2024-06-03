interface Kakao {
	init: (key: string) => void;
	isInitialized: () => boolean;
	Link: {
		sendDefault: (params: any) => void;
	};
}

interface Window {
	Kakao: Kakao;
}
