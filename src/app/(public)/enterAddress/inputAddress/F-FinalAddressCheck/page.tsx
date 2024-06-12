"use client";
import React, { FC, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import InputStatic from "@/components/others/InputStatic";
import TopNavigation from "@/app/(public)/enterAddress/components/TopNavigation/page";
import ActionButton from "@/components/ui/ActionButton";
import ResetButton from "@/app/(public)/enterAddress/components/ResetButton/page";

const FinalAddressCheck: FC = () => {
	const router = useRouter();

	const [savedSelectedAddress, setSavedSelectedAddress] =
		useState<string>("");
	const [detailedAddress, setDetailedAddress] = useState<string>("");
	const [receiverName, setReceiverName] = useState<string>("");
	const [shippingName, setShippingName] = useState<string>("");
	const [entryMethod, setEntryMethod] = useState<string>("");
	const [entryInput, setEntryInput] = useState<string>("");
	const [carrierOption, setCarrierOption] = useState<string>("");
	const [carrierInput, setCarrierInput] = useState<string>("");

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
			setEntryMethod(localStorage.getItem("entryMethod") || "");
			setEntryInput(localStorage.getItem("entryInput") || "");
			setCarrierOption(localStorage.getItem("carrierOption") || "");
			setCarrierInput(localStorage.getItem("carrierInput") || "");
		}
	}, []);

	const handleReset = () => {
		if (typeof window !== "undefined") {
			localStorage.clear(); // Clear all items in localStorage
		}
		router.push("/enterAddress/inputAddress/A-ShippingName");
	};

	const handleNextPageNavigation = () => {
		router.push("/enterAddress/inputAddress/F-F-FinalAddressCheck"); // Navigate to the F-F-FinalAddressCheck page
	};

	const handleBackNavigation = () => {
		if (typeof window !== "undefined") {
			localStorage.removeItem("detailedAddress");
		}
		router.push("/enterAddress/inputAddress/C-SearchToggle");
	};

	return (
		<div className="min-h-screen flex flex-col bg-gray-50 items-center">
			<div className="w-full max-w-[390px] bg-white flex flex-col justify-center items-center">
				<TopNavigation
					text={`배송지 추가`}
					onClick={handleBackNavigation}
				/>

				<div className="w-full max-w-[390px] bg-white px-[24px] text-body-2-normal font-medium">
					<div className="text-label-1-normal font-semibold ml-[8px] mt-[16px] mb-[8px]">
						배송지 이름
					</div>
					<InputStatic value={shippingName} />
				</div>

				<div className="w-full max-w-[390px] bg-white px-[24px] text-body-2-normal font-medium">
					<div className="text-label-1-normal font-semibold ml-[8px] mt-[16px] mb-[8px]">
						받는 분
					</div>
					<InputStatic value={receiverName} />
				</div>

				<div className="w-full max-w-[390px] bg-white px-[24px] text-body-2-normal font-medium">
					<div className="text-label-1-normal font-semibold ml-[8px] mt-[16px] mb-[8px]">
						배송 받으실 주소
					</div>
					<InputStatic value={savedSelectedAddress} />
				</div>
				{detailedAddress && (
					<div className="w-full max-w-[390px] mt-[8px] bg-white px-[24px] text-body-2-normal font-medium">
						<InputStatic value={detailedAddress} />
					</div>
				)}

				<div className="w-full max-w-[390px] bg-white px-[24px] text-body-2-normal font-medium">
					<div className="text-label-1-normal font-semibold ml-[8px] mt-[16px] mb-[8px]">
						공동현관 출입 방법
					</div>
					{entryMethod === "공동현관 비밀번호" ||
					entryMethod === "기타" ? (
						<div className="w-full max-w-[390px] mt-[8px] bg-white text-body-2-normal font-medium">
							<InputStatic value={entryInput} />
						</div>
					) : (
						<div className="w-full max-w-[390px] mt-[8px] bg-white text-body-2-normal font-medium">
							<InputStatic value={entryMethod} />
						</div>
					)}
				</div>

				<div className="w-full max-w-[390px] bg-white px-[24px] text-body-2-normal font-medium">
					<div className="text-label-1-normal font-semibold ml-[8px] mt-[16px] mb-[8px]">
						캐리어 님께
					</div>
					{carrierOption === "직접 입력" ? (
						<div className="w-full max-w-[390px] mt-[8px] bg-white text-body-2-normal font-medium">
							<InputStatic value={carrierInput} />
						</div>
					) : (
						<div className="w-full max-w-[390px] mt-[8px] bg-white text-body-2-normal font-medium">
							<InputStatic value={carrierOption} />
						</div>
					)}
				</div>

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

export default FinalAddressCheck;
