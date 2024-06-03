import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(() => import("@/components/test/AddChild"), { ssr: false });

export default function ChildList() {
	return (
		<>
			<DynamicComponentWithNoSSR />
		</>
	);
}
