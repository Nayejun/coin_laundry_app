"use client";

import React, { FC } from "react";
import { ActionButtonProps } from "@/lib/types";

const ActionButton: FC<ActionButtonProps> = ({ label, onClick }) => {
	return (
		<button
			className={`w-[342px] h-[52px] rounded-[10px] py-[12px] px-[28px] flex justify-center items-center transition-colors duration-300 ${"bg-primary-normal text-white hover:bg-primary-strong active:bg-primary-heavy"}`}
			onClick={onClick}
		>
			{label}
		</button>
	);
};

export default ActionButton;
