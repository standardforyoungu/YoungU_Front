"use client";

import React from "react";
import { Button } from "../ui/button";

import phoneIcon from "../../../public/icons/phone-call.svg";
import mapIcon from "../../../public/icons/map-pin.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

function ListItem() {
	const router = useRouter();

	const onClickHandler = () => {
		window.location.href = "http://3.36.118.161/test";
	};

	return (
		<div className="flex flex-col max-h-[165]   w-full py-[1.5rem] px-[1.25rem] bg-WHITE border-b border-[#0000001a]">
			<h4 className="head4 text-gray-20 my-[0.2rem]">쥬빌리프라임주니어(JUBILEEPRIME)어학학원</h4>
			<div className="flex flex-row my-[0.2rem]">
				<Image src={phoneIcon} alt="phoneIcon" />
				<p className="body2 text-gray-40">정보 010-9805-7346</p>
			</div>
			<div className="flex flex-row my-[0.2rem]">
				<Image src={mapIcon} alt="mapIcon" />
				<p className="body2 text-gray-40">정보 서울시 성내동 502-1</p>
			</div>

			<Button variant={"primary"} size={"lg"} className="my-[0.2rem]" onClick={onClickHandler}>
				홈페이지 바로가기
			</Button>
		</div>
	);
}

export default ListItem;
