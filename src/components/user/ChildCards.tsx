"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";
import { useModal } from "@/hooks/useModal";
import { useGetChildListInfo } from "@/hooks/user/useGetChildListInfo";
import { ChildList as ChildListType } from "@/api/user/user.schema";

import { Checkbox } from "../ui/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";
import { Button } from "../ui/button";
import { PenLine, Plus, Trash2 } from "lucide-react";
import Loading from "../@commons/Loading";

interface Props {
	type: "test" | "myPage";
	checked?: number;
	setChecked?: (checked: number) => void;
}

export default function ChildCards({ type, checked, setChecked }: Props) {
	const router = useRouter();
	const { childList, isPending } = useGetChildListInfo();
	const { onOpen } = useModal();

	const onClickAddBtn = () => {
		if (childList?.length >= 3) {
			onOpen("maximumChild");
		} else {
			router.push(type === "test" ? "/test/add-child?isRegistered=Y" : "/my-page/child-list/add-child");
		}
	};

	const onClickEditBtn = (idx: number) => {
		router.push(`/my-page/child-list/edit-child/${idx}`);
	};

	const onClickDeleteBtn = (idx: number) => {
		onOpen("confirmDeleteChild", { idx });
	};

	if (isPending) return <Loading />;

	return !!childList?.length ? (
		<div className="pt-[20px] pb-[36px]">
			<div className="flex flex-col gap-3 pb-3">
				{childList.map((el: ChildListType, index: number) => (
					<div key={el?.chl_id} className="flex gap-4 items-center">
						{type === "test" && (
							<Checkbox
								checked={el?.chl_id === checked}
								onCheckedChange={(checked: CheckedState) => {
									if (checked && !!setChecked) {
										setChecked(el?.chl_id);
									}
								}}
							/>
						)}
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
										<p className="flex gap-2 items-center text-gray-40 !body2">
											{el?.chl_sex === "F" ? (
												<>
													<Image src={`/icons/female.svg`} alt="female" width={12} height={12} />
													<span>여자</span>
												</>
											) : (
												<>
													<Image src={`/icons/male.svg`} alt="male" width={12} height={12} />
													<span>남자</span>
												</>
											)}
											<span className="text-gray-90">|</span>
											{el?.chl_age}세 반
										</p>
									</div>
								</div>
								<div className="flex flex-col gap-1">
									{type === "myPage" && (
										<PenLine
											strokeWidth={1}
											onClick={() => onClickEditBtn(el?.chl_id)}
											size={22}
											className="text-gray-80 cursor-pointer"
										/>
									)}
									<Trash2
										strokeWidth={1}
										onClick={() => onClickDeleteBtn(el?.chl_id)}
										size={22}
										className="text-gray-80 cursor-pointer"
									/>
								</div>
							</div>
							{type === "myPage" && (
								<Button
									disabled={!el?.chl_mbti}
									variant={"list-big"}
									onClick={() => router.push(`/test/result?childIdx=${el?.chl_id}`)}>
									검사 결과 보기
								</Button>
							)}
						</div>
					</div>
				))}
			</div>
			<Button
				onClick={onClickAddBtn}
				className="rounded-[12px] p-[20px] !h-[84px] bg-gray-99 flex justify-center items-center gap-2 w-full hover:bg-gray-99">
				<div className="w-[20px] h-[20px] rounded-full bg-gray-95 flex justify-center items-center">
					<Plus size={14} className="text-gray-80 head5" strokeWidth={4} />
				</div>
				<p className="text-gray-80 head5">아이 정보 추가하기</p>
			</Button>
		</div>
	) : (
		<div className="flex flex-col items-center justify-center gap-4 flex-1 py-10">
			<Image src="/images/icon_diabled.svg" alt="logo" width={72} height={72} />
			<div className="flex flex-col gap-[2px] items-center">
				<p className="head4 text-gray-40">등록된 아이가 없습니다</p>
				<p className="body1 text-gray-60">아이정보를 추가해주세요</p>
			</div>
			<Button className="bg-orange-10 text-orange-100 head5" onClick={onClickAddBtn}>
				아이 정보 추가
			</Button>
		</div>
	);
}
