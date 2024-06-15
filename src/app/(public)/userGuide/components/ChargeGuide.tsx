"use client";

import React from "react";

import { BasicDivider } from "@/components/ui/BasicDivider";
import CTAButtonMedium from "@/components/ui/CTAButtonMedium";

const ChargeGuide = () => {
	return (
		<section>
			<BasicDivider variant="thick" vertical={false} />
			<div className=" py-12 px-5 flex flex-col">
				<div className="flex flex-row justify-center font-bold text-2xl mb-7 ">
					<span className="text-label-normal">어플 이름</span>
					<span className="text-primary-normal ml-2">이용 요금</span>
				</div>
				<div className="text-center text-label-neutral leading-6 flex flex-col">
					<div>사용자의 위치와 코인세탁소까지의</div>
					<div className="flex flex-row justify-center items-center relative">
						<span className="font-semibold relative">
							<p className="z-10 text-label-normal relative">거리</p>
							<div className="w-full h-4 bg-primary-color-cyan-50 absolute top-3 left-0 z-0" />
						</span>
						<p className="relative z-10">
							에 따라 요금이 적용됩니다.
						</p>
					</div>
					<div className="flex flex-row justify-center items-center relative">
						<span className="font-semibold relative">
							<p className="z-10 text-label-normal relative">
								정찰제
							</p>
							<div className="w-full h-4 bg-primary-color-cyan-50 absolute top-3 left-0 z-0" />
						</span>
						<p className="relative z-10">
							로 투명하게 공개된 가격입니다.
						</p>
					</div>
				</div>
				<div className="flex justify-center mt-7">
					<CTAButtonMedium
						buttonColor="#13C2C2"
						borderColor="#00C4CC"
						borderThickness="0px"
						buttonText="요금 자세히 알아보기"
						buttonTextSize="16px"
						buttonTextColor="#FFFFFF"
					/>
				</div>
			</div>
		</section>
	);
};

export default ChargeGuide;
