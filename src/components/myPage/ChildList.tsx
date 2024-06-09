"use client";

import React from "react";
import ChildCards from "../user/ChildCards";
import ListHeader from "../@commons/ListHeader";

export default function ChildList() {
	return (
		<div className="h-full min-h-screen flex flex-col">
			<ListHeader mainTitle="아이 정보 관리" url="/my-page" />
			<div className="px-5 h-full flex flex-col flex-1">
				<ChildCards type="myPage" />
			</div>
		</div>
	);
}
