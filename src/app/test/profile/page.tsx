"use client";

import { Button } from "@/components/ui/button";
import { PenLine, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

import MaleIcon from "../../../../public/icons/male.svg";
import FemaleIcon from "../../../../public/icons/female.svg";
import { useRouter } from "next/navigation";
import { useModal } from "@/hooks/useModal";
import { useDeleteChildInfoQuery, useGetChildInfoListQuery } from "@/api/child/child.query";
import { ChildProfileItem } from "@/components/molcules/ChildProfileItem/Index";
import { ChildInfoInterface } from "@/api/child/child.schema";

function ProfilePage() {
	const { data, isSuccess } = useGetChildInfoListQuery("3483424773");
	const router = useRouter();
	const [check, setCheck] = useState(false);
	const { onOpen } = useModal();
	const mutation = useDeleteChildInfoQuery();

	const deleteChildInfo = (chl_id: number) => {
		mutation.mutate({ mbr_id: "3483424773", chl_id });
	};

	return (
		<div className="px-[2rem] py-[1rem] w-full h-full">
			<p className=" text-mint-200 body1 bg-mint-10 w-full h-[56px] flex justify-center items-center rounded-[8px] mt- ">
				검사를 진행할 아이 정보를 선택해주세요.
			</p>
			{isSuccess &&
				data?.child_list.map((child: ChildInfoInterface) => (
					<div className="flex flex-row mt-[21px]" key={child.chl_id}>
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

						<ChildProfileItem child={child} onClick={deleteChildInfo} />
					</div>
				))}

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
				variant={"big"}>
				다음 단계로
			</Button>
		</div>
	);
}

export default ProfilePage;
