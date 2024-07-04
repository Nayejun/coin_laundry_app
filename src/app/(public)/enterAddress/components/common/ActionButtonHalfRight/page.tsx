"use client";

import React, { FC } from "react";

type ActionButtonProps = {
	label: string;
	onClick: () => void;
	className?: string;
};

const ActionButtonHalf: FC<ActionButtonProps> = ({
	label,
	onClick,
	className,
}) => {
	return (
		<div
			className={`w-full max-w-[430px] py-[20px] pl-[8px] pr-[24px] bg-static-white `}
		>
			<button
				className={`w-full h-[52px] rounded-md flex justify-center items-center text-headline-1 font-bold ${className}`}
				onClick={onClick}
			>
				{label}
			</button>
		</div>
	);
};

export default ActionButtonHalf;
