"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { useGetUserInfo } from "@/hooks/myPage/useGetUserInfo";

import { Baby, ChevronRight, Settings } from "lucide-react";

export default function LoginMypage() {
	const { userInfo } = useGetUserInfo();

	return (
		<div className="px-5 py-6 flex flex-col gap-4">
			<div className="flex justify-between items-start">
				<div className="flex gap-2 items-center">
					<Image src={userInfo?.prf_img} alt="profileImg" width={48} height={48} className="rounded-full" />
					<div className="head4 text-gray-80">
						<p className="flex gap-1">
							<span className="text-gray-20 max-w-[203px] truncate break-all block">{userInfo?.mbr_nck_nm}</span> 님
						</p>
						<p>반가워요!</p>
					</div>
				</div>
				<Link href={"/my-page/setting"}>
					<Settings className="text-gray-80 cursor-pointer" size={22} />
				</Link>
			</div>
			<Link className={`bg-gray-99 py-3 px-4 rounded-[8px] flex justify-between`} href={"/my-page/child-list"}>
				<div className="flex items-center gap-1">
					<Baby className="text-gray-60" size={20} />
					<p className="text-gray-40">아이 정보 관리</p>
				</div>
				<ChevronRight className="text-gray-90" size={32} />
			</Link>
		</div>
	);
}
