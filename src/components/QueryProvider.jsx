"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { AppProvider } from "@/hooks/context";

const QueryProvider = ({ children }) => {
	// Initialize a QueryClient instance
	const [queryClient] = useState(() => new QueryClient());

	return (
		<QueryClientProvider client={queryClient}>
			<AppProvider>{children}</AppProvider>
		</QueryClientProvider>
	);
};

export default QueryProvider;
