"use client";

import { usePostLoginService } from "@/services/login/usePostLoginService";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Loading from "../@commons/Loading";
import { usePostLoginMutation } from "@/api/login/login.query";
import { LoginResInterface } from "@/api/login/login.schema";
import { toast } from "@/utils/toast";

export default function Oauth() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const authCode = searchParams.get("code");
	const mutation = usePostLoginMutation();
	// const { mutate, onSuccess, onError } = usePostLoginService();
	const [isMount, setIsMount] = useState(false);

	useEffect(() => {
		setIsMount(true);
	}, []);

	useEffect(() => {
		if (!authCode) {
			return;
		} else {
			console.log("mutate start");

			mutation.mutate(authCode, { onSuccess, onError });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onSuccess = (data: LoginResInterface) => {
		console.log("window>>>", typeof window);

		if (data?.result === "Success") {
			console.log("success");

			if (typeof window !== "undefined") {
				console.log(data?.access_token);
				console.log(data?.mbr_id);

				window.localStorage.setItem("OU_UserAttribute", data?.access_token);
				window.localStorage.setItem("mbr_id", data?.mbr_id);
				const redirect = window.sessionStorage.getItem("redirect");
				router.push(redirect ?? "/");
				toast("Success", "로그인을 성공했습니다.");
			}
		}
	};

	const onError = (error: any) => {
		console.log(error);

		toast("Error", error.response.data.message);
	};

	return isMount && <Loading />;
}
