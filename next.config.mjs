/** @type {import('next').NextConfig} */
const KAKAO_ENDPOINT = process.env.NEXT_PUBLIC_KAKAO_ENDPOINT;
const KAKAO_CLIENT_ID = process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID;
const KAKAO_API_KEY = process.env.NEXT_PUBLIC_KAKAO_API_KEY;
const CLIENT_DOMAIN = process.env.NEXT_PUBLIC_CLIENT_DOMAIN;
const SERVER_DOMAIN = process.env.NEXT_PUBLIC_SERVER_DOMAIN;

const nextConfig = {
	env: {
		KAKAO_ENDPOINT: KAKAO_ENDPOINT ?? "",
		KAKAO_CLIENT_ID: KAKAO_CLIENT_ID ?? "",
		KAKAO_API_KEY: KAKAO_API_KEY ?? "",
		CLIENT_DOMAIN: CLIENT_DOMAIN ?? "",
		SERVER_DOMAIN: SERVER_DOMAIN ?? "",
	},
	webpack: (config) => {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ["@svgr/webpack"],
		});
		return config;
	},
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "k.kakaocdn.net",
			},
			{
				protocol: "http",
				hostname: "t1.kakaocdn.net",
			},
		],
	},
};

export default nextConfig;
