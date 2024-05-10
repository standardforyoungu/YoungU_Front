import Layout from "@/components/Layout";
import React from "react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
	return <Layout>{children}</Layout>;
}
