"use client";

import React from "react";
import dynamic from "next/dynamic";

import ToggleSwitchWeb from "@/components/ToggleSwitchWeb";
import ToggleSwitchAndroid from "@/components/ToggleSwitchAndroid";
import ToggleSwitchIOS from "@/components/ToggleSwitchIOS";
import ToggleSwitchCollection from "@/components/ToggleSwitchCollection";

export default function Page() {
	return (
		<>
			<div className="flex">
				<ToggleSwitchWeb />
				<ToggleSwitchAndroid />
				<ToggleSwitchIOS />
			</div>

			<div>
				<ToggleSwitchCollection />
			</div>
		</>
	);
}
