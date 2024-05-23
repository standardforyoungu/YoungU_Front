"use client";

import Image from "next/image";
import React, { useState } from "react";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { voteList } from "@/components/vote/voteList";

export default function VotePage() {
	const [selected, setSelected] = useState("1");

	const onSubmit = () => {
		// 투표 제출
	};

	return (
		<div className="pt-6 pb-5 px-5 flex flex-col gap-6">
			<div className="flex flex-col items-center justify-center gap-2">
				<Image src="/icons/symbol_blue.svg" alt="symbol" width={23} height={26} />
				<h3 className="head3 text-gray-10 pb-2 text-center">
					영유스탠다드가 찾아갈
					<br />
					다음 동네는?
				</h3>
				<Image src="/images/map.svg" alt="map" width={143.22} height={110} />
			</div>
			<div className="flex flex-col gap-7">
				{voteList.map((el) => (
					<div key={el.cityname} className="flex flex-col gap-2">
						<h4 className="head4 text-gray-80">{el.cityname} 지역</h4>
						<RadioGroup defaultValue={selected} onValueChange={setSelected} className="flex flex-col gap-3">
							{el.list.map(({ title, value }) => (
								<div key={value} className="flex items-center h-12 w-full gap-[13px]">
									<RadioGroupItem
										value={value}
										id={value}
										className={value === selected ? "border-orange-100" : "[&_Circle]:hidden"}
									/>
									<Label
										className={`py-[13.5px] w-full px-4 border rounded-[8px] ${
											value === selected
												? "bg-orange-10 border-orange-100 text-orange-200 !head4"
												: "border-gray-97 text-gray-40 !body1"
										}`}
										htmlFor={value}>
										{title}
									</Label>
								</div>
							))}
						</RadioGroup>
					</div>
				))}
			</div>
			<Button onClick={onSubmit} className="h-[56px] text-WHITE !head4 mt-2">
				투표 하기
			</Button>
		</div>
	);
}
