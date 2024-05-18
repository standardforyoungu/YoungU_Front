/** @type {import('next').NextConfig} */
const KAKAO_ENDPOINT = process.env.NEXT_PUBLIC_KAKAO_ENDPOINT;
const KAKAO_CLIENT_ID = process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID;
const CLIENT_DOMAIN = process.env.NEXT_PUBLIC_CLIENT_DOMAIN;
const SERVER_DOMAIN = process.env.NEXT_PUBLIC_SERVER_DOMAIN;

const nextConfig = {
	env: {
		KAKAO_ENDPOINT: KAKAO_ENDPOINT ?? "",
		KAKAO_CLIENT_ID: KAKAO_CLIENT_ID ?? "",
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
};

export default nextConfig;
