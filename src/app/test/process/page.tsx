"use client";

import { useGetPropensityListQuery, usePostPropensitySaveQuery } from "@/api/test/test.query";
import { PropensityResultSaveInterface } from "@/api/test/test.schema";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { toast } from "@/utils/toast";
import { useRouter } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";

import LeftIcon from "../../../../public/icons/arrow-left.svg";
import RightIcon from "../../../../public/icons/arrow-right.svg";

function ProcessPage() {
	const router = useRouter();
	const { data: queryDate, isSuccess, isLoading } = useGetPropensityListQuery();
	const { mutate, data: mutateData, isError } = usePostPropensitySaveQuery();
	const [userPropensity, setUserPropensity] = useState<PropensityResultSaveInterface>({
		chl_id: 1,
		result_list: new Array(20).fill(""),
	});
	const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
	const [progress, setProgress] = useState(0);

	// 질문 이동 함수
	const questionMoveHandler = (direction: string) => {
		if (direction === "LEFT") {
			if (currentQuestionIdx === 0) toast("Error", "이전 질문이 존재하지 않습니다.");
			else {
				setCurrentQuestionIdx((prev) => prev - 1);
				setProgress((prev) => prev - 5);
			}
		} else {
			if (currentQuestionIdx === (queryDate?.question_list.length as number) - 1)
				toast("Error", "다음 질문이 존재하지 않습니다.");
			else {
				setCurrentQuestionIdx((prev) => prev + 1);
				setProgress((prev) => prev + 5);
			}
		}
	};

	// 질문 선택
	const questSelectHandler = (idx: number, data: string) => {
		setUserPropensity((prev) => ({
			...prev,
			result_list: prev.result_list.map((prdn, index) => (index === idx ? (prev.result_list[index] = data) : prdn)),
		}));

		questionMoveHandler("RIGHT");
	};

	// 모든 검사에 값이 들어있는지 체크
	const checkPropensityComplete = () => {
		const result = userPropensity.result_list.indexOf("");

		if (result === -1) return true;
		else {
			setCurrentQuestionIdx(result);
			return false;
		}
	};

	// 검사 완료
	const completePropensityTest = () => {
		if (checkPropensityComplete() === false) toast("Error", "모든 테스트를 완료해주세요.");
		else {
			// mutate(userPropensity);
			// console.log(mutateData);
			router.push("/test/result");
		}
	};

	useEffect(() => {
		console.log(userPropensity);
	}, [userPropensity]);
	return (
		<>
			<Progress value={progress} className="w-full h-[4px]" />
			<div className=" w-full flex flex-col px-[2rem] ">
				<div className="my-[52px] flex w-full justify-center ">
					<div
						className="w-[36px] h-[36px] bg-gray-99 rounded-full mx-3 relative"
						onClick={() => questionMoveHandler("LEFT")}>
						<LeftIcon fill="#C4C4C4" className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] " />
					</div>
					<p className="head4 text-gray-90 flex  items-center">
						<span className="title3 text-orange-100 mx-1">
							{queryDate?.question_list[currentQuestionIdx].test_qstn_id}
						</span>
						/ 20
					</p>
					<div
						className="w-[36px] h-[36px] bg-gray-99  rounded-full mx-3 relative"
						onClick={() => questionMoveHandler("RIGHT")}>
						<RightIcon
							fill="#C4C4C4"
							className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] "
						/>
					</div>
				</div>

				<div>
					<p className="head3 text-gray-20 mb-[30px]">{queryDate?.question_list[currentQuestionIdx].test_qstn_cntnt}</p>

					<p
						className="body1 h-[112px] rounded-[8px] bg-gray-99 text-gray-40 p-[20px] my-[15px] hover:text-orange-200 hover:bg-orange-15 hover:border-orange-200 cursor-pointer"
						onClick={() =>
							questSelectHandler(currentQuestionIdx, queryDate?.question_list[currentQuestionIdx].chc1_prpns as string)
						}>
						{queryDate?.question_list[currentQuestionIdx].chc1_cntnt}
					</p>

					<p
						className="body1 h-[112px] rounded-[8px] bg-gray-99 text-gray-40 p-[20px] my-[15px] hover:text-orange-200 hover:bg-orange-15 hover:border-orange-200 cursor-pointer"
						onClick={() =>
							questSelectHandler(currentQuestionIdx, queryDate?.question_list[currentQuestionIdx].chc2_prpns as string)
						}>
						{queryDate?.question_list[currentQuestionIdx].chc2_cntnt}
					</p>
				</div>

				{currentQuestionIdx === (queryDate?.question_list.length as number) - 1 ? (
					<Button variant={"primary"} size={"lg"} onClick={completePropensityTest}>
						성향검사 완료하기
					</Button>
				) : (
					""
				)}
			</div>
		</>
	);
}

export default ProcessPage;
