"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import InputStatic from "@/components/others/InputStatic";
import TopNavigation from "@/app/(public)/enterAddress/components/TopNavigation/page";
import ActionButton from "@/components/ui/ActionButton";
import ResetButton from "@/app/(public)/enterAddress/components/ResetButton/page";

const SavedFieldsPage: React.FC = () => {
	const router = useRouter();

	const [savedSelectedAddress, setSavedSelectedAddress] =
		useState<string>("");
	const [detailedAddress, setDetailedAddress] = useState<string>("");
	const [receiverName, setReceiverName] = useState<string>("");
	const [shippingName, setShippingName] = useState<string>("");

	useEffect(() => {
		if (typeof window !== "undefined") {
			setSavedSelectedAddress(
				localStorage.getItem("selectedAddress") || ""
			);
			setDetailedAddress(
				localStorage.getItem("detailedAddress") || ""
			);
			setReceiverName(localStorage.getItem("receiverName") || "");
			setShippingName(localStorage.getItem("shippingName") || "");
		}
	}, []);

	const handleReset = () => {
		if (typeof window !== "undefined") {
			localStorage.removeItem("detailedAddress");
		}
		router.push("/enterAddress/inputAddress/D-AddAddress");
	};

	return (
		<div>
			<div className="self-start ml-[32px] mt-[16px] mb-[8px] text-label-1-normal font-semibold">
				배송 받으실 주소
			</div>

			<div className="w-full max-w-[390px] bg-white text-body-2-normal font-medium">
				<div className="px-[24px]">
					<InputStatic value={savedSelectedAddress} />
				</div>
				{detailedAddress && (
					<div className="w-full max-w-[390px] mt-[8px] bg-white px-[24px] text-body-2-normal font-medium">
						<InputStatic value={detailedAddress} />
					</div>
				)}
			</div>
			<div className="w-full max-w-[390px] bg-white px-[24px] text-body-2-normal font-medium">
				<div className="text-label-1-normal font-semibold ml-[8px] mt-[16px] mb-[8px]">
					받는 분
				</div>
				<InputStatic value={receiverName} />
			</div>
			<div className="w-full max-w-[390px] bg-white px-[24px] text-body-2-normal font-medium">
				<div className="text-label-1-normal font-semibold ml-[8px] mt-[16px] mb-[8px]">
					배송지 이름
				</div>
				<InputStatic value={shippingName} />
			</div>
		</div>
	);
};

export default SavedFieldsPage;
