"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import InputStatic from "@/app/(public)/enterAddress/components/common/InputStatic/page";
import TopNavigation from "@/app/(public)/enterAddress/components/common/TopNavigation/page";
import ActionButton from "@/components/ui/ActionButton";
import ResetButton from "@/app/(public)/enterAddress/components/common/ResetButton/page";

const ShipReceiverAddressDetail: React.FC = () => {
	const router = useRouter();

	const [receiverName, setReceiverName] = useState<string>("");
	const [selectedAddress, setSelectedAddress] =
		useState<string>("");
	const [detailedAddress, setDetailedAddress] =
		useState<string>("");
	const [shippingName, setShippingName] = useState<string>("");
	const [entryMethod, setEntryMethod] = useState<string>("");

	useEffect(() => {
		if (typeof window !== "undefined") {
			setShippingName(
				localStorage.getItem("shippingName") || ""
			);
			setSelectedAddress(
				localStorage.getItem("selectedAddress") || ""
			);
			setReceiverName(
				localStorage.getItem("receiverName") || ""
			);
			setDetailedAddress(
				localStorage.getItem("detailedAddress") || ""
			);
			setEntryMethod(localStorage.getItem("entryMethod") || "");
		}
	}, []);

	const handleReset = () => {
		if (typeof window !== "undefined") {
			localStorage.removeItem("detailedAddress");
		}
		router.push("/enterAddress/inputAddress/addDetailedAddress");
	};

	return (
		<div>
			{/**/}
			<div className="w-full max-w-[430px] bg-static-white px-[24px] text-body-1-normal font-medium mb-[16px]">
				<div className="text-label-1-normal font-semibold mb-[8px]">
					배송지 이름
				</div>
				<InputStatic value={shippingName} />
			</div>
			{/**/}
			<div className="w-full max-w-[430px] bg-static-white px-[24px] text-body-1-normal font-medium mb-[16px]">
				<div className="text-label-1-normal font-semibold mb-[8px]">
					받는 분
				</div>
				<InputStatic value={receiverName} />
			</div>
			{/**/}
			<div className="ml-[24px] mt-[16px] mb-[8px] text-label-1-normal font-semibold">
				배송 받으실 주소
			</div>
			<div className="w-full max-w-[430px] bg-static-white px-[24px] text-body-1-normal font-medium mb-[16px]">
				<div className="text-label-1-normal font-semibold mb-[8px]">
					<InputStatic value={selectedAddress} />
				</div>
				{detailedAddress && (
					<div className="w-full max-w-[430px] bg-static-white text-body-1-normal font-medium">
						<InputStatic value={detailedAddress} />
					</div>
				)}
			</div>
			{/**/}
		</div>
	);
};

export default ShipReceiverAddressDetail;
