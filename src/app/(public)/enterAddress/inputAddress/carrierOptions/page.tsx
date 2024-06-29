"use client";
import React from "react";
import CarrierOption from "@/app/(public)/enterAddress/components/carrier/CarrierOption/page";
import { useRouter } from "next/navigation";
import TopNavigation from "@/app/(public)/enterAddress/components/common/TopNavigation/page";
import ActionButton from "@/app/(public)/enterAddress/components/common/ActionButton/page";
import ResetButton from "@/app/(public)/enterAddress/components/common/ResetButton/page";
import ProgressBar from "@/app/(public)/enterAddress/components/common/ProgressBar/page";
import ShipReceiverAddressDetailEntry from "@/app/(public)/enterAddress/components/common/ShipReceiverAddressDetailEntry/page";

const CarrierOptions: React.FC = () => {
	const router = useRouter();

	const handleBackNavigation = () => {
		router.push("/enterAddress/inputAddress/houseEntry");
	};

	const handleReset = () => {
		// Handle reset logic if needed
	};

	const handleNextNavigation = () => {
		router.push("/enterAddress/inputAddress/phoneEntry"); // Adjust the route as needed
	};

	return (
		<div className="flex flex-col items-center bg-gray-50 min-h-screen overflow-hidden">
			<div className="w-full max-w-[430px] bg-white flex flex-col pb-24 overflow-auto">
				<ProgressBar progress={75} />
				<TopNavigation
					text="배송지 추가"
					onClick={handleBackNavigation}
				>
					<ResetButton label="초기화" onClick={handleReset} />
				</TopNavigation>
				<div className="mx-[24px]">
					<CarrierOption />
				</div>
				<ShipReceiverAddressDetailEntry />
			</div>
			<div className="flex-grow w-full max-w-[430px] bg-static-white"></div>
			<div className="fixed bottom-[99px] w-full max-w-[430px] h-[1px] bg-line-normal border shadow-elevation-shadow-emphasize">
				<ActionButton
					label="다음"
					onClick={handleNextNavigation}
					className="w-full text-primary-normal"
				/>
			</div>
		</div>
	);
};

export default CarrierOptions;
