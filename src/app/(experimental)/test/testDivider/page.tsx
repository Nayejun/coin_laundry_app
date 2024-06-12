"use client";

import React, { FC } from "react";
import { BasicDivider } from "@/components/ui/BasicDivider";

const Page: FC = () => {
	return (
		<>
			<div className="flex w-[390px] h-[100px] items-center justify-center gap-[16px] py-[24px] relative bg-background-normal-normal rounded-[16px] overflow-hidden border border-solid border-line-normal mb-10 ml-10">
				<BasicDivider
					className="!bg-background-normal-alternative !w-[390px]"
					variant="thick"
					vertical={false}
				/>
			</div>
			<div className="flex w-[390px] h-[100px] items-center justify-center gap-[16px] py-[24px] relative bg-background-normal-normal rounded-[16px] overflow-hidden border border-solid border-line-normal mb-10 ml-10">
				<BasicDivider
					className="!w-[390px]"
					variant="normal"
					vertical={false}
				/>
			</div>
			<div className="flex w-[390px] h-[100px] items-center justify-center gap-[16px] py-[24px] relative bg-background-normal-normal rounded-[16px] overflow-hidden border border-solid border-line-normal mb-10 ml-10">
				<BasicDivider
					className="!bg-line-neutral"
					variant="normal"
					vertical={false}
					width="90%"
				/>
			</div>
			<div className="flex w-[390px] h-[100px] items-center justify-center gap-[16px] py-[24px] relative bg-background-normal-normal rounded-[16px] overflow-hidden border border-solid border-line-normal mb-10 ml-10">
				<BasicDivider
					className="!bg-line-normal"
					variant="normal"
					vertical={true}
				/>
			</div>
		</>
	);
};

export default Page;
