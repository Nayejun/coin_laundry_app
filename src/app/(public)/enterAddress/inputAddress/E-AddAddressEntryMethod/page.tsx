"use client";
import React, { FC, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SavedFieldsPage from "@/app/(public)/enterAddress/components/SavedFieldsPage/page";
import DeliveryMethodContainer from "@/app/(public)/enterAddress/components/DeliveryMethodContainer/page";
import TopNavigation from "@/components/others/TopNavigation";
import ActionButton from "@/components/ui/ActionButton";
import ResetButton from "@/app/(public)/enterAddress/components/ResetButton/page";

const AddAddressEntryMethod: FC = ({}) => {
	const router = useRouter();
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		if (typeof window !== "undefined") {
			setIsClient(true);
		}
	}, []);

	const handleBackNavigation = () => {
		if (isClient) {
			localStorage.removeItem("detailedAddress");
		}
		router.push("/enterAddress/inputAddress/C-SearchToggle");
	};

	const handleNextPageNavigation = () => {
		router.push("/enterAddress/inputAddress/F-FinalAddressCheck"); // Navigate to the F-FinalAddressCheck page
	};

	const handleReset = () => {
		if (isClient) {
			localStorage.removeItem("detailedAddress");
		}
		router.push("/enterAddress/inputAddress/D-AddAddress");
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
					<ActionButton
						label={"다음"}
						onClick={handleNextPageNavigation}
					/>
				</div>
				<div className="mb-[24px]">
					<ResetButton label={"초기화"} onClick={handleReset} />
				</div>
			</div>
		</div>
	);
};

export default AddAddressEntryMethod;
