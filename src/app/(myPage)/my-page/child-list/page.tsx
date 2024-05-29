import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(() => import("@/components/childList/ChildList"), { ssr: false });

export default function ChildList() {
	return (
		<>
			<DynamicComponentWithNoSSR />
		</>
	);
}
