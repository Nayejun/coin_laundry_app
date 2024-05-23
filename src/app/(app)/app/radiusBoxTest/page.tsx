import React, { FC } from "react";
import RadiusBox from "@/components/ui/radiusBox";

const Page: FC = () => {
	return (
		<div className="flex ml-5 gap-5 items-center">
			<div className="flex-col space-y-6">
				<p className="-mt-5 text-center text-[10px] font-bold">
					small: 4
				</p>
				<RadiusBox
					boxWidth="82px"
					boxHeight="32px"
					borderThickness="1px"
					additionalClasses="rounded-sm"
				/>
			</div>
			<div className="flex-col space-y-6">
				<p className="mt-5 text-center text-[10px] font-bold">
					medium: 8
				</p>
				<RadiusBox
					boxWidth="116px"
					boxHeight="40px"
					borderThickness="1px"
					additionalClasses="rounded-md"
				/>
				<p className="mt-2 text-center text-[10px]">CTA버튼, 텍스트필드</p>
			</div>
			<div className="flex-col space-y-3 mt-2">
				<p className="mt-2 text-center text-[10px] font-bold">
					large: 12
				</p>
				<RadiusBox
					boxWidth="144px"
					boxHeight="66px"
					borderThickness="1px"
					additionalClasses="rounded-lg"
				/>
				<p className="mt-2 text-center text-[10px]">카드, 셀</p>
			</div>
			<div className="flex-col space-y-3 mt-2">
				<p className="mt-2 text-center text-[10px] font-bold">
					extra large: 20
				</p>
				<RadiusBox
					boxWidth="144px"
					boxHeight="66px"
					borderThickness="1px"
					additionalClasses="rounded-xl"
				/>
				<p className="mt-2 text-center text-[10px]">바텀시트, 팝업뷰</p>
			</div>
		</div>
	);
};

export default Page;
