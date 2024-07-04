"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import {
	getInputAddress,
	updateInputAddress,
} from "@/utils/api";
import TopNavigation from "@/app/(public)/crudAddress/components/common/TopNavigation/page";
import InputNonStatic from "@/app/(public)/crudAddress/components/common/InputNonStatic/page";
import { clearSpecificLocalStorageItems } from "@/utils/localStorage";
import ActionButton from "@/app/(public)/enterAddress/components/common/ActionButton/page";

const EditAddress: React.FC = () => {
	const router = useRouter();
	const params = useParams();
	const id = Array.isArray(params.id) ? params.id[0] : params.id; // Ensure id is a string
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

	const safeJSONParse = (value: string) => {
		try {
			return JSON.parse(value);
		} catch (error) {
			return value;
		}
	};

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

				setAddress({
					...data,
					selectedAddress: safeJSONParse(savedAddress),
					detailedAddress: safeJSONParse(savedDetailedAddress),
					entryMethod: safeJSONParse(savedEntryMethod),
					entryInput: safeJSONParse(savedEntryInput),
					carrierOption: safeJSONParse(savedCarrierOption),
					carrierInput: safeJSONParse(savedCarrierInput),
				});
				clearSpecificLocalStorageItems();
			} catch (error) {
				console.error("Error fetching address:", error);
			}
		};

		if (id) {
			fetchAddress(id);
		}
	}, [id]);

	const handleActivateAddress = () => {
		localStorage.setItem("editAddressId", JSON.stringify(id));
		router.push(`/crudAddress/components/SearchActivePage`);
	};

	const handleEntryMethod = () => {
		localStorage.setItem("editAddressId", JSON.stringify(id));
		router.push(`/crudAddress/components/houseEntry`);
	};

	const handleCarrierMethod = () => {
		localStorage.setItem("editAddressId", JSON.stringify(id));
		router.push(`/crudAddress/components/carrierOptions`);
	};

	const handleUpdate = async () => {
		try {
			await updateInputAddress(id, address);
			router.push("/crudAddress/addressList");
		} catch (error) {
			console.error("Error updating address:", error);
		}
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const { name, value } = e.target;
		setAddress((prev) => ({ ...prev, [name]: value }));
	};

	if (!address) {
		return <div>Loading...</div>;
	}

	const handleBackNavigation = () => {
		router.push("/crudAddress/addressList");
	};

	return (
		<div className="flex flex-col items-center bg-gray-50 min-h-screen">
			<div className="w-full max-w-[430px] bg-static-white flex flex-col pb-[16px] overflow-auto">
				<TopNavigation
					text="배송지 수정"
					onClick={handleBackNavigation}
				/>

				<div>
					<div className="w-full max-w-[430px] bg-static-white px-[24px] text-body-1-normal font-medium mb-[16px]">
						<div className="text-label-1-normal font-semibold mb-[8px] pt-[10px]">
							배송지 이름
						</div>
						<InputNonStatic
							value={address.shippingName}
							name="shippingName"
							onChange={handleChange}
						/>
					</div>

					<div className="w-full max-w-[430px] bg-static-white px-[24px] text-body-1-normal font-medium mb-[16px]">
						<div className="text-label-1-normal font-semibold mb-[8px]">
							받는 분
						</div>
						<InputNonStatic
							value={address.receiverName}
							name="receiverName"
							onChange={handleChange}
						/>
					</div>

					<div className="w-full max-w-[430px] bg-static-white px-[24px] text-body-1-normal font-medium mb-[16px]">
						<div className="text-label-1-normal font-semibold mb-[8px]">
							전화번호
						</div>
						<InputNonStatic
							value={address.phoneNumber}
							name="phoneNumber"
							onChange={handleChange}
						/>
					</div>

					<div className="ml-[24px] mt-[16px] mb-[8px] text-label-1-normal font-semibold">
						배송 받으실 주소
					</div>
					<div className="w-full max-w-[430px] bg-static-white px-[24px] text-body-1-normal font-medium mb-[16px]">
						<div className="text-label-1-normal font-semibold mb-[8px]">
							<InputNonStatic
								name="selectedAddress"
								value={address.selectedAddress}
								onChange={handleChange}
								onClick={handleActivateAddress}
							/>
						</div>
						{address.detailedAddress && (
							<div className="w-full max-w-[430px] bg-static-white text-body-1-normal font-medium mb-[16px]">
								<InputNonStatic
									name="detailedAddress"
									value={address.detailedAddress}
									onChange={handleChange}
									onClick={handleActivateAddress}
								/>
							</div>
						)}
					</div>

					<div className="w-full max-w-[430px] bg-static-white px-[24px] text-body-1-normal font-medium mb-[16px]">
						<div className="text-label-1-normal font-semibold mb-[8px]">
							공동현관 출입 방법
						</div>
						{address.entryMethod === "공동현관 비밀번호" ||
						address.entryMethod === "기타" ? (
							<InputNonStatic
								name="entryInput"
								value={address.entryInput}
								onChange={handleChange}
								onClick={handleEntryMethod}
							/>
						) : (
							<InputNonStatic
								name="entryMethod"
								value={address.entryMethod}
								onChange={handleChange}
								onClick={handleEntryMethod}
							/>
						)}
					</div>

					<div className="w-full max-w-[430px] bg-static-white px-[24px] text-body-1-normal font-medium mb-[16px]">
						<div className="text-label-1-normal font-semibold mb-[8px]">
							캐리어 님께
						</div>
						{address.carrierOption === "직접 입력" ? (
							<InputNonStatic
								name="carrierInput"
								value={address.carrierInput}
								onChange={handleChange}
								onClick={handleCarrierMethod}
							/>
						) : (
							<InputNonStatic
								name="carrierOption"
								value={address.carrierOption}
								onChange={handleChange}
								onClick={handleCarrierMethod}
							/>
						)}
					</div>
				</div>
			</div>
			<div className="flex-grow w-full max-w-[430px] bg-static-white"></div>
			<div className="fixed bottom-0 w-full max-w-[430px] h-[100px]">
				<ActionButton
					label="저장"
					onClick={handleUpdate}
					className="w-full text-primary-normal"
				/>
			</div>
		</div>
	);
};

export default EditAddress;
