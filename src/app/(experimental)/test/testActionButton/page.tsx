"use client";
import React, { FC } from "react";
import ActionButton from "@/components/ui/ActionButton";

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
				<ActionButton label="행동" onClick={handleClick} />
			</div>

			<div className="mx-[10px] mt-[2px] text-semibold font-[600]">
				Strong
			</div>
			<div className="mx-[10px] mt-[2px] text-gray-300 font-normal ">
				Button_Hover
			</div>
			<div className="mx-[10px] mb-[10px]">
				<button
					className={`w-[328px] h-[48px] rounded-[10px] py-[12px] px-[28px] justify-center items-center transition-colors duration-300 text-white bg-primary-strong`}
				>
					행동
				</button>
			</div>

			<div className="mx-[10px] mt-[2px] text-semibold font-[600]">
				Heavy
			</div>
			<div className="mx-[10px] mt-[2px] text-gray-300 font-normal ">
				Button_Press
			</div>
			<div className="mx-[10px] mb-[10px]">
				<button
					className={`w-[328px] h-[48px] rounded-[10px] py-[12px] px-[28px] justify-center items-center transition-colors duration-300 text-white bg-primary-heavy`}
				>
					행동
				</button>
			</div>
		</>
	);
};

export default Page;
