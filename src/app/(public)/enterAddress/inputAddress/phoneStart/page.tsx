"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import TopNavigation from "@/app/(public)/enterAddress/components/common/TopNavigation/page";
import ActionButtonHalfLeft from "@/app/(public)/enterAddress/components/common/ActionButtonHalfLeft/page";
import ActionButtonHalfRight from "@/app/(public)/enterAddress/components/common/ActionButtonHalfRight/page";
import ResetButton from "@/app/(public)/enterAddress/components/common/ResetButton/page";
import ProgressBar from "@/app/(public)/enterAddress/components/common/ProgressBar/page";
import CustomPhoneInput from "@/app/(public)/enterAddress/components/cellular/CustomPhoneInput/page"; // Adjust the path as needed
import ShipReceiverAddressDetailEntryCarrier from "@/app/(public)/enterAddress/components/common/ShipReceiverAddressDetailEntryCarrier/page"; // Adjust the path as needed
const CellularInput: React.FC = () => {
	const router = useRouter();
	const [phoneNumber, setPhoneNumber] = useState<string>("");

	const handleBackNavigation = () => {
		router.push("/");
	};

	const handleReset = () => {
		// Handle reset logic if needed
		setPhoneNumber("");
	};

	const handleNextNavigation = () => {
		if (phoneNumber.length === 13) {
			localStorage.setItem("phoneNumber", phoneNumber);
			// Ensure the phone number is fully entered
			router.push("/enterAddress/inputAddress/shippingName"); // Adjust the route as needed
		} else {
			alert("Please enter a valid phone number.");
		}
	};

  const goToListOfAddresses = () => {
    if (phoneNumber.length === 13) {
			localStorage.setItem("phoneNumber", phoneNumber);
      convertPhoneNumberToJson();
			// Ensure the phone number is fully entered
			router.push("/crudAddress/addressList"); // Adjust the route as needed
		} else {
			alert("Please enter a valid phone number.");
		}
	};

  const convertPhoneNumberToJson = () => {
    const keys = [
      'phoneNumber'
    ];
  
    keys.forEach(key => {
      const value = localStorage.getItem(key);
      if (value) {
        try {
          JSON.parse(value); // Check if it's already JSON
        } catch (error) {
          // If it's not JSON, convert it to JSON and save it back
          localStorage.setItem(key, JSON.stringify(value));
        }
      }
    });
  };

	return (
		<div className="flex flex-col items-center bg-gray-50 min-h-screen overflow-hidden">
			<div className="w-full max-w-[430px] bg-white flex flex-col overflow-auto">
				<ProgressBar progress={0} />
				<TopNavigation
					text="배송지 추가"
					onClick={handleBackNavigation}
				>
					<ResetButton label="초기화" onClick={handleReset} />
				</TopNavigation>
        <div className="ml-[24px] mt-[30px] text-headline-1 font-semibold">
					벌써 배송지를 추가 하셨어요? 
				</div>
        <div className="text-base mb-3 ml-6">
          전화번호로 조회 해드릴게요!
        </div>
				<div className="w-full max-w-[430px] bg-static-white px-[24px] text-body-1-normal font-medium mb-[30px]">
				</div>
				<div className="mx-[24px] mb-[16px]">
					<CustomPhoneInput
						value={phoneNumber}
						onChange={setPhoneNumber}
					/>
				</div>
			</div>
			<div className="flex-grow w-full max-w-[430px] bg-static-white"></div>
			<div className="flex fixed top-[270px] w-full max-w-[430px] h-[100px] ">
				<ActionButtonHalfLeft
					label="아니요"
					onClick={handleNextNavigation}
					className="w-1/2 border-[2px] border-label-disable bg-static-white text-label-neutral"
				/>
        <ActionButtonHalfRight
					label="예"
					onClick={goToListOfAddresses}
					className="-w-1/2 bg-primary-normal text-static-white"
				/>
			</div>
			<div className="flex-grow w-full max-w-[430px] bg-static-white"></div>
		</div>
	);
};

export default CellularInput;
