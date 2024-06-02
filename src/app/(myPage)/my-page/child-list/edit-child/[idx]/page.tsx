"use client";

import ChildForm, { formSchema } from "@/components/user/ChildForm";
import { useGetChildInfo } from "@/hooks/user/useGetChildInfo";
import { usePatchChildInfoService } from "@/services/myPage/usePatchChildInfoService";
import React from "react";
import * as z from "zod";

export default function EditChildPage({ params }: { params: { idx: string } }) {
	const childInfo = useGetChildInfo(+params.idx);
	const { mutate, onSuccess, onError } = usePatchChildInfoService();

	const onSubmit = (value: z.infer<typeof formSchema>) => {
		mutate({ ...value, chl_id: +params.idx }, { onSuccess, onError });
	};

	return (
		<>
			{childInfo && (
				<ChildForm
					info="아이 정보를 수정할 수 있어요"
					buttonText="저장하기"
					defaultValue={childInfo}
					onSubmit={onSubmit}
				/>
			)}
		</>
	);
}
