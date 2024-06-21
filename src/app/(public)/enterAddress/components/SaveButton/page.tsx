"use client";
import React, { FC } from "react";
import ActionButton from "@/app/(public)/enterAddress/components/common/ActionButton/page";
import { BasicDivider } from "@/components/ui/BasicDivider";

interface PageProps {
	label: string;
	onClick: () => void;
}

const Page: FC<PageProps> = ({ label, onClick }) => {
	// onClick navigate to another page

	return (
		<div>
			<div className="fixed bottom-24 w-full max-w-[430px] h-[1px] bg-line-normal border shadow-elevation-shadow-emphasize">
				{" "}
				{/* Adjusted bottom position */}
				<ActionButton
					label="저장"
					onClick={onClick}
					className="w-full text-primary-normal"
				/>
			</div>
		</div>
	);
};

export default Page;
