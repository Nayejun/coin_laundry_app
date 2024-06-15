"use client";
import React, { FC, useState, useEffect } from "react";
import TopNavigation from "@/app/(public)/enterAddress/components/TopNavigation/page";
import { useRouter } from "next/navigation";
import InputStatic from "@/components/others/InputStatic";
import ActionButton from "@/components/ui/ActionButton";
import ResetButton from "../ResetButton/page";
import "@/app/global.css";

interface SearchStaticPageProps {
	handleBackNavigation?: () => void;
	handleActivate?: () => void;
}

const SearchStaticPage: FC<SearchStaticPageProps> = ({
	handleActivate,
}) => {
	const router = useRouter(); // Initialize the router

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

	const handleBackNavigation = () => {
		if (typeof window !== "undefined") {
			localStorage.removeItem("detailedAddress");
		}
		router.push("/enterAddress/inputAddress/C-SearchToggle"); // Navigate to the previous page
	};

	const handleDetailedAddressChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setDetailedAddress(e.target.value);
	};

	const handleSave = () => {
		if (typeof window !== "undefined") {
			if (detailedAddress) {
				localStorage.setItem("detailedAddress", detailedAddress);
			}
		}
		router.push("/enterAddress/inputAddress/E-AddAddressEntryMethod");
	};

	const handleReset = () => {
		if (typeof window !== "undefined") {
			localStorage.removeItem("selectedAddress");
			localStorage.removeItem("detailedAddress");
		}
		setDetailedAddress(""); // Reset the state
		router.push("/enterAddress/inputAddress/C-SearchToggle");
	};

	return (
		<div className="min-h-screen flex flex-col bg-gray-50 items-center">
			<div className="w-full max-w-[390px] bg-white flex flex-col justify-center items-center">
				<TopNavigation
					text={`배송지 추가`}
					onClick={handleBackNavigation}
				/>
				<div className="self-start ml-[36px] mt-[16px] mb-[8px] text-label-1-normal font-semibold">
					배송 받으실 주소
				</div>
			</div>
			<div className="w-full ml-[23px] mr-[25px] max-w-[390px] bg-white text-body-2-normal font-medium">
				<div className="ml-[23px] mr-[25px]">
					<InputStatic value={savedSelectedAddress} />
				</div>
				<div className="flex items-center border rounded-[10px] ml-[23px] mr-[25px] max-w-[342px] h-[48px] mt-[8px] px-[16px] py-[12px] bg-[#FFF] border-line-normal">
					<input
						type="text"
						placeholder="상세 주소 입력"
						className="input-common bg-[#FFF] text-black w-full outline-none"
						value={detailedAddress}
						onChange={handleDetailedAddressChange}
					/>
				</div>
			</div>
			<div className="w-full max-w-[390px] bg-white pl-[23px] pr-[25px] text-body-2-normal font-medium">
				<div className="text-label-1-normal font-semibold ml-[8px] mt-[16px] mb-[8px]">
					받는 분
				</div>
				<InputStatic value={receiverName} />
			</div>
			<div className="w-full max-w-[390px] bg-white pl-[23px] pr-[25px] text-body-2-normal font-medium">
				<div className="text-label-1-normal font-semibold ml-[8px] mt-[16px] mb-[8px]">
					배송지 이름
				</div>
				<InputStatic value={shippingName} />
			</div>
			<div className="flex-1 w-full max-w-[390px] bg-white" />
			<div className="w-full max-w-[390px] flex flex-col items-center bg-gray-50">
				<div className="bg-white w-full flex flex-col items-center">
					<div className="mt-[20px] mb-[8px] bg-white w-full flex flex-col items-center rounded-md p-[16px]">
						<ActionButton label={"다음"} onClick={handleSave} />
					</div>
					<div className="mb-[28px]">
						<ResetButton label={"초기화"} onClick={handleReset} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchStaticPage;
