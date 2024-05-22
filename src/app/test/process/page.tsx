"use client";

import { Progress } from "@/components/ui/progress";
import React, { useEffect, useState } from "react";

import PrevCursor from "../../../../public/icons/prev_cursor.svg";

function page() {
	const [progress, setProgress] = useState(13);

	return (
		<>
			<Progress value={55} className="w-full h-[4px]" />
			<div className=" w-full flex flex-col px-[2rem] ">
				<div className="my-[52px] flex w-full justify-center ">
					<div className="w-[36px] h-[36px] bg-gray-99 rounded-full mx-3"></div>
					<p className="head4 text-gray-90 flex  items-center">
						<span className="title3 text-orange-100 mx-1">1</span>/ 20
					</p>
					<div className="w-[36px] h-[36px] bg-gray-99  rounded-full mx-3"></div>
				</div>

				<div>
					<p className="head3 text-gray-20 mb-[30px]">
						놀이동산에 가기로 한 일정이 바뀌었을 때, 우리 아이의 모습은 어떠한가요?
					</p>

					<p className="body1 h-[112px] rounded-[8px] bg-gray-99 text-gray-40 p-[20px] my-[15px]">
						가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가
					</p>

					<p className="body1 h-[112px] rounded-[8px] bg-gray-99 text-gray-40 p-[20px] my-[15px]">
						가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가
					</p>
				</div>
			</div>
		</>
	);
}

export default page;
