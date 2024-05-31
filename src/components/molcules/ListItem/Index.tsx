"use client";

import React from "react";
import { Button } from "../../ui/button";

import PhoneIcon from "../../../../public/icons/phone-call.svg";
import MapIcon from "../../../../public/icons/map-pin.svg";

export interface ListItemInterface {
	title: string;
	phone: string;
	address: string;
	link?: string;
}

function ListItem({ title, phone, address, link }: ListItemInterface) {
	const onClickHandler = () => {
		window.location.href = `${link}`;
	};

	return (
		<div className="flex flex-col max-h-[165]  w-full py-[1.5rem] bg-White border-b border-[#0000001a]">
			<h4 className="head4 text-gray-20 my-1">{title}</h4>
			<div className="flex gap-[2.5px] items-center my-[0.2rem]">
				<PhoneIcon />
				<p className="body2 text-gray-40">정보 {phone}</p>
			</div>
			<div className="flex gap-[2.5px] items-center my-[0.2rem]">
				<MapIcon />
				<p className="body2 text-gray-40">정보 {address}</p>
			</div>

			<Button
				variant={link ? "list-big" : "disable"}
				size={"lg"}
				className="mt-3 rounded-[8px]"
				onClick={onClickHandler}>
				{link ? "홈페이지 바로가기" : "홈페이지를 찾을 수 없어요"}
			</Button>
		</div>
	);
}

export default ListItem;
