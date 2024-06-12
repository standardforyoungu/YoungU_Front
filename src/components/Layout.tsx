"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";
import ScrollBtn from "@/components/@commons/ScrollBtn";
import { ToastContainer } from "react-toastify";
import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { usePathname } from "next/navigation";
import { useRecoilState } from "recoil";
import { scrollState } from "@/atom/scrollState";

export default function Layout({ children }: { children: ReactNode }) {
	const pathname = usePathname();
	const contentsRef = useRef<HTMLDivElement>(null);
	const [showBtn, setShowBtn] = useState(false);
	const [scroll] = useRecoilState(scrollState);
	const [isMount, setIsMount] = useState(false);

	useEffect(() => {
		setIsMount(true);
	}, []);

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

	useEffect(() => {
		if (contentsRef?.current) {
			contentsRef.current.scrollTo({ top: 0 });
		}
	}, [pathname, scroll]);

	return (
		isMount && (
			<div className="min-w-screen w-full flex items-center justify-center gap-[80px] h-full min-h-screen bg-gray-95">
				<div className="sm:hidden md:hidden flex flex-col justify-center items-center w-[584px] h-screen">
					<Image src="/images/large_logo.svg" alt="logo" width={584} height={173} />
					<h3 className="head3 text-gray-40">
						우리 아이와 <span className="text-orange-100 text-emphasis">딱</span> 맞는{" "}
						<span className="text-orange-100 text-emphasis">영유</span> 찾기
					</h3>
					<div className="absolute flex flex-col justify-center items-center gap-4 bottom-[40px] text-gray-60 body3">
						<Link
							href={"https://www.instagram.com/youngu_standard?igsh=cTE5Nzlxa2JyOHc3&utm_source=qr"}
							className="w-12 h-12 flex justify-center items-center rounded-full bg-gray-90">
							<Instagram className="text-gray-40" size={24} />
						</Link>
						<div className="flex flex-col gap-[4px] items-center justify-center">
							<p>email: youngustandard2024@gmail.com</p>
							<div className="flex gap-3">
								<Link
									target="_blank"
									href={
										"https://docs.google.com/document/d/1UXlXVMll3ZvqEcRQ1e8e66iURPbBqvTMbBXzdpjhXc4/edit#heading=h.i6f49ueysxf7"
									}
									className="underline underline-offset-1">
									이용약관
								</Link>
								<Link
									target="_blank"
									href={"https://docs.google.com/document/d/1v1JhJ5HGxpJgnRLON_l28P8IXqZAQSHgE7xMz7UInKQ/edit"}
									className="underline underline-offset-1">
									개인정보 처리방침
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div
					className="flex flex-col sm:min-w-[360px] !relative sm:max-w-[480px] sm:w-full sm:mx-auto w-[480px] min-h-screen h-full overflow-scroll max-h-screen scrollbar-hide bg-White"
					ref={contentsRef}>
					<div className="h-full">{children}</div>

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
		)
	);
}
