// src/pages/index.tsx
import React from "react";
import MainView from "@/app/(app)/app/home/components/mainViewAfterLogin/page";
import ContainerActiveLaundryPage from "@/app/(app)/app/home/components/containerActiveLaundryPage/page";
import AppFooter from "@/app/(app)/app/footer/page";
import ContainerReviewPage from "@/app/(app)/app/home/components/containerReviewPage/page";

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
