"use client";
import Image from "next/image";
import React from "react";
import MainCards from "../../components/home/MainCards";

export default function Main() {
	return (
		<div className="w-full flex flex-col relative">
			<Image className="absolute -left-4 top-24" src={"/icons/main_layer_1.svg"} alt={"layer"} width={72} height={72} />
			<Image className="absolute left-20 top-20" src={"/icons/main_layer_2.svg"} alt={"layer"} width={15} height={15} />
			<Image
				className="absolute right-32 -top-16"
				src={"/icons/main_layer_3.svg"}
				alt={"layer"}
				width={110}
				height={110}
			/>
			<Image className="absolute right-0 top-10" src={"/icons/main_layer_4.svg"} alt={"layer"} width={92} height={98} />
			<div className="bg-gray-99 w-full px-[20px] py-[20px]">
				<div className="flex flex-col gap-[10px] justify-center items-center pt-[44px] pb-[28px] relative">
					<Image
						src={"/icons/beta_tag.svg"}
						alt={"tag"}
						width={49}
						height={25}
						className="absolute top-[1.5rem] right-[126.4px] sm:right-20"
					/>
					<Image src={"/images/logo.svg"} alt={"logo"} width={174} height={42} />
					<p className="body1 text-gray-60">우리 아이와 딱 맞는 영유 찾기</p>
				</div>
				<MainCards />
			</div>
		</div>
	);
}
