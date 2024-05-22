"use client";

import { Button } from "@/components/ui/button";
import { PenLine, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

import MaleIcon from "../../../../public/icons/male.svg";
import FemaleIcon from "../../../../public/icons/female.svg";
import { useRouter } from "next/navigation";
import { useModal } from "@/hooks/useModal";

function page() {
	const router = useRouter();
	const [check, setCheck] = useState(false);
	const { onOpen } = useModal();

	const imageClickHandler = () => {};

	return (
		<div className="px-[2rem] py-[1rem] w-full h-full">
			<p className=" text-mint-200 body1 bg-mint-10 w-full h-[56px] flex justify-center items-center rounded-[8px] mt- ">
				검사를 진행할 아이 정보를 선택해주세요.
			</p>

			<div className="flex flex-row mt-[21px]">
				{!check ? (
					<Image
						src={"/icons/round_checkbox_circle.svg"}
						alt="roundCheckboxCircle"
						width={22}
						height={22}
						className="mr-[10px]"
						onClick={() => setCheck((prev) => !prev)}
					/>
				) : (
					<Image
						src={"/icons/round_checkbox_check.svg"}
						alt="roundCheckboxCheck"
						width={22}
						height={22}
						className="mr-[10px]"
						onClick={() => setCheck((prev) => !prev)}
					/>
				)}
				<div className="flex flex-col  p-4 border border-gray-97 rounded-[12px] w-full mb-[15px]">
					<div className="flex justify-between items-center">
						<div className="flex gap-2">
							<Image src={`/icons/child_prf_1.svg`} alt="thumb" width={40} height={40} className="rounded-full" />
							<div>
								<p className="head4 text-gray-20">김진호</p>
								<p className="flex gap-2 items-center text-gray-40 body2  flex-row ">
									<MaleIcon fill="#5C5C5C" class="m-0" />
									남자 | 7세 반
								</p>
							</div>
						</div>
						<div className="flex flex-col gap-1">
							<Trash2
								onClick={() => {
									onOpen("confirmDeleteChild");
								}}
								size={22}
								className="text-gray-80 cursor-pointer"
							/>
						</div>
					</div>
				</div>
			</div>
			<Button
				className="rounded-[12px] p-[20px] h-[84px] bg-gray-99 flex justify-center items-center gap-2 w-full mb-[35px]"
				onClick={() => onOpen("maximumChild")}>
				<Image src={"/icons/add.svg"} alt="addIcon" width={22} height={22} />
				<p className="text-gray-80 head5">아이 정보 추가하기 </p>
			</Button>

			<Button
				onClick={() => {
					router.push("/test/process");
				}}
				size={"lg"}
				variant={"primary"}>
				다음 단계로
			</Button>
		</div>
	);
}

export default page;
