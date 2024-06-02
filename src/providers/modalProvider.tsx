"use client";

import Login from "@/components/@commons/Login";
import ConfirmDeleteChildModal from "@/components/myPage/ConfirmDeleteChildModal";
import ConfirmEmail from "@/components/myPage/ConfirmEmail";
import MaximumChildModal from "@/components/myPage/MaximumChildModal";
import WithdrawalModal from "@/components/myPage/WithdrawalModal";
import ReviewModal from "@/components/test/ReviewModal";
import Share from "@/components/test/Share";
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
		<div>
			<Login />
			<WithdrawalModal />
			<MaximumChildModal />
			<ConfirmDeleteChildModal />
			<ConfirmEmail />
			<ReviewModal />
			<Share />
		</div>
	);
}
