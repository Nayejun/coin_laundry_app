import React, { FC } from "react";

interface ResetButtonProps {
	label: string;
	onClick: () => void;
}

const ResetButton: FC<ResetButtonProps> = ({ label, onClick }) => {
	return (
		<button
			className="w-[342px] h-[48px] mt-[16px] bg-red-500 text-white rounded-[10px] flex items-center justify-center"
			onClick={onClick}
		>
			{label}
		</button>
	);
};

export default ResetButton;
