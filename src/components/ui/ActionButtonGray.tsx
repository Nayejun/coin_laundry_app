"use client";

import React, { FC } from "react";
import { ActionButtonProps } from "@/lib/types";

const ActionButtonGray: FC<ActionButtonProps> = ({ label, onClick }) => {
	return (
		<button
			className={`w-[430px] h-[52px] rounded-[10px] py-[12px] px-[28px] flex justify-center items-center transition-colors duration-300 ${"bg-label-assistive text-white hover:bg-primary-strong active:bg-primary-heavy"}`}
			onClick={onClick}
		>
			{label}
		</button>
	);
};

export default ActionButtonGray;
 