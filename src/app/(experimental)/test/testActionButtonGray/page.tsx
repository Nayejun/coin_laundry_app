"use client";
import React, { FC } from "react";
import ActionButtonGray from "@/components/ui/ActionButtonGray";

const Page: FC = () => {
	const handleClick = () => {
		console.log("Button clicked!");
	};

	return (
		<>
			<div className="mx-[10px] mt-[2px] text-semibold font-[600]">
				Normal
			</div>
			<div className="mx-[10px] mt-[2px] text-gray-300 font-normal ">
				Button_Default
			</div>
			<div className="mx-[10px] mb-[10px]">
				<ActionButtonGray label="행동" onClick={handleClick} />
			</div>
		</>
	);
};

export default Page;
