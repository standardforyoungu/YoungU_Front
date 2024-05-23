import ListHeader from "@/components/@commons/ListHeader";

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<ListHeader mainTitle="다음 동네 투표하기" />
			{children}
		</>
	);
}
