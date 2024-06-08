"use client";

import React, { useState } from "react";
import ToggleSwitch from "./ui/ToggleSwitch";

export default function ToggleSwitchCollection() {
	const [isActive, setIsActive] = useState(true);

	const handleActiveToggle = (
		checked: boolean | ((prevState: boolean) => boolean)
	) => {
		setIsActive(checked);
		console.log("Active toggle is now:", checked ? "On" : "Off");
	};

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				position: "relative",
				backgroundColor: "#D9FFE6",
				padding: "20px",
				boxSizing: "border-box",
				borderRadius: "10px",
				overflow: "hidden",
				width: "780px",
				height: "100px",
				marginLeft: "10px",
				marginTop: "10px",
			}}
		>
			<svg
				width="100%"
				height="100%"
				viewBox="0 0 800 100"
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					pointerEvents: "none",
					zIndex: 1,
					borderRadius: "10px",
				}}
			>
				<rect
					x="0"
					y="0"
					width="800"
					height="100"
					fill="none"
					stroke="#9747FF"
					strokeWidth="1"
					strokeDasharray="10,5"
					rx="10"
					ry="10"
				/>
			</svg>
			<div
				style={{
					display: "flex",
					justifyContent: "space-around", // Use space-around for even spacing
					alignItems: "center",
					width: "100%", // Ensure the inner div takes full width of the container
					position: "relative",
					zIndex: 2,
				}}
			>
				<ToggleSwitch
					deviceType="Web"
					initialChecked={false}
					onToggle={handleActiveToggle}
					knobSizeOn="24px"
					knobSizeOff="24px"
					knobColorOn="#FFF"
					knobColorOff="#FFF"
					trackColorOn="#0066FF"
					trackColorOff="#70737C"
					trackOpacityOff={0.16}
					trackOpacityOn={1}
					borderColor="#0066FF"
					borderThickness="0px"
					opacity={1}
					borderOpacity={1}
				/>
				<ToggleSwitch
					deviceType="Web"
					initialChecked={isActive}
					onToggle={handleActiveToggle}
					knobSizeOn="24px"
					knobSizeOff="24px"
					knobColorOff="#FFFFFF"
					knobColorOn="#FFFFFF"
					trackColorOff="#70737C"
					trackColorOn="#0066FF"
					trackOpacityOff={0.16}
					trackOpacityOn={1}
					borderColor="#70737C"
					borderThickness="0px"
					opacity={1}
					borderOpacity={1}
				/>
				<ToggleSwitch
					deviceType="Web"
					initialChecked={false} // Set initial checked state directly
					knobSizeOff="24px"
					knobSizeOn="24px"
					knobColorOn="#FFFFFF"
					knobColorOff="#FFFFFF"
					trackColorOn="#0066FF"
					trackColorOff="#70737C"
					trackOpacityOff={0.08}
					trackOpacityOn={1}
					borderColor="#70737C"
					borderThickness="0px"
					opacity={1}
					disabled={true}
				/>
				<ToggleSwitch
					deviceType="Web"
					initialChecked={isActive}
					onToggle={handleActiveToggle}
					knobSizeOn="24px"
					knobSizeOff="24px"
					knobColorOff="#FFFFFF"
					knobColorOn="#FFFFFF"
					trackColorOff="#70737C"
					trackColorOn="#0066FF"
					trackOpacityOff={0.16}
					trackOpacityOn={0.43}
					borderColor="#70737C"
					borderThickness="0px"
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
					knobColorOff="#74757F"
					knobColorOn="#FFFFFF"
					knobOpacityOff={1}
					knobOpacityOn={1}
					trackColorOn="#0066FF"
					trackColorOff="#E1E2EC"
					trackOpacityOff={1}
					trackOpacityOn={1}
					borderColor="#70737C"
					borderThickness="2px"
					opacity={1}
					borderOpacity={1}
				/>
				<ToggleSwitch
					deviceType="Android"
					initialChecked={isActive}
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
				<ToggleSwitch
					deviceType="IOS"
					initialChecked={false}
					onToggle={handleActiveToggle}
					knobSizeOn="27px"
					knobSizeOff="27px"
					knobColorOn="#FFFFFF"
					knobColorOff="#FFFFFF"
					trackColorOn="#0066FF"
					trackColorOff="#70737C"
					trackOpacityOff={0.16}
					trackOpacityOn={1}
					borderColor="#0066FF"
					borderThickness="0px"
				/>
				<ToggleSwitch
					deviceType="IOS"
					initialChecked={isActive}
					onToggle={handleActiveToggle}
					knobSizeOn="27px"
					knobSizeOff="27px"
					knobColorOff="#FFFFFF"
					knobColorOn="#FFFFFF"
					trackColorOff="#70737C"
					trackColorOn="#0066FF"
					trackOpacityOff={0.16}
					trackOpacityOn={1}
					borderColor="#70737C"
					borderThickness="0px"
					opacity={1}
					borderOpacity={1}
				/>
				<ToggleSwitch
					deviceType="IOS"
					initialChecked={false} // Set initial checked state directly
					knobSizeOff="27px"
					knobSizeOn="27px"
					knobColorOn="#FFF"
					knobColorOff="#FFF"
					trackColorOn="#0066FF"
					trackColorOff="#70737C"
					trackOpacityOff={0.08}
					trackOpacityOn={1}
					disabled={true}
				/>
				<ToggleSwitch
					deviceType="IOS"
					initialChecked={true} // Set initial checked state directly
					knobSizeOff="27px"
					knobSizeOn="27px"
					knobColorOn="#FFF"
					knobColorOff="#FFF"
					trackColorOn="#0066FF"
					trackColorOff="#70737C29"
					trackOpacityOff={0.16}
					trackOpacityOn={1}
					borderColor="#70737C29"
					opacity={0.5}
					disabled={true}
				/>
			</div>
		</div>
	);
}
