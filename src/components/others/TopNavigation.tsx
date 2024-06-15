import React from "react";
import ArrowLeft from "@/assets/icons/others/arrow-left.svg";

const TopNavigation = ({ text, onClick }) => {
	return (
		<div className="grid grid-cols-3 items-center p-[2px] w-[390px] h-[48px]">
			<div className="flex items-center ml-[20px]">
				<button onClick={onClick}>
					<ArrowLeft />
				</button>
			</div>
			<div className="flex items-center justify-center font-semibold">
				{text}
			</div>
			<div className="flex items-center justify-end">
				{/* Optional: Add another button/icon here */}
			</div>
		</div>
	);
};

export default TopNavigation;