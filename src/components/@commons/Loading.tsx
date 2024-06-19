import React from "react";

export default function Loading() {
	return (
		<div className="bg-orange-100/5 w-full h-screen bg-[url('/images/pettern.svg')] flex flex-col gap-[18px] justify-center items-center">
			<div className="relative">
				<div className="w-12 h-12 bg-gradient-to-br from-orange-200 to-orange-10 rounded-full animate-spin" />
				<div className="w-8 h-8 bg-orange-10 rounded-full absolute top-2 right-[7.5px]" />
			</div>
			<p className="text-orange-200 body1">잠시만 기다려 주세요..</p>
		</div>
	);
}
