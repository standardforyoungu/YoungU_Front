import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(() => import("@/components/myPage/ChildList"), { ssr: false });

export default function ChildList() {
	return (
		<>
			<DynamicComponentWithNoSSR />
		</>
	);
}
