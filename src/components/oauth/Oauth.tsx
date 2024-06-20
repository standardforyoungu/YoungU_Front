"use client";

import { usePostLoginService } from "@/services/login/usePostLoginService";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Loading from "../@commons/Loading";

export default function Oauth() {
	const searchParams = useSearchParams();
	const authCode = searchParams.get("code");
	const { mutate, onSuccess, onError } = usePostLoginService();
	const [isMount, setIsMount] = useState(false);

	useEffect(() => {
		setIsMount(true);
	}, []);

	useEffect(() => {
		if (!authCode) {
			return;
		} else {
			mutate(authCode, { onSuccess, onError });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return isMount && <Loading />;
}
