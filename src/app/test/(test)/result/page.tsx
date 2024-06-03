import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(() => import("@/components/test/Result"), { ssr: false });

export default function ChildList() {
	return (
		<>
			<DynamicComponentWithNoSSR />
		</>
	);
}
