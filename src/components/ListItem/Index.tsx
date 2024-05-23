"use client";

import React from "react";
import { Button } from "../ui/button";

import phoneIcon from "../../../public/icons/phone-call.svg";
import mapIcon from "../../../public/icons/map-pin.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import cn from "classnames";

export interface ListItemInterface {
	title: string;
	phone: string;
	address: string;
	link?: string;
}

function ListItem({ title, phone, address, link }: ListItemInterface) {
	const router = useRouter();

	const onClickHandler = () => {
		window.location.href = `${link}`;
	};

	return (
		<div className="flex flex-col max-h-[165]   w-full py-[1.5rem] px-[1.25rem] bg-White border-b border-[#0000001a]">
			<h4 className="head4 text-gray-20 my-[0.2rem]">{title}</h4>
			<div className="flex flex-row my-[0.2rem]">
				<Image src={phoneIcon} alt="phoneIcon" />
				<p className="body2 text-gray-40">정보 {phone}</p>
			</div>
			<div className="flex flex-row my-[0.2rem]">
				<Image src={mapIcon} alt="mapIcon" />
				<p className="body2 text-gray-40">정보 {address}</p>
			</div>

			<Button variant={link ? "primary" : "disable"} size={"lg"} className="my-[0.2rem]" onClick={onClickHandler}>
				{link ? "홈페이지 바로가기" : "홈페이지를 찾을 수 없어요 :("}
			</Button>
		</div>
	);
}

export default ListItem;
