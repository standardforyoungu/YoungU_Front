import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(() => import("@/components/oauth/Oauth"), { ssr: false });

export default function AuthPage() {
	return (
		<>
			<DynamicComponentWithNoSSR />
		</>
	);
}
