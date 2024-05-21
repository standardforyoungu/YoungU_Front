import MainHeader from "@/components/@commons/MainHeader";

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<MainHeader />
			{children}
		</>
	);
}
