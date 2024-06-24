import { Metadata } from "next";

export const metadata: Metadata = {
	title: "성향검사 | 영유스탠다드",
};

export default function layout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
