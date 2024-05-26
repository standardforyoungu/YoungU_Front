"use client";

import Image from "next/image";
import Link from "next/link";

export default function GlobalError() {
	return (
		<html>
			<body>
				<div className="w-full h-screen flex flex-col items-center justify-center gap-5">
					<Image src={"/images/error.svg"} alt="error" width={72} height={72} />
					<div className="flex flex-col gap-[2px] items-center justify-center">
						<h4 className="!head4 text-gray-40">시스템 오류가 발생했어요</h4>
						<p className="!body1 text-gray-60">
							문제를 해결하기 위해 노력하고 있습니다.
							<br />
							잠시 후 다시 확인해 주세요
						</p>
					</div>
					<Link
						href={"/"}
						className="bg-orange-10 text-orange-200 w-[95px] h-[34px] !head5 flex justify-center items-center rounded-[8px] cursor-pointer hover:bg-orange-15">
						홈으로 이동
					</Link>
				</div>
			</body>
		</html>
	);
}
