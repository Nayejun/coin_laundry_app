import React from "react";

import { BasicDivider } from "@/components/ui/BasicDivider";

import AlertIco from "@/assets/icons/userGuide/ico-grayAlertCircle.svg";
import GrayEllipse from "@/assets/icons/userGuide/ico-grayEllipse.svg";
import MintEllipse from "@/assets/icons/userGuide/ico-mintEllipse.svg";

const GuideTime = () => {
	return (
		<section>
			<BasicDivider variant="thick" vertical={false} />
			<div className=" py-12 px-5 flex flex-col">
				<div className="">
					<div className="flex justify-center flex-col items-center mb-8">
						<p className=" font-bold text-label-normal text-2xl">
							원하는 시간에
							<span className=" text-primary-normal pl-2 ">
								맡기고
							</span>
						</p>
						<p className=" font-bold text-label-normal text-2xl">
							원하는 시간에
							<span className=" text-primary-normal pl-2">
								받아요
							</span>
						</p>
					</div>
					<div className="flex flex-row justify-between items-center bg-background-elevated-alternative rounded-t-md border-dashed border-b border-line-normal ">
						<p className=" p-5 text-cool-neutral-40">평일</p>
						<p className="p-5 text-label-alternative">
							서비스 준비중입니다.
						</p>
					</div>
					<div className="flex flex-row justify-between items-center bg-background-elevated-alternative rounded-b-md ">
						<p className=" p-5 text-cool-neutral-40">주말</p>
						<p className="p-5 text-label-normal font-semibold">
							13:00 ~ 21:00시
						</p>
					</div>
					<div className="flex flex-row mt-5">
						<AlertIco />
						<p className="ml-2 text-label-neutral text-sm">
							수거 시각{" "}
							<span className="text-primary-normal mr-1 font-bold">
								4시간 이후부터
							</span>
							배송 시각 설정이 가능합니다
						</p>
					</div>
				</div>
				<div className="mt-12 flex flex-col">
					<div className="flex flex-col items-center">
						<p className="text-label-normal text-xl text-center font-semibold">
							<span className="text-primary-normal mr-1">
								오후 3시
							</span>
							이전 주문하면?
						</p>
						<p className="text-label-normal text-xl text-center font-semibold">
							<span className="text-primary-normal mr-1">
								당일 배송
							</span>
							가능!
						</p>
					</div>
				</div>
				<div className=" mt-14 flex flex-col items-center">
					<div className="flex flex-row justify-between font-semibold gap-20">
						<p className="text-label-alternative">오늘 주문</p>
						<p className="text-primary-normal">오늘 배송</p>
					</div>

					<div className="flex justify-center items-center mt-2">
						<div className="relative flex items-center ">
							<div className=" ml-2">
								<GrayEllipse />
							</div>
							<MintEllipse />
							<div className="absolute w-1/2 border-t-2 border-gray-400 top-7 " />
							<div className="absolute w-1/2 border-t-2 border-teal-400 top-7 right-0 " />

							<div className="absolute left-0 top-6 w-3 h-3 bg-white border-2 border-gray-400 rounded-full" />

							<div className="absolute left-1/2 -translate-x-1/2 top-6 w-3 h-3 bg-white border-2 border-gray-400 rounded-full" />

							<div className="absolute right-0 top-6 w-3 h-3 bg-teal-400 border-2 border-teal-400 rounded-full" />
						</div>
					</div>

					<div className="flex flex-row mt-4 justify-between items-center w-full">
						<div className="flex flex-col justify-center items-center ">
							<p className="text-sm text-label-assistive font-semibold">
								오늘
							</p>
							<p className="text-sm text-label-alternative font-semibold">
								13:00 부터
							</p>
						</div>
						<div className="flex flex-col justify-center items-center translate-x-2">
							<p className="text-sm text-label-assistive font-semibold">
								주문 기준
							</p>
							<p className="text-sm text-label-alternative font-semibold">
								15:00 까지
							</p>
						</div>
						<div className="flex flex-col justify-center items-center">
							<p className="text-sm text-primary-normal font-semibold">
								당일 배송 가능
							</p>
							<p className="text-sm text-primary-normal font-semibold">
								21:00 까지
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default GuideTime;
