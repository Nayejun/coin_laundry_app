import React from "react";

import CTAButtonLarge from "@/components/ui/CTAButtonLarge";

import Question from "@/assets/icons/userGuide/question.svg";

const PricePage = () => {
	const distanceList = [
		{ name: "100m 이내", price: "4,000원" },
		{ name: "200m 이내", price: "4,300원" },
		{ name: "300m 이내", price: "4,600원" },
		{ name: "400m 이내", price: "4,900원" },
		{ name: "500m 이내", price: "5,200원" },
		{ name: "600m 이내", price: "5,500원" },
		{ name: "700m 이내", price: "5,800원" },
		{ name: "800m 이내", price: "6,100원" },
		{ name: "1km 이상", price: "6,400원~" },
	];

	return (
		<>
			{distanceList.map((list, i) => (
				<div
					key={i}
					className={`mx-5 flex justify-between py-5 ${
						i !== 8 ? "border-b border-dashed border-gray-300 " : ""
					}px-2`}
				>
					<p className="text-label-alternative font-semibold">
						{list.name}
					</p>
					<p className="text-label-normal text-lg font-semibold">
						{list.price}
					</p>
				</div>
			))}
			<div className=" text-label-alternative text-sm font-medium mx-5 px-4 -translate-y-5">
				- 100m당 200원씩 추가 부과 됩니다.
			</div>
			<div className="flex flex-row gap-2 items-center mt-7 bg-background-normal-alternative rounded-t-md  mx-5 p-5 border-b border-dashed border-line-normal-normal">
				<Question />
				<p className=" text-label-neutral font-semibold text-sm">
					배송비 측정 기준은 무엇인가요?
				</p>
			</div>
			<div className="flex flex-row gap-2 items-center bg-background-normal-alternative rounded-b-md  mx-5 p-5 ">
				<p className=" text-label-alternative text-xs">
					배송비는 입력된 고객님의{" "}
					<span className=" text-primary-normal font-semibold">
						주거 위치
					</span>
					와
					<span className=" text-primary-normal font-semibold">
						세탁소 간의 거리
					</span>
					를 계산하여 측정된 가격입니다
				</p>
			</div>
			<div className="flex justify-center mt-20">
				<CTAButtonLarge
					buttonColor="#13C2C2"
					borderColor="#00C4CC"
					borderThickness="0px"
					buttonText="세탁물 맡기기"
					buttonTextSize="16px"
					buttonTextColor="#FFFFFF"
				/>
			</div>
		</>
	);
};

export default PricePage;
