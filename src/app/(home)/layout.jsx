"use client";
import { FallbackLoading } from "@/components/ui/Loading";
import { AppProvider } from "@/hooks/context";
import { Suspense } from "react";
export default function HomeLayout({ children }) {
	return (
		<AppProvider>
			<Suspense fallback={<FallbackLoading />}>
				<main>{children}</main>
			</Suspense>
		</AppProvider>
	);
}
