"use client"; // Tells the code to run on the client-side (in the browser).
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import TopNavigation from "@/app/(public)/enterAddress/components/common/TopNavigation/page";
import ActionButton from "@/app/(public)/enterAddress/components/common/ActionButton/page";
import ResetButton from "@/app/(public)/enterAddress/components/common/ResetButton/page";
import ProgressBar from "@/app/(public)/enterAddress/components/common/ProgressBar/page";
import EnterPlaceHolderSmaller from "@/app/(public)/enterAddress/components/common/EnterPlaceHolderSmaller/page";
import InfoIcon from "@/assets/icons/others/information.svg";
import CustomRadioButton from "@/app/(public)/enterAddress/components/entry/CustomRadioButton/page";
import ShipReceiveAddressDetail from "@/app/(public)/enterAddress/components/common/ShipReceiverAddressDetail/page";

const HouseEntry: React.FC = () => {
	const router = useRouter();
	const [entryMethod, setEntryMethod] =
		useState<string>("공동현관 비밀번호");
	const [entryInput, setEntryInput] = useState<string>("");
	const otherInputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		const storedEntryMethod =
			localStorage.getItem("entryMethod") || "공동현관 비밀번호";
		const storedEntryInput =
			localStorage.getItem("entryInput") || "";
		setEntryMethod(storedEntryMethod);
		setEntryInput(storedEntryInput);
	}, []);

	useEffect(() => {
		localStorage.setItem("entryMethod", entryMethod);
		if (
			entryMethod !== "공동현관 비밀번호" &&
			entryMethod !== "기타"
		) {
			localStorage.setItem("entryInput", "");
			setEntryInput("");
		}
	}, [entryMethod]);

	useEffect(() => {
		localStorage.setItem("entryInput", entryInput);
	}, [entryInput]);

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setEntryInput(e.target.value);
	};

	const handleNextNavigation = () => {
		if (entryMethod) {
			localStorage.setItem("entryInput", entryInput);
			localStorage.setItem("entryMethod", entryMethod);
			router.push("/enterAddress/inputAddress/carrierOptions");
		}
	};

	const handleBackNavigation = () => {
		router.push("/enterAddress/inputAddress/searchAddress");
	};

	const handleReset = () => {
		setEntryMethod("공동현관 비밀번호");
		setEntryInput("");
		localStorage.removeItem("entryMethod");
		localStorage.removeItem("entryInput");
	};

	return (
		<div className="flex flex-col items-center bg-gray-50 min-h-screen overflow-hidden">
			<div className="w-full max-w-[430px] bg-white flex flex-col pb-24 overflow-auto">
				<ProgressBar progress={62.5} />
				<TopNavigation
					text="배송지 추가"
					onClick={handleBackNavigation}
				>
					<ResetButton label="초기화" onClick={handleReset} />
				</TopNavigation>
				<div className="px-6 pt-4">
					<div className="text-lg font-semibold mb-2">
						공동현관 출입 방법
					</div>
					<div className="text-sm text-gray-500 mb-5">
						입력된 공동현관 비밀번호는 새벽 배송을 위해 필요한
						정보로, 서비스 이용 후 파기됨을 약속드립니다.
					</div>
				</div>
				<div className="text-base mb-3 ml-6">
					<CustomRadioButton
						id="password"
						name="entry-method"
						value="password"
						label="공동현관 비밀번호"
						checked={entryMethod === "공동현관 비밀번호"}
						onChange={() => setEntryMethod("공동현관 비밀번호")}
					/>
					{entryMethod === "공동현관 비밀번호" && (
						<div className="mt-2 ml-7 mr-6">
							<EnterPlaceHolderSmaller
								id="password-input"
								placeholder="예) 종 1234 열쇠"
								value={entryInput}
								onChange={handleInputChange}
								ref={otherInputRef}
							/>
							<div className="flex items-center text-xs mt-2 text-gray-500">
								<InfoIcon className="ml-2 mr-1" />
								입력한 방법으로 출입이 불가능한 경우, 수거/배송이
								어렵습니다.
							</div>
						</div>
					)}
				</div>
				<div className="mb-3 ml-6">
					<CustomRadioButton
						id="free-access"
						name="entry-method"
						value="free-access"
						label="자유출입 가능 (공동현관 없음)"
						checked={
							entryMethod === "자유출입 가능 (공동현관 없음)"
						}
						onChange={() =>
							setEntryMethod("자유출입 가능 (공동현관 없음)")
						}
					/>
				</div>
				<div className="mb-3 ml-6">
					<CustomRadioButton
						id="guard-call"
						name="entry-method"
						value="guard-call"
						label="경비실 호출"
						checked={entryMethod === "경비실 호출"}
						onChange={() => setEntryMethod("경비실 호출")}
					/>
				</div>
				<div className="mb-3 ml-6">
					<CustomRadioButton
						id="house-call"
						name="entry-method"
						value="house-call"
						label="세대 호출"
						checked={entryMethod === "세대 호출"}
						onChange={() => setEntryMethod("세대 호출")}
					/>
				</div>
				<div className="mb-3 ml-6">
					<CustomRadioButton
						id="other"
						name="entry-method"
						value="other"
						label="기타"
						checked={entryMethod === "기타"}
						onChange={() => setEntryMethod("기타")}
					/>
					{entryMethod === "기타" && (
						<div className="mt-2 ml-7 mr-6">
							<EnterPlaceHolderSmaller
								id="other-input"
								placeholder="예) 뒤쪽 문은 항상 열려있습니다"
								value={entryInput}
								onChange={handleInputChange}
								ref={otherInputRef}
							/>
							<div className="flex items-center text-xs mt-2 text-gray-500">
								<InfoIcon className="ml-2 mr-1" />
								입력한 방법으로 출입이 불가능한 경우, 수거/배송이
								어렵습니다.
							</div>
						</div>
					)}
				</div>
				<div className="w-full max-w-[430px] h-[24px]"></div>
				<ShipReceiveAddressDetail />
			</div>
			<div className="flex-grow w-full max-w-[430px] bg-static-white"></div>
			<div className="fixed bottom-0 w-full max-w-[430px] h-[100px] shadow-elevation-shadow-normal-top">
				{" "}
				{/* Adjusted bottom position */}
				<ActionButton
					label="다음"
					onClick={handleNextNavigation}
					className="w-full text-primary-normal"
				/>
			</div>
		</div>
	);
};

export default HouseEntry;
