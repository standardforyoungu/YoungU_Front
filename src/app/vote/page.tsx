"use client";

import Image from "next/image";
import React, { useState } from "react";

import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { usePostVoteService } from "@/services/vote/usePostVoteService";
import { useGetRegn } from "@/hooks/vote/useGetRegn";

export default function VotePage() {
	const voteList = useGetRegn();
	const [selected, setSelected] = useState<Array<{ regn: string; city: string }>>([]);
	const { mutate, onSuccess, onError } = usePostVoteService();

	const onSubmit = () => {
		const req = { info: selected?.map(({ regn, city }) => [regn, city]) };
		mutate(req, { onSuccess, onError });
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
				{voteList.map((el, index) => (
					<div key={el.cityname} className="flex flex-col gap-2">
						<h4 className="head4 text-gray-80">{el.cityname} 지역</h4>
						<div className="flex flex-col gap-3">
							{el.list.map(({ title, value }) => (
								<div key={value} className="flex items-center h-12 w-full gap-[13px]">
									<Checkbox
										onCheckedChange={(isChecked) => {
											if (isChecked) {
												setSelected([...selected, { regn: `${index}`, city: `${value}` }]);
											} else {
												setSelected(selected.filter(({ city }: { city: string }) => +city !== value));
											}
										}}
										id={title}
										className={`${
											!!selected?.find(({ city }: { city: string }) => +city === value) && "border-orange-100"
										}`}
									/>
									<Label
										className={`py-[13.5px] w-full px-4 border rounded-[8px] ${
											value === +selected
												? "bg-orange-10 border-orange-100 text-orange-200 !head4"
												: "border-gray-97 text-gray-40 !body1"
										}`}
										htmlFor={title}>
										{title}
									</Label>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
			<Button
				disabled={!selected.length}
				onClick={onSubmit}
				className="h-[56px] text-White !head4 mt-2 hover:bg-orange-200">
				투표 하기
			</Button>
		</div>
	);
}
