import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(() => import("@/components/test/ProcessPage"), { ssr: false });

export default function ChildList() {
	return (
		<>
			<DynamicComponentWithNoSSR />
		</>
	);
}
