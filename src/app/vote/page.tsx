"use client";

import Image from "next/image";
import React, { useState } from "react";

import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { usePostVoteService } from "@/services/vote/usePostVoteService";
import { useGetRegn } from "@/hooks/vote/useGetRegn";
import { useRouter } from "next/navigation";
import Loading from "@/components/@commons/Loading";

export default function VotePage() {
	const router = useRouter();
	const { voteList, isSuccess, isPending } = useGetRegn();
	const [selected, setSelected] = useState<Array<{ regn: string; city: string }>>([]);
	const { mutate, onSuccess, onError } = usePostVoteService();

	const onSubmit = () => {
		const req = {
			info: selected?.map(({ regn, city }) => {
				if (+city <= 7) {
					return [+regn, +city];
				} else {
					return [+regn, +city - 7];
				}
			}),
		};
		mutate(req, {
			onSuccess: (res) => {
				onSuccess(res);
				setSelected([]);
			},
			onError,
		});
	};

	if (isPending) return <Loading />;

	return isSuccess ? (
		<div className="pt-6 pb-5 px-5 flex flex-col gap-6">
			<div className="flex flex-col items-center justify-center gap-2">
				<Image src="/icons/symbol_blue_fill.svg" alt="symbol" width={23} height={26} />
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
												setSelected([...selected, { regn: `${index + 1}`, city: `${value}` }]);
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
										className={`py-[13.5px] w-full px-4 border rounded-[8px] cursor-pointer ${
											!!selected?.find(({ city }: { city: string }) => +city === value)
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
			<Button disabled={!selected.length} variant={"big"} onClick={onSubmit} className="mt-2">
				투표 하기
			</Button>
		</div>
	) : (
		<div className="flex flex-col h-full justify-center items-center">
			<div className="flex flex-col items-center justify-center gap-4 h-full">
				<Image src="/images/icon_diabled.svg" alt="logo" width={72} height={72} />
				<div className="flex flex-col gap-[2px] items-center">
					<p className="head4 text-gray-40">정보를 가져올 수 없습니다</p>
					<p className="body1 text-gray-60">잠시 후 다시 시도해주세요</p>
				</div>
				<Button onClick={() => router.push("/")} className="bg-orange-10 text-orange-100 head5">
					홈으로 이동
				</Button>
			</div>
		</div>
	);
}
