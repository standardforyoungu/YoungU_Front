import { Button } from "@/components/ui/button";
import { PenLine, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import React from "react";

function page() {
	return (
		<div className="px-[2rem] py-[1rem] w-full h-full">
			<p className=" text-mint-200 body1 bg-mint-10 w-full h-[56px] flex justify-center items-center rounded-[8px] mt- ">
				검사를 진행할 아이 정보를 선택해주세요.
			</p>

			<div className="flex flex-col gap-[10px] p-4 border border-gray-97 rounded-[12px]">
				<div className="flex justify-between items-center">
					<div className="flex gap-2">
						<Image src={`/icons/child_prf_1.svg`} alt="thumb" width={40} height={40} className="rounded-full" />
						<div>
							<p className="head4 text-gray-20">김진호</p>
							<p className="flex gap-2 items-center text-gray-40 body2">
								<span className="text-gray-90">|</span>
							</p>
						</div>
					</div>
					<div className="flex flex-col gap-1">
						<Trash2 size={22} className="text-gray-80 cursor-pointer" />
					</div>
				</div>
				<Button className="bg-orange-10 text-orange-100">검사 결과 보기</Button>
			</div>

			<Button className="rounded-[12px] p-[20px] h-[84px] bg-gray-99 flex justify-center items-center gap-2 w-full">
				<div className="w-[20px] h-[20px] rounded-full bg-gray-95 relative">
					<Plus size={10} className="right-[4.8px] top-[4.3px] text-gray-80 absolute head5" strokeWidth={3} />
				</div>
				<p className="text-gray-80 head5">아이 정보 추가하기</p>
			</Button>
		</div>
	);
}

export default page;
