"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { useGetPropensityQuestion } from "@/hooks/test/useGetPropensityQuestion";
import { QuestionList } from "@/api/test/test.schema";
import { usePostPropensityResultService } from "@/services/test/usePostPropensityResultService";

import { Progress } from "../ui/progress";
import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";

export default function ProcessPage() {
	const searchParams = useSearchParams();
	const router = useRouter();
	const { questionList } = useGetPropensityQuestion();
	const [currentIdx, setCurrentIdx] = useState(1);
	const [result, setResult] = useState<Array<string>>([]);
	const currentQuestion: QuestionList = questionList?.[currentIdx - 1];
	const { mutate, onError } = usePostPropensityResultService();
	const [isDisabled, setIsDisabled] = useState(true);
	const splited = currentQuestion?.test_qstn_cntnt?.split(",");

	const onPrevNext = (type: "prev" | "next") => {
		if (type === "prev") {
			if (currentIdx === 1) {
				return;
			} else {
				setCurrentIdx(currentIdx - 1);
			}
		} else {
			if (currentIdx === 20) {
				return;
			} else {
				setCurrentIdx(currentIdx + 1);
			}
		}
	};

	const onNextQuestion = (answer: string) => {
		if (currentIdx === 20) {
			setResult([...result, answer]);
			setIsDisabled(false);
		} else {
			if (!result[currentIdx - 1]) {
				setResult([...result, answer]);
			} else {
				setResult(result?.map((el, idx) => (idx === currentIdx - 1 ? answer : el)));
			}
			onPrevNext("next");
		}
	};

	const onSubmit = () => {
		const chl_id = searchParams.get("childIdx");
		if (chl_id) {
			mutate(
				{ chl_id, result_list: result },
				{ onError, onSuccess: () => router.push(`/test/result?childIdx=${chl_id}`) },
			);
		}
	};

	return (
		<div className="flex flex-col gap-11 items-center justify-center">
			<Progress value={currentIdx * 5} className="self-start" />
			<div className="w-full px-5 flex flex-col gap-[46px] items-center justify-center">
				<div className="flex gap-4 items-center relative">
					<div
						onClick={() => onPrevNext("prev")}
						className={`absolute -left-12 top-0.5 w-9 h-9 ${
							currentIdx === 1 ? "bg-gray-99 text-gray-90" : "bg-orange-10 text-orange-100"
						} rounded-full flex justify-center items-center`}>
						<ArrowLeft size={20} />
					</div>
					<p className="text-gray-90 head4">
						<span className="text-orange-100 title3">{currentIdx}</span> / 20
					</p>
				</div>
				<div className="flex flex-col gap-6 items-center w-full">
					<div className="h-[50px]">
						{splited?.map((el, index) => (
							<p key={index} className="head3 gray-20 text-center">
								{splited?.length - 1 === index ? el : `${el},`}
							</p>
						))}
					</div>
					<div className="flex flex-col gap-2 w-full">
						<div
							onClick={() => onNextQuestion(currentQuestion?.chc1_prpns)}
							className={`w-full h-[112px] ${
								result?.[currentIdx - 1] === currentQuestion?.chc1_prpns
									? "bg-orange-15 text-orange-200 border border-orange-200"
									: "bg-gray-99 text-gray-40"
							} rounded-[8px] hover:bg-orange-15 hover:text-orange-200 hover:border hover:border-orange-200 p-5 flex items-center cursor-pointer justify-center`}>
							{currentQuestion?.chc1_cntnt}
						</div>
						<div
							onClick={() => onNextQuestion(currentQuestion?.chc2_prpns)}
							className={`w-full h-[112px] ${
								result?.[currentIdx - 1] === currentQuestion?.chc2_prpns
									? "bg-orange-15 text-orange-200 border border-orange-200"
									: "bg-gray-99 text-gray-40"
							} rounded-[8px] hover:bg-orange-15 hover:text-orange-200 hover:border hover:border-orange-200 p-5 flex items-center cursor-pointer justify-center`}>
							{currentQuestion?.chc2_cntnt}
						</div>
					</div>
				</div>
				{currentIdx === 20 && (
					<Button onClick={onSubmit} disabled={isDisabled} variant={"big"} className="mt-[21px] w-full">
						성향검사 완료하기
					</Button>
				)}
			</div>
		</div>
	);
}
