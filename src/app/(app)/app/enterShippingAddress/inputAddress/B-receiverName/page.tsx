// src/app/(app)/app/enterShippingAddress/inputAddress/B-receiverName/page.tsx
"use client";
import React, { FC, useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation
import TopNavigation from "@/app/(app)/app/enterShippingAddress/components/TopNavigation/page";
import EnterPlaceholder from "@/app/(app)/app/enterShippingAddress/components/EnterPlaceholder/page";
import ActionButtonGray from "@/app/(app)/app/enterShippingAddress/components/ActionButtonGray/page";
import ActionButton from "@/app/(app)/app/enterShippingAddress/components/ActionButton/page";
import InputStatic from "@/app/(app)/app/enterShippingAddress/components/InputStatic/page"; // Import your InputStatic component
import ResetButton from "@/app/(app)/app/enterShippingAddress/components/ResetButton/page"; // Import your ResetButton component

const ReceiverName: FC = () => {
	const router = useRouter(); // Initialize the router
	const [isButtonGray, setIsButtonGray] = useState(true); // State to manage button color
	const [inputValue, setInputValue] = useState(""); // State to manage input value
	const [shippingName, setShippingName] = useState(""); // State to manage shipping name

	const handleBackNavigation = () => {
		router.push(
			"/app/enterShippingAddress/inputAddress/A-shippingName"
		); // Navigate to the previous page
	};

	const handleForwardNavigation = () => {
		const inputElement = document.getElementById(
			"enterReceiverNameInput"
		) as HTMLInputElement;
		if (inputElement) {
			const input = inputElement.value;
			localStorage.setItem("receiverName", input); // Save input to localStorage as a string
			setInputValue(input); // Update state with the input value
			setIsButtonGray(false); // Change button to ActionButton
			inputElement.blur(); // Remove focus from the input field
		}
	};

	const handleNextPageNavigation = () => {
		router.push(
			"/app/enterShippingAddress/inputAddress/C-searchToggle"
		); // Navigate to the C-searchToggle page
	};

	const handleReset = () => {
		localStorage.removeItem("receiverName"); // Clear localStorage
		setInputValue(""); // Reset state value
		setIsButtonGray(true); // Change button back to ActionButtonGray
	};

	useEffect(() => {
		const savedInput = localStorage.getItem("receiverName");
		const savedShippingName = localStorage.getItem("shippingName");
		if (savedInput) {
			setInputValue(savedInput); // Load saved input from localStorage into state
			setIsButtonGray(false); // If there's a saved input, show the static input
		}
		if (savedShippingName) {
			setShippingName(savedShippingName); // Load saved shipping name from localStorage into state
		}
	}, []);

	return (
		<div className="flex justify-center items-center bg-gray-50">
			<div className="w-[390px] bg-white flex flex-col justify-center items-center">
				<TopNavigation
					text={`배송지 추가`}
					onClick={handleBackNavigation}
				/>
				<div className="self-start ml-[24px] mb-[8px] text-label-1-normal">
					받는 분
				</div>
				{isButtonGray ? (
					<EnterPlaceholder
						id="enterReceiverNameInput"
						placeholder={`받는 분 성함을 입력해 주세요`}
						disabled={!isButtonGray}
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
						label={`다음`}
						onClick={handleForwardNavigation}
					/>
				) : (
					<ActionButton
						label={`다음`}
						onClick={handleNextPageNavigation}
					/>
				)}
				<div className="h-[16px]"></div>
				<ResetButton label={`초기화`} onClick={handleReset} />
			</div>
		</div>
	);
};

export default ReceiverName;
