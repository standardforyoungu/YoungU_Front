"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function AuthProvider() {
	const pathname = usePathname();
	const path = pathname.includes("my-page") ? pathname.split("/my-page")[1] : pathname;
	const router = useRouter();

	useEffect(() => {
		if (!!window.localStorage.getItem("OU_UserAttribute")) {
			path.includes("oauth") && router.push("/");
		} else {
			path.includes("/child-list") && router.push("/");
			["/test", "/setting"].includes(path) && router.push("/");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [path]);

	return <></>;
}
