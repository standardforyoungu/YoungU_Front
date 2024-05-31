import React from "react";

export default function ContentBox({ children }: { children: React.ReactNode }) {
	return <div className="w-full px-[2rem] mt-10 my-12">{children}</div>;
}
