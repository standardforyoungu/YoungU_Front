import React from "react";
import { Button } from "../ui/button";
import { useModal } from "@/hooks/useModal";

export default function NonLoginMyPage() {
	const { onOpen } = useModal();

	const onLogin = () => {
		onOpen("login");
		sessionStorage.setItem("redirect", "/my-page");
	};

	return (
		<div className="px-5 pt-8 pb-6 bg-gray-99 flex flex-col gap-5">
			<h2 className="head2 text-gray-20">
				<span className="text-orange-100">로그인</span>하여
				<br />더 많은 정보를 확인하세요
			</h2>
			<Button onClick={onLogin} className="head5 text-WHITE">
				로그인
			</Button>
		</div>
	);
}
