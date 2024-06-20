"use client";

import { useEffect, useState } from "react";

export const useIsLoggedIn = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		if (typeof window !== "undefined") {
			!!localStorage.getItem("OU_UserAttribute") &&
				localStorage.getItem("OU_UserAttribute") !== "undefined" &&
				setIsLoggedIn(true);
		}
	}, []);

	return { isLoggedIn };
};
