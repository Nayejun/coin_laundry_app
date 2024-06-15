// src/pages/index.tsx
import React from "react";
import MainView from "@/app/(public)/beforeLogin/components/A-MainViewBeforeLogin/page";
import ContainerInactiveLaundryPage from "@/app/(public)/beforeLogin/components/B-ContainerLaundryPageBeforeLogin/page";
import AppFooter from "@/app/(public)/beforeLogin/components/F-Footer/page";
import ContainerReviewPage from "@/app/(public)/beforeLogin/components/D-ContainerReviewBeforeLogin/page";

export default function BeforeLoginHomePage() {
	return (
		<div>
			<MainView />
			<ContainerInactiveLaundryPage />
			<ContainerReviewPage />
			<AppFooter />
		</div>
	);
}
