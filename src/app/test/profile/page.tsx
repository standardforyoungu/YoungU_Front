"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";

import { useRouter } from "next/navigation";
import { useModal } from "@/hooks/useModal";
import { ChildList as ChildListSchema } from "@/api/user/user.schema";
import { Plus, Trash2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";
import { useGetChildListInfo } from "@/hooks/user/useGetChildListInfo";

function ProfilePage() {
	const { childList } = useGetChildListInfo();
	const router = useRouter();
	const { onOpen } = useModal();
	const [checked, setChecked] = useState<number>();

	const onClickAddBtn = () => {
		if (childList?.length >= 3) {
			onOpen("maximumChild");
		} else {
			router.push("/test/setting");
		}
	};

	const onClickDeleteBtn = (idx: number) => {
		onOpen("confirmDeleteChild", { idx });
	};

	const onNextStep = () => {
		router.push(`/test/process?childIdx=${checked}`);
	};

	return (
		<div className="px-[2rem] py-[1rem] w-full h-full">
			<p className=" text-mint-200 body1 bg-mint-10 w-full h-[56px] flex justify-center items-center rounded-[8px] mt- ">
				검사를 진행할 아이 정보를 선택해주세요.
			</p>
			{childList && (
				<div className="pt-[20px] pb-[36px]">
					<div className="flex flex-col gap-3 pb-3">
						{childList.map((el: ChildListSchema, index: number) => (
							<div key={el?.chl_id} className="flex gap-4 items-center">
								<Checkbox
									checked={el?.chl_id === checked}
									onCheckedChange={(checked: CheckedState) => {
										if (checked) {
											setChecked(el?.chl_id);
										}
									}}
								/>
								<div className="flex flex-col gap-[10px] p-4 border border-gray-97 rounded-[12px] w-full">
									<div className="flex justify-between items-center">
										<div className="flex gap-2">
											<Image
												src={`/icons/child_prf_${index + 1}.svg`}
												alt="thumb"
												width={40}
												height={40}
												className="rounded-full"
											/>
											<div>
												<p className="head4 text-gray-20">{el.chl_nck_nm}</p>
												<p className="flex gap-2 items-center text-gray-40 body2">
													{el?.chl_sex === "F" ? (
														<>
															<span className="rotate-45">♀</span> 여자
														</>
													) : (
														"♂ 남자"
													)}
													<span className="text-gray-90">|</span>
													{el?.chl_age}세 반
												</p>
											</div>
										</div>
										<div className="flex flex-col gap-1">
											<Trash2
												onClick={() => onClickDeleteBtn(el?.chl_id)}
												size={22}
												className="text-gray-80 cursor-pointer"
											/>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
					<Button
						onClick={onClickAddBtn}
						className="rounded-[12px] p-[20px] !h-[84px] bg-gray-99 flex justify-center items-center gap-2 w-full hover:bg-gray-99">
						<div className="w-[20px] h-[20px] rounded-full bg-gray-95 relative">
							<Plus size={10} className="right-[4.8px] top-[4.3px] text-gray-80 absolute head5" strokeWidth={3} />
						</div>
						<p className="text-gray-80 head5">아이 정보 추가하기</p>
					</Button>
				</div>
			)}
			<Button onClick={onNextStep} size={"lg"} variant={"big"} className="w-full rounded-[8px]">
				다음 단계로
			</Button>
		</div>
	);
}

export default ProfilePage;
