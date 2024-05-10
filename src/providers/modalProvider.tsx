"use client";

import Login from "@/components/@commons/Login";
import React, { useEffect, useState } from "react";

export default function ModalProvider() {
	const [isMount, setIsMount] = useState(false);

	useEffect(() => {
		setIsMount(true);
	}, []);

	if (!isMount) {
		return null;
	}

	return (
		<>
			<Login />
		</>
	);
}
