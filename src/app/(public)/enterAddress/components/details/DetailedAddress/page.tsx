"use client";
import React, { FC, useState, useEffect, useRef } from "react";
import TopNavigation from "@/app/(public)/enterAddress/components/common/TopNavigation/page";
import { useRouter } from "next/navigation";
import InputStatic from "@/app/(public)/enterAddress/components/common/InputStatic/page";
import ActionButtonGray from "@/app/(public)/enterAddress/components/common/ActionButtonGray/page";
import ActionButton from "@/app/(public)/enterAddress/components/common/ActionButton/page";
import ResetButton from "@/app/(public)/enterAddress/components/common/ResetButton/page";
import ProgressBar from "@/app/(public)/enterAddress/components/common/ProgressBar/page";
import "@/app/global.css";
import EnterPlaceholder from "@/app/(public)/enterAddress/components/common/EnterPlaceholder/page";

const DetailedAddress: FC = () => {
	const router = useRouter();
	const [savedSelectedAddress, setSavedSelectedAddress] =
		useState<string>("");
	const [detailedAddress, setDetailedAddress] =
		useState<string>("");
	const [receiverName, setReceiverName] = useState<string>("");
	const [shippingName, setShippingName] = useState<string>("");
	const [isButtonGray, setIsButtonGray] = useState(true);
	const [isSaved, setIsSaved] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (typeof window !== "undefined") {
			setSavedSelectedAddress(
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

			if (localStorage.getItem("detailedAddress")) {
				setIsButtonGray(false);
				setIsSaved(true);
			}
		}
	}, []);

	const handleBackNavigation = () => {
		if (typeof window !== "undefined") {
			localStorage.removeItem("detailedAddress");
		}
		router.push("/enterAddress/inputAddress/searchAddress");
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
				setIsButtonGray(false);
				setIsSaved(true);
			}
		}
	};

	const handleNextNavigation = () => {
		if (typeof window !== "undefined") {
			if (detailedAddress) {
				localStorage.setItem("detailedAddress", detailedAddress);
			}
		}
		router.push("/enterAddress/inputAddress/houseEntry");
	};

	const handleReset = () => {
		if (typeof window !== "undefined") {
			localStorage.removeItem("selectedAddress");
			localStorage.removeItem("detailedAddress");
		}
		setDetailedAddress("");
		setIsButtonGray(true);
		setIsSaved(false);
		router.push("/enterAddress/inputAddress/searchAddress");
	};

	return (
		<div className="flex flex-col justify-center items-center bg-gray-50 min-h-screen">
			<div className="w-full max-w-[430px] bg-static-white flex flex-col pb-[16px]">
				<ProgressBar progress={50} />
				<TopNavigation
					text="배송지 추가"
					onClick={handleBackNavigation}
				>
					<ResetButton label="초기화" onClick={handleReset} />
				</TopNavigation>
				<div className="self-start ml-[24px] mt-[16px] mb-[8px] text-label-1-normal font-semibold">
					배송 받으실 주소
				</div>
			</div>
			<div className="w-full max-w-[430px] bg-white text-body-1-normal font-medium">
				<div className="mx-[24px]">
					<InputStatic value={savedSelectedAddress} />
				</div>
				<div className="mx-[24px] mb-[16px]">
					{isSaved ? (
						<div className="mt-[8px]">
							<InputStatic value={detailedAddress} />
						</div>
					) : (
						<div className="mt-[8px] mb-[16px]">
							<EnterPlaceholder
								id="detailedAddressInput"
								placeholder="상세 주소 입력"
								className="input-common bg-static-white text-label-normal w-full outline-none px-[16px] py-[12px] border-line-normal"
								value={detailedAddress}
								onChange={handleDetailedAddressChange}
								ref={inputRef}
							/>
						</div>
					)}
				</div>
			</div>
			{/**/}
			<div className="w-full max-w-[430px] bg-static-white px-[24px] text-body-1-normal font-medium pb-[16px] ">
				<div className="text-label-1-normal font-semibold mb-[8px]">
					배송지 이름
				</div>
				<InputStatic value={shippingName} />
			</div>
			{/**/}
			<div className="w-full max-w-[430px] bg-static-white px-[24px] text-body-1-normal font-medium pb-[16px]">
				<div className="text-label-1-normal font-semibold mb-[8px]">
					받는 분
				</div>
				<InputStatic value={receiverName} />
			</div>
			{/**/}

			<div className="flex-grow w-full max-w-[430px] bg-static-white"></div>
			<div
				className="fixed bottom-0 left-0 right-0 mx-auto w-full max-w-[430px] bg-white transition-transform duration-300"
				style={{
					height: "100px",
				}}
			>
				{isButtonGray ? (
					<div className="w-full max-w-[430px] h-[1px] bg-line-normal border shadow-elevation-shadow-emphasize">
						<ActionButtonGray
							label="다음"
							onClick={handleSave}
							className="w-full text-primary-normal"
						/>
					</div>
				) : (
					<div className="w-full max-w-[430px] h-[1px] bg-line-normal border shadow-elevation-shadow-emphasize">
						<ActionButton
							label="다음"
							onClick={handleNextNavigation}
							className="w-full text-primary-normal"
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default DetailedAddress;
