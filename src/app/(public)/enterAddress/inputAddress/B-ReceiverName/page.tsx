"use client";
import React, { FC, useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation
import TopNavigation from "@/app/(public)/enterAddress/components/TopNavigation/page";
import EnterPlaceholder from "@/app/(public)/enterAddress/components/EnterPlaceholder/page";
import ActionButtonGray from "@/app/(public)/enterAddress/components/ActionButtonGray/page";
import ActionButton from "@/app/(public)/enterAddress/components/ActionButton/page";
import InputStatic from "@/app/(public)/enterAddress/components/InputStatic/page"; // Import your InputStatic component
import ResetButton from "@/app/(public)/enterAddress/components/ResetButton/page"; // Import your ResetButton component

const ReceiverName: FC = () => {
	const router = useRouter();
	const [isButtonGray, setIsButtonGray] = useState(true);
	const [inputValue, setInputValue] = useState("");
	const [shippingName, setShippingName] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		const savedReceiverName = localStorage.getItem("receiverName");
		const savedShippingName = localStorage.getItem("shippingName");
		if (savedReceiverName) {
			setInputValue(savedReceiverName);
			setIsButtonGray(false);
		}
		if (savedShippingName) {
			setShippingName(savedShippingName);
		}
	}, []);

	const handleBackNavigation = () => {
		router.push("/enterAddress/inputAddress/A-ShippingName");
	};

	const handleForwardNavigation = () => {
		if (inputRef.current) {
			const input = inputRef.current.value;
			localStorage.setItem("receiverName", input);
			setInputValue(input);
			setIsButtonGray(false);
			inputRef.current.blur();
		}
	};

	const handleNextPageNavigation = () => {
		router.push("/enterAddress/inputAddress/C-SearchToggle");
	};

	const handleReset = () => {
		localStorage.removeItem("receiverName");
		setInputValue("");
		setIsButtonGray(true);
	};

	return (
		<div className="flex justify-center items-center bg-gray-50">
			<div className="w-[390px] bg-white flex flex-col justify-center items-center">
				<TopNavigation
					text="배송지 추가"
					onClick={handleBackNavigation}
				/>
				<div className="self-start ml-[24px] mb-[8px] text-label-1-normal">
					받는 분
				</div>
				{isButtonGray ? (
					<EnterPlaceholder
						id="enterReceiverNameInput"
						placeholder="받는 분 성함을 입력해 주세요"
						disabled={!isButtonGray}
						ref={inputRef}
					/>
				) : (
					<InputStatic value={inputValue} />
				)}
				<div className="self-start ml-[24px] mt-[16px] mb-[8px] text-label-1-normal">
					배송지 이름
				</div>
				<InputStatic value={shippingName} />
				<div className="h-[16px]"></div>
				{isButtonGray ? (
					<ActionButtonGray
						label="다음"
						onClick={handleForwardNavigation}
					/>
				) : (
					<ActionButton
						label="다음"
						onClick={handleNextPageNavigation}
					/>
				)}
				<div className="h-[16px]"></div>
				<ResetButton label="초기화" onClick={handleReset} />
			</div>
		</div>
	);
};

export default ReceiverName;
