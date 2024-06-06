"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import MainCards from "../../components/home/MainCards";

export default function Main() {
	const [isMount, setIsMount] = useState(false);

	useEffect(() => {
		setIsMount(true);
	}, []);
	return (
		<div className="w-full flex flex-col relative">
			{isMount && (
				<>
					<Image
						className="absolute -left-4 top-[68px]"
						src={"/icons/main_layer_1.svg"}
						alt={"layer"}
						width={72}
						height={72}
					/>
					<Image
						className="absolute left-20 top-[2rem]"
						src={"/icons/main_layer_2.svg"}
						alt={"layer"}
						width={15}
						height={15}
					/>
					<Image
						className="absolute right-32 -top-16"
						src={"/icons/main_layer_3.svg"}
						alt={"layer"}
						width={110}
						height={110}
					/>
					<Image
						className="absolute right-0 top-[0.5rem]"
						src={"/icons/main_layer_4.svg"}
						alt={"layer"}
						width={92}
						height={98}
					/>
					<div className="bg-gray-99 w-full px-[20px] py-[20px] flex flex-col justify-between items-center">
						<div className="flex flex-col gap-[10px] w-[188px] h-[76px] justify-center items-center relative mt-[24px] mb-[28px]">
							<Image
								src={"/icons/beta_tag.svg"}
								alt={"tag"}
								width={49}
								height={25}
								className="absolute -top-4 -right-2"
							/>
							<Image src={"/images/logo.svg"} alt={"logo"} width={174} height={42} />
							<p className="body1 text-gray-60">우리 아이와 딱 맞는 영유 찾기</p>
						</div>
						<MainCards />
					</div>
				</>
			)}
		</div>
	);
}
