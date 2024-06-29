"use client";
import React, { FC, useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import TopNavigation from "@/app/(public)/enterAddress/components/common/TopNavigation/page";
import EnterPlaceholder from "@/app/(public)/enterAddress/components/common/EnterPlaceholder/page";
import ActionButtonGray from "@/app/(public)/enterAddress/components/common/ActionButtonGray/page";
import ActionButton from "@/app/(public)/enterAddress/components/common/ActionButton/page";
import InputStatic from "@/app/(public)/enterAddress/components/common/InputStatic/page";
import ResetButton from "@/app/(public)/enterAddress/components/common/ResetButton/page";
import ProgressBar from "@/app/(public)/enterAddress/components/common/ProgressBar/page";

const ShippingName: FC = () => {
	const router = useRouter();
	const [isButtonGray, setIsButtonGray] = useState(true);
	const [inputValue, setInputValue] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		const savedInput = localStorage.getItem("shippingName");
		if (savedInput) {
			setInputValue(savedInput);
			setIsButtonGray(false);
		}
	}, []);

	const handleBackNavigation = () => {
		router.push("/");
	};

	const handleSave = () => {
		if (inputRef.current) {
			const input = inputRef.current.value;
			localStorage.setItem("shippingName", input);
			setInputValue(input);
			setIsButtonGray(false);
			inputRef.current.blur();
		}
	};

	const handleShippingNameChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setInputValue(e.target.value);
	};

	const handleReset = () => {
		localStorage.removeItem("shippingName");
		setInputValue("");
		setIsButtonGray(true);
	};

	const handleNextNavigation = () => {
		router.push("/enterAddress/inputAddress/receiverName");
	};

	return (
		<div className="flex flex-col justify-center items-center bg-gray-50 min-h-screen">
			<div className="w-full max-w-[430px] bg-static-white flex flex-col">
				<ProgressBar progress={12.5} />
				<TopNavigation
					text="배송지 추가"
					onClick={handleBackNavigation}
				>
					<ResetButton label="초기화" onClick={handleReset} />
				</TopNavigation>
				<div className="ml-[24px] my-[30px] text-headline-1 font-semibold">
					세탁물을 받으실 주소를 입력해 주세요!
				</div>
				<div className="w-full max-w-[430px] px-[24px]">
					<div className="mb-[8px] text-label-1-normal font-semibold text-label-normal text-left">
						배송지 이름
					</div>
					{isButtonGray ? (
						<EnterPlaceholder
							id="enterShippingNameInput"
							placeholder="배송지 이름을 입력해 주세요"
							value={inputValue}
							onChange={handleShippingNameChange}
							ref={inputRef}
						/>
					) : (
						<InputStatic value={inputValue} />
					)}
				</div>
			</div>
			<div className="flex-grow w-full max-w-[430px] bg-static-white"></div>
			<div className="fixed bottom-[100px] w-full max-w-[430px] h-[1px] bg-line-normal border shadow-elevation-shadow-emphasize">
				{isButtonGray ? (
					<ActionButtonGray
						label="다음"
						onClick={handleSave}
						className="w-full text-primary-normal"
					/>
				) : (
					<ActionButton
						label="다음"
						onClick={handleNextNavigation}
						className="w-full text-primary-normal"
					/>
				)}
			</div>
		</div>
	);
};

export default ShippingName;
