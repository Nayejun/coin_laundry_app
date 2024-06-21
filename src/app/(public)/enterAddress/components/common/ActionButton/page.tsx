"use client";

import React, { FC } from "react";

type ActionButtonProps = {
	label: string;
	onClick: () => void;
	className?: string;
};

const ActionButton: FC<ActionButtonProps> = ({
	label,
	onClick,
	className,
}) => {
	return (
		<div
			className={`w-full max-w-[430px] py-[24px] px-[24px] bg-static-white ${className}`}
		>
			<button
				className="w-full h-[52px] rounded-md flex justify-center items-center transition-colors duration-300 text-static-white text-body-1-normal font-semibold bg-primary-normal hover:bg-primary-strong active:bg-primary-heavy ${className}"
				onClick={onClick}
			>
				{label}
			</button>
		</div>
	);
};

export default ActionButton;
