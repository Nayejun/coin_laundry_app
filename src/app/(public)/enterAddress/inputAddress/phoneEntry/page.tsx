"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import TopNavigation from "@/app/(public)/enterAddress/components/common/TopNavigation/page";
import ActionButton from "@/app/(public)/enterAddress/components/common/ActionButton/page";
import ResetButton from "@/app/(public)/enterAddress/components/common/ResetButton/page";
import ProgressBar from "@/app/(public)/enterAddress/components/common/ProgressBar/page";
import CustomPhoneInput from "@/app/(public)/enterAddress/components/cellular/CustomPhoneInput/page"; // Adjust the path as needed
import ShipReceiverAddressDetailEntryCarrier from "@/app/(public)/enterAddress/components/common/ShipReceiverAddressDetailEntryCarrier/page"; // Adjust the path as needed
const CellularInput: React.FC = () => {
	const router = useRouter();
	const [phoneNumber, setPhoneNumber] = useState<string>("");

	const handleBackNavigation = () => {
		router.push("/enterAddress/inputAddress/carrierOptions");
	};

	const handleReset = () => {
		// Handle reset logic if needed
		setPhoneNumber("");
	};

	const handleNextNavigation = () => {
		if (phoneNumber.length === 13) {
			localStorage.setItem("phoneNumber", phoneNumber);
			// Ensure the phone number is fully entered
			router.push("/enterAddress/inputAddress/finalCheck"); // Adjust the route as needed
		} else {
			alert("Please enter a valid phone number.");
		}
	};

	return (
		<div className="flex flex-col items-center bg-gray-50 min-h-screen overflow-hidden">
			<div className="w-full max-w-[430px] bg-white flex flex-col overflow-auto">
				<ProgressBar progress={87.5} />
				<TopNavigation
					text="배송지 추가"
					onClick={handleBackNavigation}
				>
					<ResetButton label="초기화" onClick={handleReset} />
				</TopNavigation>
				<div className="w-full max-w-[430px] bg-static-white px-[24px] text-body-1-normal font-medium mb-[8px]">
					<div className="text-label-1-normal font-semibold mt-[20px]">
						전화번호
					</div>
				</div>
				<div className="mx-[24px] mb-[16px]">
					<CustomPhoneInput
						value={phoneNumber}
						onChange={setPhoneNumber}
					/>
				</div>
				<ShipReceiverAddressDetailEntryCarrier />
			</div>
			<div className="flex-grow w-full max-w-[430px] bg-static-white"></div>
			<div className="fixed bottom-24 w-full max-w-[430px] h-[1px] bg-line-normal border shadow-elevation-shadow-emphasize">
				<ActionButton
					label="다음"
					onClick={handleNextNavigation}
					className="w-full text-primary-normal"
				/>
			</div>
		</div>
	);
};

export default CellularInput;
