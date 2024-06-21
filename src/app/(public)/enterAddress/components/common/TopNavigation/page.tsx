import React, { FC, ReactNode } from "react";
import ArrowLeft from "@/assets/icons/others/arrow-left.svg";

type TopNavigationProps = {
	text: string;
	onClick: () => void;
	children?: ReactNode;
};

const TopNavigation: FC<TopNavigationProps> = ({
	text,
	onClick,
	children,
}) => {
	return (
		<div>
			<div className="grid grid-cols-3 items-center w-full">
				<div className="ml-[12px] my-[9px]">
					<div className="w-[36px] h-[36px] flex justify-center items-center">
						<button
							onClick={onClick}
							className="flex justify-center items-center"
						>
							<ArrowLeft />
						</button>
					</div>
				</div>
				<span className="text-center text-headline-1 font-semibold">
					{text}
				</span>
				<div className="justify-self-end flex items-center text-label-2">
					{children}
				</div>
			</div>
		</div>
	);
};

export default TopNavigation;
