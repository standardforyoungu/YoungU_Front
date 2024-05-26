"use client";

import React from "react";

import MaleIcon from "../../../../public/icons/male.svg";
import FemaleIcon from "../../../../public/icons/female.svg";
import { PenLine, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import { useModal } from "@/hooks/useModal";
import { ChildInfoInterface } from "@/api/child/child.schema";

interface ChildProfileItemInterface {
	child: ChildInfoInterface;
	onClick: (chl_id: number) => void;
}

export const ChildProfileItem = ({ child, onClick }: ChildProfileItemInterface) => {
	console.log(child);
	const { onOpen, data } = useModal();

	return (
		<div className="flex flex-col  p-4 border border-gray-97 rounded-[12px] w-full mb-[15px]">
			<div className="flex justify-between items-center">
				<div className="flex gap-2">
					<Image src={`/icons/child_prf_1.svg`} alt="thumb" width={40} height={40} className="rounded-full" />
					<div>
						<p className="head4 text-gray-20">{child.chl_nck_nm}</p>
						<p className="flex gap-2 items-center text-gray-40 body2  flex-row ">
							{child.chl_sex === "F" ? (
								<FemaleIcon fill="#5C5C5C" className="m-0" />
							) : (
								<MaleIcon fill="#5C5C5C" className="m-0" />
							)}
							{child.chl_sex === "F" ? "여자" : "남자"} | {child.chl_age}
						</p>
					</div>
				</div>
				<div className="flex flex-col gap-1">
					<Trash2
						onClick={() => {
							onOpen("confirmDeleteChild");
							if (child.chl_id) onClick(child.chl_id);
						}}
						size={22}
						className="text-gray-80 cursor-pointer"
					/>
				</div>
			</div>
		</div>
	);
};
