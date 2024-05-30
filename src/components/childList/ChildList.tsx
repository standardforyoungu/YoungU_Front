"use client";

import { Button } from "@/components/ui/button";
import { useGetChildListInfo } from "@/hooks/myPage/useGetChildListInfo";
import { useModal } from "@/hooks/useModal";
import { PenLine, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { ChildList as ChildListSchema } from "@/api/myPage/myPage.schema";

export default function ChildList() {
	const router = useRouter();
	const { onOpen } = useModal();
	const { childList } = useGetChildListInfo();

	const onClickAddBtn = () => {
		if (childList?.length >= 3) {
			onOpen("maximumChild");
		} else {
			router.push("/my-page/child-list/add-child");
		}
	};

	const onClickEditBtn = (idx: number) => {
		router.push(`/my-page/child-list/edit-child/${idx}`);
	};

	const onClickDeleteBtn = (idx: number) => {
		onOpen("confirmDeleteChild", { idx });
	};

	return (
		<div className="p-[20px] h-full">
			{!!childList?.length ? (
				<>
					<div className="flex flex-col gap-3 pb-3">
						{childList.map((el: ChildListSchema, index: number) => (
							<div key={el?.chl_id} className="flex flex-col gap-[10px] p-4 border border-gray-97 rounded-[12px]">
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
										<PenLine
											onClick={() => onClickEditBtn(el?.chl_id)}
											size={22}
											className="text-gray-80 cursor-pointer"
										/>
										<Trash2
											onClick={() => onClickDeleteBtn(el?.chl_id)}
											size={22}
											className="text-gray-80 cursor-pointer"
										/>
									</div>
								</div>
								<Button variant={"list-big"} disabled={!el?.chl_mbti}>
									검사 결과 보기
								</Button>
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
				</>
			) : (
				<div className="flex flex-col items-center justify-center gap-4 h-full">
					<Image src="/images/icon_diabled.svg" alt="logo" width={72} height={72} />
					<div className="flex flex-col gap-[2px] items-center">
						<p className="head4 text-gray-40">등록된 아이가 없습니다</p>
						<p className="body1 text-gray-60">아이정보를 추가해주세요</p>
					</div>
					<Button className="bg-orange-10 text-orange-100 head5" onClick={onClickAddBtn}>
						아이 정보 추가
					</Button>
				</div>
			)}
		</div>
	);
}
