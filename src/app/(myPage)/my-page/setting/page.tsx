"use client";

import React from "react";
import { useModal } from "@/hooks/useModal";
import { useGetLogoutService } from "@/services/login/useGetLogoutService";

export default function Setting() {
	const { onOpen } = useModal();
	const { mutate, onSuccess, onError } = useGetLogoutService();

	const onLogout = () => {
		mutate(undefined, { onSuccess, onError });
	};

	return (
		<div className="head4">
			<div onClick={onLogout} className="px-5 py-4 text-gray-60 border-b border-gray-99 cursor-pointer">
				로그아웃
			</div>
			<div
				className="px-5 py-4 text-Error-2 border-b border-gray-99 cursor-pointer"
				onClick={() => onOpen("withdrawal")}>
				회원탈퇴
			</div>
		</div>
	);
}
