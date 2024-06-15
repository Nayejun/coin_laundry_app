"use client";
import React, { FC, useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation
import TopNavigation from "@/app/(public)/enterAddress/components/TopNavigation/page";
import EnterPlaceholder from "@/app/(public)/enterAddress/components/EnterPlaceholder/page";
import ActionButtonGray from "@/app/(public)/enterAddress/components/ActionButtonGray/page";
import ActionButton from "@/app/(public)/enterAddress/components/ActionButton/page";
import InputStatic from "@/app/(public)/enterAddress/components/InputStatic/page"; // Import your InputStatic component
import ResetButton from "@/app/(public)/enterAddress/components/ResetButton/page"; // Import your ResetButton component

interface PageProps {
	text: string;
}

const ShippingName: FC<PageProps> = ({ text }) => {
	const router = useRouter(); // Initialize the router
	const [isButtonGray, setIsButtonGray] = useState(true); // State to manage button color
	const [inputValue, setInputValue] = useState(""); // State to manage input value
	const inputRef = useRef<HTMLInputElement>(null); // Ref for input element

	useEffect(() => {
		const savedInput = localStorage.getItem("shippingName");
		if (savedInput) {
			setInputValue(savedInput);
			setIsButtonGray(false);
		}
	}, []);

	const handleBackNavigation = () => {
		router.push("/"); // Navigate to the root page
	};

	const handleForwardNavigation = () => {
		if (inputRef.current) {
			const input = inputRef.current.value;
			localStorage.setItem("shippingName", input); // Save input to localStorage as a string
			setInputValue(input); // Update state with the input value
			setIsButtonGray(false); // Change button to ActionButton
			inputRef.current.blur(); // Remove focus from the input field
			router.push("/enterAddress/inputAddress/B-ReceiverName"); // Navigate to B-ReceiverName page
		}
	};

	const handleReset = () => {
		localStorage.removeItem("shippingName"); // Clear localStorage
		setInputValue(""); // Reset state value
		setIsButtonGray(true); // Change button back to ActionButtonGray
	};

	return (
		<div className="flex justify-center items-center bg-gray-50">
			<div className="w-[390px] bg-white flex flex-col justify-center items-center">
				<TopNavigation
					text="배송지 추가"
					onClick={handleBackNavigation}
				/>
				<div className="self-start ml-[24px] mb-[8px] text-label-1-normal">
					배송지 이름
				</div>
				{isButtonGray ? (
					<EnterPlaceholder
						id="enterShippingNameInput"
						placeholder="배송지 이름을 입력해주세요"
						disabled={!isButtonGray}
						ref={inputRef} // Assign ref to the input element
					/>
				) : (
					<InputStatic value={inputValue} />
				)}
				<div className="h-[16px]"></div>
				{isButtonGray ? (
					<ActionButtonGray
						label="다음"
						onClick={handleForwardNavigation}
					/>
				) : (
					<ActionButton
						label="다음"
						onClick={handleForwardNavigation}
					/>
				)}
				<div className="h-[16px]"></div>
				<ResetButton label="초기화" onClick={handleReset} />
			</div>
		</div>
	);
};

export default ShippingName;
