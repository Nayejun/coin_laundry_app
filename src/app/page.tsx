// src/pages/index.tsx
import React from "react";
import MainView from "@/app/(app)/app/home/components/mainViewBeforeLogin/page";
import ContainerInactiveLaundryPage from "@/app/(app)/app/home/components/containerInactiveLaundryPage/page";
import AppFooter from "@/app/(app)/app/footer/page";
import ContainerReviewPage from "@/app/(app)/app/home/components/containerReviewPage/page";

export default function HomePage() {
	return (
		<div>
			<MainView />
			<ContainerInactiveLaundryPage />
			<ContainerReviewPage />
			<AppFooter />
		</div>
	);
}
