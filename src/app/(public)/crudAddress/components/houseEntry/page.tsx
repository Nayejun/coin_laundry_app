"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import TopNavigation from "@/app/(public)/enterAddress/components/common/TopNavigation/page";
import ActionButton from "@/app/(public)/enterAddress/components/common/ActionButton/page";
import EnterPlaceHolderSmaller from "@/app/(public)/enterAddress/components/common/EnterPlaceHolderSmaller/page";
import InfoIcon from "@/assets/icons/others/information.svg";
import CustomRadioButton from "@/app/(public)/crudAddress/components/entry/CustomRadioButton/page";
import { getInputAddress } from "@/utils/api";
import InputStatic from "@/app/(public)/enterAddress/components/common/InputStatic/page";
import BasicDivider from "@/app/(public)/enterAddress/components/common/BasicDivider/page";

const HouseEntry: React.FC = () => {
	const router = useRouter();
	const [entryMethod, setEntryMethod] =
		useState<string>("공동현관 비밀번호");
	const [entryInput, setEntryInput] = useState<string>("");
	const [detailedAddress, setDetailedAddress] =
		useState<string>("");
	const [id, setId] = useState<string | null>(null);
	const [selectedAddress, setSelectedAddress] =
		useState<string>("");
	const [receiverName, setReceiverName] = useState<string>("");
	const [shippingName, setShippingName] = useState<string>("");
	const [phoneNumber, setPhoneNumber] = useState<string>("");
	const [address, setAddress] = useState({
		shippingName: "",
		receiverName: "",
		phoneNumber: "",
		selectedAddress: "",
		detailedAddress: "",
		entryMethod: "",
		entryInput: "",
		carrierOption: "",
		carrierInput: "",
	});

	useEffect(() => {
		if (typeof window !== "undefined") {
			const storedId = localStorage.getItem("editAddressId");
			if (storedId) {
				setId(JSON.parse(storedId));
			}
		}
	}, []);

	useEffect(() => {
		const fetchAddress = async (id: string) => {
			try {
				const data = await getInputAddress(id);
				console.log(
					"Fetched address info in editAddress:",
					data
				);

				const savedAddress =
					localStorage.getItem("selectedAddress") ||
					data.selectedAddress;
				const savedDetailedAddress =
					localStorage.getItem("detailedAddress") ||
					data.detailedAddress;
				const savedEntryMethod =
					localStorage.getItem("entryMethod") ||
					data.entryMethod;
				const savedEntryInput =
					localStorage.getItem("entryInput") || data.entryInput;
				const savedCarrierOption =
					localStorage.getItem("carrierOption") ||
					data.carrierOption;
				const savedCarrierInput =
					localStorage.getItem("carrierInput") ||
					data.carrierInput;
				const savedPhoneNumber =
					localStorage.getItem("phoneNumber") ||
					data.phoneNumber;

				setAddress({
					...data,
					selectedAddress: safeJSONParse(savedAddress),
					detailedAddress: safeJSONParse(savedDetailedAddress),
					entryMethod: savedEntryMethod, // Directly use the saved value
					entryInput: savedEntryInput, // Directly use the saved value
					carrierOption: safeJSONParse(savedCarrierOption),
					carrierInput: safeJSONParse(savedCarrierInput),
					phoneNumber: safeJSONParse(savedPhoneNumber),
				});
			} catch (error) {
				console.error("Error fetching address:", error);
			}
		};

		if (id) {
			fetchAddress(id);
		}
	}, [id]);

	const safeJSONParse = (value: string) => {
		try {
			return JSON.parse(value);
		} catch (error) {
			return value;
		}
	};

	useEffect(() => {
		if (typeof window !== "undefined") {
			setPhoneNumber(address.phoneNumber);
			setReceiverName(address.receiverName);
			setShippingName(address.shippingName);
			setSelectedAddress(address.selectedAddress);
			setDetailedAddress(address.detailedAddress);
		}
	}, [
		address.detailedAddress,
		address.phoneNumber,
		address.receiverName,
		address.selectedAddress,
		address.shippingName,
	]);

	const handleBackNavigation = () => {
		if (id) {
			router.push(`/crudAddress/editAddress/${id}`);
		}
	};

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
		if (entryInput) {
			localStorage.setItem("entryInput", entryInput);
			localStorage.setItem("entryMethod", entryMethod);
			router.push(`/crudAddress/editAddress/${id}`);
		} else if (entryMethod)
			localStorage.setItem("entryMethod", entryMethod);
		router.push(`/crudAddress/editAddress/${id}`);
	};

	return (
		<div className="flex flex-col items-center bg-gray-50 min-h-screen overflow-hidden">
			<div className="w-full max-w-[430px] bg-white flex flex-col pb-24 overflow-auto">
				<TopNavigation
					text="배송지 추가"
					onClick={handleBackNavigation}
				/>
				{" "}
				<div className="w-full max-w-[430px] bg-static-white px-[24px] text-body-1-normal font-medium pb-[16px]">
					<div className="text-label-1-normal font-semibold mt-[10px] mb-[8px]">
						휴대폰 번호
					</div>
					<InputStatic value={phoneNumber} />
				</div>
				{" "}
				{" "}
				<div className="w-full max-w-[430px] bg-static-white px-[24px] text-body-1-normal font-medium pb-[8px] ">
					<div className="text-label-1-normal font-semibold mb-[8px]">
						배송 받으실 주소
					</div>
					<InputStatic value={selectedAddress} />
				</div>
				{detailedAddress && (
					<div className="w-full max-w-[430px] bg-static-white px-[24px] text-body-1-normal font-medium">
						<div className="text-label-1-normal font-semibold">
							<InputStatic value={detailedAddress} />
						</div>
					</div>
				)}
				{" "}
				<div className="mt-[16px]">
					<BasicDivider
						width="calc(100% - 40px)"
						className="!bg-line-neutral mx-[20px] max-w-[430px]"
						variant="normal"
						vertical={false}
					/>
				</div>
				{" "}
				<div className="px-6 pt-4">
					<div className="text-lg font-semibold mb-2">
						공동현관 출입 방법
					</div>
					<div
						className="text-sm text-gray-500 mb-5"
						style={{ wordBreak: "keep-all" }}
					>
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
							/>
							<div className="flex items-start text-caption-2 font-medium mt-2 text-gray-500">
								<InfoIcon className="flex-shrink-0 ml-2 mr-1" />
								<div
									className="flex-1"
									style={{ wordBreak: "keep-all" }}
								>
									입력한 방법으로 출입이 불가능한 경우,
									수거/배송이 어렵습니다.
								</div>
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
				<div className=" ml-6">
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
							/>
							<div className="flex items-start text-caption-2 font-medium mt-2 text-gray-500 ">
								<InfoIcon className="flex-shrink-0 ml-2 mr-1" />
								<div
									className="flex-1"
									style={{ wordBreak: "keep-all" }}
								>
									입력한 방법으로 출입이 불가능한 경우,
									수거/배송이 어렵습니다.
								</div>
							</div>
						</div>
					)}
				</div>
				{" "}
				<div className="mt-[16px] mb-[16px]">
					<BasicDivider
						width="calc(100% - 40px)"
						className="!bg-line-neutral mx-[20px] max-w-[430px]"
						variant="normal"
						vertical={false}
					/>
				</div>
				{" "}
				{" "}
				<div className="w-full max-w-[430px] bg-static-white px-[24px] text-body-1-normal font-medium pb-[16px]">
					<div className="text-label-1-normal font-semibold mb-[8px]">
						받는 분
					</div>
					<InputStatic value={receiverName} />
				</div>
				{" "}
				{" "}
				<div className="w-full max-w-[430px] bg-static-white px-[24px] text-body-1-normal font-medium pb-[16px] ">
					<div className="text-label-1-normal font-semibold mb-[8px]">
						배송지 이름
					</div>
					<InputStatic value={shippingName} />
				</div>
				{" "}
			</div>
			<div className="flex-grow w-full max-w-[430px] bg-static-white"></div>
			<div className="fixed bottom-0 w-full max-w-[430px] h-[100px] shadow-elevation-shadow-normal-top">
				<ActionButton
					label="저장"
					onClick={handleNextNavigation}
					className="w-full text-primary-normal"
				/>
			</div>
		</div>
	);
};

export default HouseEntry;
