"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";
import ScrollBtn from "@/components/@commons/ScrollBtn";
import { ToastContainer } from "react-toastify";
import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";

export default function Layout({ children }: { children: ReactNode }) {
	const contentsRef = useRef<HTMLDivElement>(null);
	const [showBtn, setShowBtn] = useState(false);

	useEffect(() => {
		if (contentsRef?.current) {
			contentsRef.current.addEventListener("scroll", () => {
				if (contentsRef.current && contentsRef.current.scrollTop < 50) {
					setShowBtn(false);
				} else {
					setShowBtn(true);
				}
			});
		}
	}, []);

	const scrollTopHandler = () => {
		if (contentsRef?.current) {
			contentsRef.current.scrollTo({ top: 0, behavior: "smooth" });
		}
	};

	return (
		<div className="min-w-screen w-full flex items-center justify-center gap-[80px] h-full min-h-screen bg-gray-95">
			<div className="sm:hidden md:hidden flex flex-col justify-center items-center w-[584px] h-screen">
				<Image src="/images/large_logo.svg" alt="logo" width={584} height={173} />
				<h3 className="head3 text-gray-40">
					우리 아이와 <span className="text-orange-100">딱</span> 맞는 <span className="text-orange-100">영유</span>{" "}
					찾기
				</h3>
				<div className="absolute flex flex-col justify-center items-center gap-4 bottom-[40px] text-gray-60 body3">
					<button className="w-12 h-12 flex justify-center items-center rounded-full bg-gray-90">
						<Instagram className="text-gray-40" size={24} />
					</button>
					<div className="flex flex-col gap-[4px] items-center justify-center">
						<p>email: youngustandard2024@gmail.com</p>
						<div className="flex gap-3">
							<Link href={""} className="underline underline-offset-1">
								이용약관
							</Link>
							<Link href={""} className="underline underline-offset-1">
								개인정보 처리방침
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div
				className="flex flex-col sm:min-w-[360px] !relative sm:max-w-[480px] sm:w-full sm:mx-auto w-[480px] min-h-screen h-full overflow-scroll max-h-screen scrollbar-hide bg-White"
				ref={contentsRef}>
				<div className="h-screen">{children}</div>
				<ScrollBtn showBtn={showBtn} scrollTopHandler={scrollTopHandler} />
				<ToastContainer
					autoClose={1000}
					hideProgressBar
					closeOnClick
					theme="dark"
					closeButton={false}
					position={"bottom-right"}
				/>
			</div>
		</div>
	);
}
