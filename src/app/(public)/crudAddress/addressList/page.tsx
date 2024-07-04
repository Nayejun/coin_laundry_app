"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
	getAddressesByPhoneNumber,
	deleteInputAddress,
	updateInputAddress,
} from "@/utils/api";
import CustomModal from "@/app/(public)/crudAddress/components/common/CustomModal/page";
import Location from "@/assets/icons/editAddress/location.svg";
import Check from "@/assets/icons/editAddress/check-large.svg";
import TopNavigation from "@/app/(public)/enterAddress/components/common/TopNavigation/page";
import { useLocalStorage } from "@/app/hooks/useLocalStorage";
import BasicDivider from "../../enterAddress/components/common/BasicDivider/page";
import ActionButtonWhite from "@/app/(public)/crudAddress/components/ActionButtonWhite/page";


interface Address {
	_id: string;
	shippingName: string;
	selectedAddress: string;
	isDefault: boolean;
}

const AddressList: React.FC = () => {
	const [addresses, setAddresses] = useState<Address[]>([]);
	const [showDeleteModal, setShowDeleteModal] =
		useState<boolean>(false);
	const [showDefaultModal, setShowDefaultModal] =
		useState<boolean>(false);
	const [selectedAddressId, setSelectedAddressId] = useState<
		string | null
	>(null);
	const [phoneNumber] = useLocalStorage<string>(
		"phoneNumber",
		""
	);
	const router = useRouter();

	useEffect(() => {
		if (phoneNumber) {
			fetchAddresses(phoneNumber);
		}
	}, [phoneNumber]);

	const fetchAddresses = async (phone: string) => {
		try {
			const fetchedAddresses = await getAddressesByPhoneNumber(
				phone
			);
			setAddresses(fetchedAddresses);
		} catch (error) {
			console.error("Failed to fetch addresses:", error);
		}
	};

	const handleDelete = async () => {
		if (selectedAddressId) {
			try {
				await deleteInputAddress(selectedAddressId);
				setAddresses(
					addresses.filter(
						(address) => address._id !== selectedAddressId
					)
				);
				setShowDeleteModal(false);
			} catch (error) {
				console.error("Failed to delete address:", error);
			}
		}
	};

	const handleSetDefault = async () => {
		if (selectedAddressId) {
			try {
				// Update the selected address to be the default
				await updateInputAddress(selectedAddressId, {
					isDefault: true,
				});
				// Update all other addresses to not be the default
				const updatedAddresses = addresses.map((address) => {
					if (address._id === selectedAddressId) {
						return { ...address, isDefault: true };
					} else if (address.isDefault) {
						updateInputAddress(address._id, {
							isDefault: false,
						});
						return { ...address, isDefault: false };
					}
					return address;
				});
				setAddresses(updatedAddresses);
				setShowDefaultModal(false);
			} catch (error) {
				console.error("Failed to set default address:", error);
			}
		}
	};

	const handleBackNavigation = () => {
		router.push("/");
	};

	const handleEdit = (id: string) => {
    console.log(`the id is: ${id}`);
		localStorage.setItem("editAddressId", JSON.stringify(id));
		router.push(`/crudAddress/editAddress/${id}`);
	};

	const handleAddNewAddress = () => {
		router.push("/enterAddress/inputAddress/shippingName");
	};

	return (
		<>
			<div className="flex flex-col items-center bg-gray-50 min-h-screen">
				<div className="w-full max-w-[430px] bg-static-white flex flex-col pt-[5px]">
					<TopNavigation
						text="배송지 설정"
						onClick={handleBackNavigation}
					></TopNavigation>
				</div>
				<div></div>
				<div className="w-full max-w-[430px] bg-white flex flex-col overflow-auto">
					{"    "}
					{addresses.map((address) => (
						<div
							key={address._id}
							className="pt-[16px] px-[20px]"
						>
							<div className="flex flex-col">
								<div className="flex">
									<div className="flex items-center justify-center text-body-1-normal leading-5 font-semibold ml-[32px]">
										{address.shippingName}
									</div>
									{address.isDefault && (
										<div className="ml-[6px] rounded-xl bg-[#F7F7F7] text-[#1677FF] text-label-2 px-[8px] py-[4px] font-semibold">
											기본 배송지
										</div>
									)}
								</div>

								<div className="flex items-center">
									<div className="flex items-center justify-center w-[24px] h-[24px] mr-[8px]">
										<Location />
									</div>
									<div
										className="flex-grow text-label-1-normal font-normal"
										style={{ wordBreak: "keep-all" }}
									>
										{address.selectedAddress}
									</div>
									{address.isDefault && (
										<Check className="w-[28px] h-[28px] ml-auto" />
									)}
								</div>
							</div>

							<div className="mt-2 flex">
                <div className="w-[32px]" />
								<button
									onClick={() => handleEdit(address._id)}
									className="text-caption-1 font-medium px-[10px] py-[6px] border border-label-disable rounded-xl mr-2"
								>
									수정
								</button>
								{!address.isDefault && (
									<>
										<button
											onClick={() => {
												setSelectedAddressId(address._id);
												setShowDeleteModal(true);
											}}
											className="text-caption-1 font-medium px-[10px] py-[6px] border border-label-disable rounded-xl mr-2"
										>
											삭제
										</button>
										<button
											onClick={() => {
												setSelectedAddressId(address._id);
												setShowDefaultModal(true);
											}}
											className="text-caption-1 font-medium px-[10px] py-[6px] border border-label-disable rounded-xl"
										>
											기본 배송지로 변경
										</button>
									</>
								)}
							</div>
							<div className="mt-[16px]">
								<BasicDivider
									width="calc(100%)" // Adjust width calculation
									className="!bg-line-neutral max-w-[430px]"
									variant="normal"
									vertical={false}
								/>
							</div>
						</div>
					))}
					{"    "}
				</div>

        <ActionButtonWhite label="새 배송지 추가" onClick={handleAddNewAddress}/>
				
				<CustomModal
					isOpen={showDeleteModal}
					onClose={() => setShowDeleteModal(false)}
          onConfirm={handleDelete}
					title="배송지를 삭제하시겠어요?"
				>
				</CustomModal>

				<CustomModal
					isOpen={showDefaultModal}
					onClose={() => setShowDefaultModal(false)}
          onConfirm={handleSetDefault}
					title="기본 배송지로 변경하시겠어요?"
				>
				</CustomModal>
				<div className="flex-grow w-full max-w-[430px] bg-static-white"></div>
			</div>
		</>
	);
};

export default AddressList;
