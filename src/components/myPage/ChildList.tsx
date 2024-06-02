"use client";

import React from "react";
import ChildCards from "../user/ChildCards";

export default function ChildList() {
	return (
		<div className="p-[20px] h-full">
			<ChildCards type="myPage" />
		</div>
	);
}
