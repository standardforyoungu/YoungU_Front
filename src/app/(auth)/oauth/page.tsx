"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

export default function AuthPage() {
	const searchParams = useSearchParams();
	const authCode = searchParams.get("code");

	return <></>;
}
