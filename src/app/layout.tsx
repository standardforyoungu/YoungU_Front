import "./global.css";
import QueryProvider from "@/providers/queryProvider";
import RecoilProvider from "@/providers/recoilProvider";
import AuthProvider from "@/providers/authProvider";
import Layout from "@/components/Layout";
import ModalProvider from "@/providers/modalProvider";
import "react-toastify/dist/ReactToastify.css";
import KakaoProvider from "@/providers/kakaoProvider";
import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
	title: "영유스탠다드",
	description: "영어 유치부가 고민될땐? 성향검사를 통해 아이에게 맞는 학습법을 찾아보세요!",
	keywords: [],
	openGraph: {
		title: "영유스탠다드",
		description: "영어 유치부가 고민될땐? 성향검사를 통해 아이에게 맞는 학습법을 찾아보세요!",
		url: "https://young-u-standard.site/",
		siteName: "영유스탠다드",
		images: {
			url: "https://youngu-s3-bucket.s3.ap-northeast-2.amazonaws.com/propensity_result/OG_800x400.jpg",
			width: 800,
			height: 400,
		},
		type: "website",
	},
};

export const viewport: Viewport = {
	userScalable: false,
	maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<QueryProvider>
					<RecoilProvider>
						<AuthProvider />
						<ModalProvider />
						<Layout>{children}</Layout>
						<KakaoProvider />
					</RecoilProvider>
				</QueryProvider>
			</body>
		</html>
	);
}
