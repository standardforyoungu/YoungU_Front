import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NotFound() {
	return (
		<div className="w-full h-screen flex flex-col items-center justify-center gap-5">
			<Image src={"/images/error.svg"} alt="error" width={72} height={72} />
			<div className="flex flex-col gap-[2px] items-center justify-center">
				<h4 className="!head4 text-gray-40">현재 접속이 원활하지 않아요</h4>
				<p className="!body1 text-gray-60">
					요청하신 페이지를 찾을 수 없거나
					<br />
					네트워크 연결에 문제가 있습니다.
				</p>
			</div>
			<Link
				href={"/"}
				className="bg-orange-10 text-orange-200 w-[95px] h-[34px] !head5 flex justify-center items-center rounded-[8px] cursor-pointer hover:bg-orange-15">
				홈으로 이동
			</Link>
		</div>
	);
}
