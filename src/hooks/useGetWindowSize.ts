import { useEffect, useState } from "react";

export const useGetWindowSize = () => {
	const [screen, setScreen] = useState<"WEB" | "TABLET" | "MOBILE">();

	const handleResize = () => {
		if (window.innerWidth >= 1024) {
			setScreen("WEB");
		} else if (window.innerWidth >= 431 && window.innerWidth <= 1023) {
			setScreen("TABLET");
		} else if (window.innerWidth <= 480) {
			setScreen("MOBILE");
		}
	};

	useEffect(() => {
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return { screen };
};
