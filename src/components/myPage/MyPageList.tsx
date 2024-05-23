import Link from "next/link";
import React from "react";

import { ChevronRight } from "lucide-react";

const NavList = [
	{
		path: "/my-page/inquiry",
		title: "문의하기",
	},
	{
		path: "/my-page/terms-and-conditions",
		title: "이용약관",
	},
	{
		path: "/my-page/privacy",
		title: "개인정보 처리방침",
	},
];

export default function MyPageList() {
	return (
		<div className="flex flex-col border-t-[6px] border-gray-99">
			{NavList.map(({ path, title }: { path: string; title: string }) => (
				<Link href={path} key={path} className="px-5 py-4 flex justify-between items-center border-b border-gray-99">
					<p className="text-gray-40 head4">{title}</p>
					<ChevronRight size={32} className="text-gray-90" />
				</Link>
			))}
		</div>
	);
}
