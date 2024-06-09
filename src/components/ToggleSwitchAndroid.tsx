"use client";

import React, { useState } from "react";
import ToggleSwitch from "@/components/ui/ToggleSwitch"; // Update this import path if necessary

export default function ToggleSwitchAndroid() {
	const [isActive, setIsActive] = useState(true); // Set initial state to true

	const handleActiveToggle = (
		checked: boolean | ((prevState: boolean) => boolean)
	) => {
		setIsActive(checked);
		console.log("Active toggle is now:", checked ? "On" : "Off");
	};

	return (
		<div className="p-5 px-6 bg-background-light min-h-full flex">
			<div className="bg-white rounded-3xl px-5 py-5 space-y-8">
				<h1 className="text-lg font-bold mb-2">Android</h1>
				<div className="space-y-8">
					<div className="space-y-4">
						<div className="flex items-center">
							<span className="mr-2 font-bold">active = </span>
							<span className="flex items-center">
								<span
									className="px-2 py-1 rounded text-black mr-2"
									style={{ backgroundColor: "#70737C26" }}
									onClick={() => handleActiveToggle(false)}
								>
									false
								</span>
								<span
									className="px-2 py-1 rounded text-black"
									style={{ backgroundColor: "#70737C26" }}
									onClick={() => handleActiveToggle(true)}
								>
									true
								</span>
							</span>
						</div>
						<div className="space-x-4">
							<ToggleSwitch
								deviceType="Android"
								initialChecked={false}
								onToggle={handleActiveToggle}
								knobSizeOff="16px"
								knobSizeOn="24px"
								knobColorOff="#74757F"
								knobColorOn="#FFFFFF"
								knobOpacityOff={1}
								knobOpacityOn={1}
								trackColorOn="#0066FF"
								trackColorOff="#70737C"
								trackOpacityOff={0.16}
								trackOpacityOn={1}
								borderColor="#70737C"
								borderThickness="2px"
								opacity={1}
								borderOpacity={1}
							/>
							<ToggleSwitch
								deviceType="Android"
								initialChecked={true}
								onToggle={handleActiveToggle}
								knobSizeOff="16px"
								knobSizeOn="24px"
								knobColorOff="#74757F"
								knobColorOn="#FFFFFF"
								knobOpacityOff={1}
								knobOpacityOn={1}
								trackColorOn="#0066FF"
								trackColorOff="#70737C"
								trackOpacityOff={0.16}
								trackOpacityOn={1}
								borderColor="#70737C"
								borderThickness="2px"
								opacity={1}
								borderOpacity={1}
							/>
						</div>
					</div>
					<div className="space-y-4">
						<div className="flex items-center">
							<span className="mr-2 font-bold">disable = </span>
							<span className="flex items-center">
								<span
									className="px-2 py-1 rounded text-black mr-2"
									style={{ backgroundColor: "#70737C26" }}
								>
									false
								</span>
								<span
									className="px-2 py-1 rounded text-black"
									style={{ backgroundColor: "#70737C26" }}
								>
									true
								</span>
							</span>
						</div>
						<div className="space-x-4">
							<ToggleSwitch
								deviceType="Android"
								initialChecked={false}
								onToggle={handleActiveToggle}
								knobSizeOff="16px"
								knobSizeOn="24px"
								knobColorOff="#74757F"
								knobColorOn="#FFFFFF"
								knobOpacityOff={1}
								knobOpacityOn={1}
								trackColorOn="#0066FF"
								trackColorOff="#70737C"
								trackOpacityOff={0.16}
								trackOpacityOn={1}
								borderColor="#70737C"
								borderThickness="2px"
								opacity={1}
								borderOpacity={1}
								disabled={true}
							/>
							<ToggleSwitch
								deviceType="Android"
								initialChecked={false}
								onToggle={handleActiveToggle}
								knobSizeOff="16px"
								knobSizeOn="24px"
								knobColorOff="#1B1B1F"
								knobColorOn="#FFFFFF"
								knobOpacityOff={1}
								knobOpacityOn={1}
								trackColorOn="#0066FF"
								trackColorOff="#FFFFFF"
								trackOpacityOff={1}
								trackOpacityOn={1}
								borderColor="#1B1B1F"
								borderThickness="2px"
								borderOpacity={0.4}
								opacity={0.38}
								disabled={true}
							/>
						</div>
						<div className="space-x-4">
							<ToggleSwitch
								deviceType="Android"
								initialChecked={isActive}
								onToggle={handleActiveToggle}
								knobSizeOff="16px"
								knobSizeOn="24px"
								knobColorOff="#74757F"
								knobColorOn="#FEFBFF"
								knobOpacityOff={1}
								knobOpacityOn={1}
								trackColorOn="#0066FF"
								trackColorOff="#70737C"
								trackOpacityOff={1}
								trackOpacityOn={1}
								borderColor="#70737C"
								borderThickness="2px"
								borderOpacity={1}
								opacity={1}
								disabled={true}
							/>
							<ToggleSwitch
								deviceType="Android"
								initialChecked={isActive}
								onToggle={handleActiveToggle}
								knobSizeOff="16px"
								knobSizeOn="24px"
								knobColorOff="#74757F"
								knobColorOn="#FEFBFF"
								knobOpacityOff={1}
								knobOpacityOn={1}
								trackColorOn="#1B1B1F"
								trackColorOff="#70737C"
								trackOpacityOff={1}
								trackOpacityOn={0.1}
								borderColor="#70737C"
								borderThickness="2px"
								borderOpacity={1}
								opacity={1}
								disabled={true}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
