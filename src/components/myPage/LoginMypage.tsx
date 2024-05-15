import React from "react";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function LoginMypage() {
	return (
		<div>
			<div>유저 정보 페이지</div>
			<Link className={cn(buttonVariants({ variant: "default" }))} href={"/child-list"}>
				아이 정보 관리
			</Link>
		</div>
	);
}
