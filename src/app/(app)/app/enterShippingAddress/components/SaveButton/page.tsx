"use client";
import React, { FC } from "react";
import ActionButton from "@/components/ui/ActionButton";
import { BasicDivider } from "@/components/ui/BasicDivider";

interface PageProps {
	label: string;
	onClick: () => void;
}

const Page: FC<PageProps> = ({ label, onClick }) => {

  // onClick navigate to another page


	return (
		<>
			<div>
      <div className="fixed bottom-[28px] left-1/2 transform -translate-x-1/2 bg-white flex flex-col justify-around items-center h-16 w-[390px] rounded-md z-40">
        <BasicDivider variant="normal"/>
        <div className="h-[20px]"></div>
				<ActionButton label={"저장"} onClick={onClick} />
      </div>
			</div>
		</>
	);
};

export default Page;


