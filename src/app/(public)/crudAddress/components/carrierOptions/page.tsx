"use client";
import React, { useEffect, useState } from "react";
import CarrierOption from "@/app/(public)/crudAddress/components/carrier/CarrierOption/page";
import { useRouter } from "next/navigation";
import TopNavigation from "@/app/(public)/crudAddress/components/common/TopNavigation/page";
import ActionButton from "@/app/(public)/enterAddress/components/common/ActionButton/page";
import { getInputAddress } from "@/utils/api";
import InputStatic from "@/app/(public)/enterAddress/components/common/InputStatic/page";

const CarrierOptions: React.FC = () => {
	const router = useRouter();
	const [detailedAddress, setDetailedAddress] =
		useState<string>("");
	const [id, setId] = useState<string | null>(null);
	const [selectedAddress, setSelectedAddress] =
		useState<string>("");
	const [receiverName, setReceiverName] = useState<string>("");
	const [shippingName, setShippingName] = useState<string>("");
	const [phoneNumber, setPhoneNumber] = useState<string>("");
	const [entryMethod, setEntryMethod] = useState<string>("");
	const [entryInput, setEntryInput] = useState<string>("");

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
					carrierOption: savedCarrierOption,
					carrierInput: savedCarrierInput,
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
			setEntryMethod(address.entryMethod);
			setEntryInput(address.entryInput);
		}
	}, [
		address.detailedAddress,
		address.entryInput,
		address.entryMethod,
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

	const handleNextNavigation = () => {
		router.push(`/crudAddress/editAddress/${id}`); // Adjust the route as needed
	};

	return (
		<div className="flex flex-col items-center bg-gray-50 min-h-screen overflow-hidden">
			<div className="w-full max-w-[430px] bg-white flex flex-col pb-24 overflow-auto">
				<TopNavigation
					text="배송지 추가"
					onClick={handleBackNavigation}
				></TopNavigation>{" "}
				<div className="w-full max-w-[430px] bg-static-white px-[24px] text-body-1-normal font-medium pb-[16px]">
					<div className="text-label-1-normal font-semibold mt-[10px] mb-[8px]">
						휴대폰 번호
					</div>
					<InputStatic value={phoneNumber} />
				</div>{" "}
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
				{" "}
				<div className="w-full max-w-[430px] bg-static-white px-[24px] text-body-1-normal font-medium pt-[16px]">
					<div className="text-label-1-normal font-semibold mb-[8px]">
						공동현관 출입 방법
					</div>
					{address.entryMethod === "공동현관 비밀번호" ||
					address.entryMethod === "기타" ? (
						<InputStatic value={entryInput} />
					) : (
						<InputStatic value={entryMethod} />
					)}
				</div>{" "}
				<div className="mx-[24px]">
					<CarrierOption />
				</div>{" "}
				<div className="w-full max-w-[430px] bg-static-white px-[24px] text-body-1-normal font-medium pb-[16px]">
					<div className="text-label-1-normal font-semibold mb-[8px]">
						받는 분
					</div>
					<InputStatic value={receiverName} />
				</div>{" "}
				<div className="w-full max-w-[430px] bg-static-white px-[24px] text-body-1-normal font-medium">
					<div className="text-label-1-normal font-semibold mb-[8px]">
						배송지 이름
					</div>
					<InputStatic value={shippingName} />
				</div>{" "}
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

export default CarrierOptions;
