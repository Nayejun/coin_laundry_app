"use client";
import React, { FC, useState, useEffect } from "react";
import TopNavigation from "@/app/(public)/enterAddress/components/common/TopNavigation/page";
import { useRouter } from "next/navigation";
import InputStatic from "@/app/(public)/enterAddress/components/common/InputStatic/page";
import ActionButtonGray from "@/app/(public)/enterAddress/components/common/ActionButtonGray/page";
import ActionButton from "@/app/(public)/enterAddress/components/common/ActionButton/page";
import "@/app/global.css";
import EnterPlaceholder from "@/app/(public)/enterAddress/components/common/EnterPlaceholder/page";
import { getInputAddress, updateInputAddress } from "@/utils/api";

const DetailedAddress: FC = () => {
	const router = useRouter();
	const [detailedAddress, setDetailedAddress] = useState<string>("");
	const [isButtonGray, setIsButtonGray] = useState(true);
	const [isSaved, setIsSaved] = useState(false);
	const [id, setId] = useState<string | null>(null);
	const [selectedAddress, setSelectedAddress] = useState<string>("");
	const [receiverName, setReceiverName] = useState<string>("");
	const [shippingName, setShippingName] = useState<string>("");
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
			const storedSelectedAddress = localStorage.getItem("selectedAddress");
			if (storedId) {
				setId(JSON.parse(storedId));
			}
			if (storedSelectedAddress) {
				setSelectedAddress(JSON.parse(storedSelectedAddress));
			}
		}
	}, []);

	useEffect(() => {
		const fetchAddress = async (id: string) => {
			try {
				const data = await getInputAddress(id);
				console.log("Fetched address info in editAddress:", data);

				const savedAddress =
					localStorage.getItem("selectedAddress") || data.selectedAddress;
				const savedDetailedAddress =
					localStorage.getItem("detailedAddress") || data.detailedAddress;
				const savedEntryMethod =
					localStorage.getItem("entryMethod") || data.entryMethod;
				const savedEntryInput =
					localStorage.getItem("entryInput") || data.entryInput;
				const savedCarrierOption =
					localStorage.getItem("carrierOption") || data.carrierOption;
				const savedCarrierInput =
					localStorage.getItem("carrierInput") || data.carrierInput;

				setAddress({
					...data,
					selectedAddress: safeJSONParse(savedAddress),
					detailedAddress: safeJSONParse(savedDetailedAddress),
					entryMethod: safeJSONParse(savedEntryMethod),
					entryInput: safeJSONParse(savedEntryInput),
					carrierOption: safeJSONParse(savedCarrierOption),
					carrierInput: safeJSONParse(savedCarrierInput),
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
			setReceiverName(address.receiverName);
			setShippingName(address.shippingName);
		}
	}, [address.receiverName, address.shippingName]);

	const handleBackNavigation = () => {
		if (typeof window !== "undefined") {
			localStorage.removeItem("detailedAddress");
		}
		if (id) {
			router.push(`/crudAddress/editAddress/${id}`);
		}
	};

	const handleDetailedAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setDetailedAddress(e.target.value);
	};

	const handleSave = () => {
		if (typeof window !== "undefined") {
			if (detailedAddress) {
				localStorage.setItem("detailedAddress", JSON.stringify(detailedAddress));
				setIsButtonGray(false);
				setIsSaved(true);
			}
		}
	};

	const handleNextNavigation = () => {
		if (typeof window !== "undefined") {
			if (detailedAddress) {
				localStorage.setItem("detailedAddress", JSON.stringify(detailedAddress));
			}
		}
		if (id) {
			router.push(`/crudAddress/editAddress/${id}`);
		}
	};

	return (
		<div className="flex flex-col justify-center items-center bg-gray-50 min-h-screen">
			<div className="w-full max-w-[430px] bg-static-white flex flex-col pb-[16px]">
				<TopNavigation text={"배송지 수정"} onClick={handleBackNavigation}></TopNavigation>
				<div className="self-start ml-[24px] mt-[16px] mb-[8px] text-label-1-normal font-semibold">
					배송 받으실 주소
				</div>
			</div>
			<div className="w-full max-w-[430px] bg-white text-body-1-normal font-medium">
				<div className="mx-[24px]">
					<InputStatic value={selectedAddress} />
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
					<div className="fixed bottom-0 w-full max-w-[430px] h-[100px] shadow-elevation-shadow-normal-top">
						<ActionButtonGray
							label="저장"
							onClick={handleSave}
							className="w-full text-primary-normal"
						/>
					</div>
				) : (
					<div className="fixed bottom-0 w-full max-w-[430px] h-[100px] shadow-elevation-shadow-normal-top">
						<ActionButton
							label="수정으로 돌아가기"
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
