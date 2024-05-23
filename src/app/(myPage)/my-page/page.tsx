"use client";

import ListHeader from "@/components/@commons/ListHeader";
import LoginMypage from "@/components/myPage/LoginMypage";
import MyPageList from "@/components/myPage/MyPageList";
import NonLoginMyPage from "@/components/myPage/NonLoginMyPage";
import { useIsLoggedIn } from "@/hooks/useIsLoggedIn";
import React, { useEffect, useState } from "react";

export default function MyPage() {
	const [isMount, setIsMount] = useState(false);
	const { isLoggedIn } = useIsLoggedIn();

	useEffect(() => setIsMount(true), []);

	return (
		<div>
			<ListHeader mainTitle="마이페이지" />
			{isMount && (
				<>
					{isLoggedIn ? <LoginMypage /> : <NonLoginMyPage />}
					<MyPageList />
				</>
			)}
		</div>
	);
}
