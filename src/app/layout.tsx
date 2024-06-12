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
