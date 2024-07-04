"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import InputStatic from "@/app/(public)/enterAddress/components/common/InputStatic/page";
import TopNavigation from "@/app/(public)/enterAddress/components/common/TopNavigation/page";
import ActionButton from "@/components/ui/ActionButton";
import ResetButton from "@/app/(public)/enterAddress/components/common/ResetButton/page";

const ShipReceiverAddressDetailEntry: React.FC = () => {
	const router = useRouter();

	const [selectedAddress, setSelectedAddress] =
		useState<string>("");
	const [detailedAddress, setDetailedAddress] =
		useState<string>("");
	const [receiverName, setReceiverName] = useState<string>("");
	const [shippingName, setShippingName] = useState<string>("");
	const [entryMethod, setEntryMethod] = useState<string>("");
	const [entryInput, setEntryInput] = useState<string>("");

	useEffect(() => {
		if (typeof window !== "undefined") {
			setSelectedAddress(
				localStorage.getItem("selectedAddress") || ""
			);
			setDetailedAddress(
				localStorage.getItem("detailedAddress") || ""
			);
			setReceiverName(
				localStorage.getItem("receiverName") || ""
			);
			setShippingName(
				localStorage.getItem("shippingName") || ""
			);
			setEntryMethod(localStorage.getItem("entryMethod") || "");
			setEntryInput(localStorage.getItem("entryInput") || "");
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
			<div className="w-full max-w-[430px] bg-static-white px-[24px] text-body-1-normal font-medium mb-[16px]">
				<div className="text-label-1-normal font-semibold mb-[8px]">
					공동현관 출입 방법
				</div>
				{entryMethod === "공동현관 비밀번호" ||
				entryMethod === "기타" ? (
					<InputStatic value={entryInput} />
				) : (
					<InputStatic value={entryMethod} />
				)}
			</div>
			{/**/}
		</div>
	);
};

export default ShipReceiverAddressDetailEntry;
