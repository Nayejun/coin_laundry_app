"use client";
import React, { FC, useState } from "react";
import { useRouter } from "next/navigation";
import SavedFieldsPage from "@/app/(app)/app/enterShippingAddress/components/SavedFieldsPage/page";
import DeliveryMethodContainer from "@/app/(app)/app/enterShippingAddress/components/DeliveryMethodContainer/page";
import TopNavigation from "@/components/others/TopNavigation";
import ActionButton from "@/components/ui/ActionButton";
import ResetButton from "@/app/(app)/app/enterShippingAddress/components/ResetButton/page";
const Page: FC = ({}) => {
	const router = useRouter();

	const handleBackNavigation = () => {
		localStorage.removeItem("detailedAddress");
		router.push(
			"/app/enterShippingAddress/inputAddress/C-searchToggle"
		);
	};

  const handleNextPageNavigation = () => {
		router.push(
			"/app/enterShippingAddress/inputAddress/FinalAddressCheck"
		); // Navigate to the C-searchToggle page
	};


  const handleReset = () => {
		localStorage.removeItem("detailedAddress");
		router.push("/app/enterShippingAddress/inputAddress/D-addAddress");
	};

	return (
		<div className="min-h-screen flex flex-col bg-gray-50 items-center">
			<div className="w-full max-w-[390px] bg-white flex flex-col justify-center items-center">
				<TopNavigation
					text={`배송지 추가`}
					onClick={handleBackNavigation}
				/>
				<DeliveryMethodContainer />
				<SavedFieldsPage />

				<div className="mt-[24px] mb-[8px] bg-white w-full flex flex-col items-center rounded-md p-[24px]">
					<ActionButton label={"다음"} onClick={handleNextPageNavigation} />
				</div>
				<div className="mb-[24px]">
					<ResetButton label={"초기화"} onClick={handleReset} />
				</div>
			</div>
		</div>
	);
};

export default Page;
