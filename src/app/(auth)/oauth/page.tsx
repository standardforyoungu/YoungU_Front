"use client";

import { usePostLoginService } from "@/services/login/usePostLoginService";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

export default function AuthPage() {
	const searchParams = useSearchParams();
	const authCode = searchParams.get("code");
	const { mutate, onSuccess } = usePostLoginService();

	useEffect(() => {
		if (!authCode) {
			return;
		} else {
			mutate(authCode, { onSuccess });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <></>;
}
