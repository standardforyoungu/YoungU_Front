import { Metadata } from "next";
import ListHeader from "@/components/@commons/ListHeader";

export const metadata: Metadata = {
	title: "투표하기 | 영유스탠다드",
};

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<ListHeader mainTitle="다음 동네 투표하기" url="/" />
			{children}
		</>
	);
}
