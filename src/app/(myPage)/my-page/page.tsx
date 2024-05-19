"use client";

import LoginMypage from "@/components/myPage/LoginMypage";
import MyPageList from "@/components/myPage/MyPageList";
import NonLoginMyPage from "@/components/myPage/NonLoginMyPage";
import { useIsLoggedIn } from "@/hooks/useIsLoggedIn";
import React from "react";

export default function MyPage() {
	const { isLoggedIn } = useIsLoggedIn();

	return (
		<div>
			{isLoggedIn ? <LoginMypage /> : <NonLoginMyPage />}
			<MyPageList />
		</div>
	);
}
