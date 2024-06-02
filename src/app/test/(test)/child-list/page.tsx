"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import ChildCards from "@/components/user/ChildCards";

import { Button } from "@/components/ui/button";

function ChildListPage() {
	const router = useRouter();
	const [checked, setChecked] = useState<number>();

	const onNextStep = () => {
		router.push(`/test/process?childIdx=${checked}`);
	};

	return (
		<div className="px-[2rem] py-[1rem] w-full h-full">
			<p className=" text-mint-200 body1 bg-mint-10 w-full h-[56px] flex justify-center items-center rounded-[8px] mt- ">
				검사를 진행할 아이 정보를 선택해주세요.
			</p>
			<ChildCards type="test" checked={checked} setChecked={setChecked} />
			<Button disabled={!checked} onClick={onNextStep} size={"lg"} variant={"big"} className="w-full rounded-[8px]">
				다음 단계로
			</Button>
		</div>
	);
}

export default ChildListPage;
