import { Metadata } from "next";

export const metadata: Metadata = {
	title: "영어유치부 | 영유스탠다드",
};

export default function layout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
