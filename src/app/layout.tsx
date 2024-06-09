"use client";

import "./global.css";
import QueryProvider from "@/providers/queryProvider";
import RecoilProvider from "@/providers/recoilProvider";
import AuthProvider from "@/providers/authProvider";
import Layout from "@/components/Layout";
import ModalProvider from "@/providers/modalProvider";
import "react-toastify/dist/ReactToastify.css";
import KakaoProvider from "@/providers/kakaoProvider";
import { useEffect, useState } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const [isMount, setIsMount] = useState(false);
	useEffect(() => {
		setIsMount(true);
	}, []);
	return (
		<html lang="en">
			<body>
				{isMount && (
					<QueryProvider>
						<RecoilProvider>
							<AuthProvider />
							<ModalProvider />
							<Layout>{children}</Layout>
							<KakaoProvider />
						</RecoilProvider>
					</QueryProvider>
				)}
			</body>
		</html>
	);
}
