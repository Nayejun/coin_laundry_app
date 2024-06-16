"use client";
import React from "react";
import { useRouter } from "next/navigation";

import MainBanner from "./components/MainBanner";
import GuideExplanation from "./components/GuideExplanation";
import ThreeServices from "./components/ThreeServices";
import ChargeGuide from "./components/ChargeGuide";
import GuideTime from "./components/GuideTime";

const UserGuide = () => {
	const router = useRouter();

	// console.log(router);
	return (
		<>
			<section id="introduce">
				<MainBanner />
			</section>
			<section>
				<GuideExplanation />
			</section>
			<section>
				<ThreeServices />
			</section>
			<section>
				<ChargeGuide />
			</section>
			<section id="time">
				<GuideTime />
			</section>
		</>
	);
};

export default UserGuide;
