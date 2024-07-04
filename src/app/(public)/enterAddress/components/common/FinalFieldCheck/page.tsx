"use client";
import React, { useState, useEffect } from "react";
import InputStatic from "@/app/(public)/enterAddress/components/common/InputStatic/page";

const ShipReceiverAddressDetailEntryCellular: React.FC = () => {
    const [selectedAddress, setSelectedAddress] = useState<string>("");
    const [detailedAddress, setDetailedAddress] = useState<string>("");
    const [receiverName, setReceiverName] = useState<string>("");
    const [shippingName, setShippingName] = useState<string>("");
    const [entryMethod, setEntryMethod] = useState<string>("");
    const [entryInput, setEntryInput] = useState<string>("");
    const [carrierOption, setCarrierOption] = useState<string>("");
    const [carrierInput, setCarrierInput] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");

		const convertPhoneNumberToJson = () => {
			const keys = [
				'phoneNumber'
			];
		
			keys.forEach(key => {
				const value = localStorage.getItem(key);
				if (value) {
					try {
						JSON.parse(value); // Check if it's already JSON
					} catch (error) {
						// If it's not JSON, convert it to JSON and save it back
						localStorage.setItem(key, JSON.stringify(value));
					}
				}
			});
		};

    useEffect(() => {
        convertPhoneNumberToJson(); // Ensure phoneNumber is stored as JSON

        if (typeof window !== "undefined") {
            setSelectedAddress(localStorage.getItem("selectedAddress") ?? "");
            setDetailedAddress(localStorage.getItem("detailedAddress") ?? "");
            setReceiverName(localStorage.getItem("receiverName") ?? "");
            setShippingName(localStorage.getItem("shippingName") ?? "");
            setEntryMethod(localStorage.getItem("entryMethod") ?? "");
            setEntryInput(localStorage.getItem("entryInput") ?? "");
            setCarrierOption(localStorage.getItem("carrierOption") ?? "");
            setCarrierInput(localStorage.getItem("carrierInput") ?? "");
            setPhoneNumber(JSON.parse(localStorage.getItem("phoneNumber") ?? "") || "");
        }
    }, []);

    return (
        <div>
            {/**/}
            <div className="w-full max-w-[430px] bg-static-white px-[24px] text-body-1-normal font-medium mb-[16px]">
                <div className="text-label-1-normal font-semibold mb-[8px]">
                    배송지 이름
                </div>
                <InputStatic value={shippingName} />
            </div>
            {/**/}
            <div className="w-full max-w-[430px] bg-static-white px-[24px] text-body-1-normal font-medium mb-[16px]">
                <div className="text-label-1-normal font-semibold mb-[8px]">
                    받는 분
                </div>
                <InputStatic value={receiverName} />
            </div>
            {/**/}
            <div className="w-full max-w-[430px] bg-static-white px-[24px] text-body-1-normal font-medium mb-[16px]">
                <div className="text-label-1-normal font-semibold mb-[8px]">
                    전화번호
                </div>
                <InputStatic value={phoneNumber} />
            </div>
            {/**/}

            {/**/}

            <div className="ml-[24px] mt-[16px] mb-[8px] text-label-1-normal font-semibold">
                배송 받으실 주소
            </div>
            <div className="w-full max-w-[430px] bg-static-white px-[24px] text-body-1-normal font-medium mb-[16px]">
                <div className="text-label-1-normal font-semibold mb-[8px]">
                    <InputStatic value={selectedAddress} />
                </div>
                {detailedAddress && (
                    <div className="w-full max-w-[430px] bg-static-white text-body-1-normal font-medium">
                        <InputStatic value={detailedAddress} />
                    </div>
                )}
            </div>
            {/**/}
            <div className="w-full max-w-[430px] bg-static-white px-[24px] text-body-1-normal font-medium mb-[16px]">
                <div className="text-label-1-normal font-semibold mb-[8px]">
                    공동현관 출입 방법
                </div>
                {entryMethod === "공동현관 비밀번호" ||
                entryMethod === "기타" ? (
                    <InputStatic value={entryInput} />
                ) : (
                    <InputStatic value={entryMethod} />
                )}
            </div>
            {/**/}
            <div className="w-full max-w-[430px] bg-static-white px-[24px] text-body-1-normal font-medium mb-[16px]">
                <div className="text-label-1-normal font-semibold mb-[8px]">
                    캐리어 님께
                </div>
                {carrierOption === "직접 입력" ? (
                    <InputStatic value={carrierInput} />
                ) : (
                    <InputStatic value={carrierOption} />
                )}
            </div>
        </div>
    );
};

export default ShipReceiverAddressDetailEntryCellular;
