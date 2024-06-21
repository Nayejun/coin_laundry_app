import React, { FC } from "react";

interface ResetButtonProps {
	label: string;
	onClick: () => void;
}

const ResetButton: FC<ResetButtonProps> = ({ label, onClick }) => {
	return (
		<div className="mr-[24px]">

		<button
			className="w-[48px] h-[24px] bg-red-500 text-white rounded-[10px] flex items-center justify-center text-caption-1"
			onClick={onClick}
		>
			{label}
		</button>
		</div>
	);
};

export default ResetButton;
