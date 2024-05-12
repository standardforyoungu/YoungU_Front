import qs from "querystring";

export const getKakaoAuthCode = () => {
	const OAUTH_HOST = process.env.KAKAO_ENDPOINT;
	const client_id = process.env.KAKAO_CLIENT_ID;
	const redirect_uri = process.env.NEXT_PUBLIC_CLIENT_DOMAIN + "/oauth/";
	const response_type = "code";
	const prompt = "select_account";

	const AUTHORIZE_URI = `${OAUTH_HOST}?${qs.stringify({
		client_id,
		redirect_uri,
		response_type,
		prompt,
	})}`;

	window.location.href = AUTHORIZE_URI;
};
