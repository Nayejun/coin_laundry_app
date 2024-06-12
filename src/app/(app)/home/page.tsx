// src/pages/index.tsx
import React from "react";
import MainView from "@/app/(app)/home/components/A-MainViewAfterLogin/page";
import ContainerActiveLaundryPage from "@/app/(app)/home/components/B-ContainerLaundryPageAfterLogin/page";
import AppFooter from "@/app/(app)/home/components/F-Footer/page";
import ContainerReviewPage from "@/app/(app)/home/components/D-ContainerReviewAfterLogin/page";

export default function HomePage() {
	return (
		<div>
			<MainView />
			<ContainerActiveLaundryPage />
			<ContainerReviewPage />
			<AppFooter />
		</div>
	);
}
