"use client";

import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function QueryProvider({ children }: { children: ReactNode }) {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
			{/* <ReactQueryDevtools /> */}
		</QueryClientProvider>
	);
}
