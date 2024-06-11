"use client";
import React, { FC } from "react";
import { useRouter } from "next/navigation";
import InputStatic from "@/components/others/InputStatic";
import TopNavigation from "@/app/(app)/app/enterShippingAddress/components/TopNavigation/page";
import ActionButton from "@/components/ui/ActionButton";
import ResetButton from "@/app/(app)/app/enterShippingAddress/components/ResetButton/page";

const FinalSavedFieldsPage: FC = () => {
  const router = useRouter();

  const handleReset = () => {
    localStorage.clear(); // Clear all items in localStorage
    router.push("/app/enterShippingAddress/inputAddress/A-shippingName");
  };

  const handleNextPageNavigation = () => {
    router.push("/app/enterShippingAddress/inputAddress/F-finalAddressCheck"); // Navigate to the F-finalAddressCheck page
  };

  const handleBackNavigation = () => {
    localStorage.removeItem("detailedAddress");
    router.push("/app/enterShippingAddress/inputAddress/C-searchToggle");
  };

  const savedSelectedAddress = localStorage.getItem("selectedAddress") || "";
  const detailedAddress = localStorage.getItem("detailedAddress") || "";
  const receiverName = localStorage.getItem("receiverName") || "";
  const shippingName = localStorage.getItem("shippingName") || "";
  const entryMethod = localStorage.getItem("entryMethod") || "";
  const entryInput = localStorage.getItem("entryInput") || "";
  const carrierOption = localStorage.getItem("carrierOption") || "";
  const carrierInput = localStorage.getItem("carrierInput") || "";

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 items-center">
      <div className="w-full max-w-[390px] bg-white flex flex-col justify-center items-center">
        <TopNavigation text={`배송지 추가`} onClick={handleBackNavigation} />

        <div className="w-full max-w-[390px] bg-white px-[24px] text-body-2-normal font-medium">
          <div className="text-label-1-normal font-semibold ml-[8px] mt-[16px] mb-[8px]">
            배송지 이름
          </div>
          <InputStatic value={shippingName} />
        </div>

        <div className="w-full max-w-[390px] bg-white px-[24px] text-body-2-normal font-medium">
          <div className="text-label-1-normal font-semibold ml-[8px] mt-[16px] mb-[8px]">
            받는 분
          </div>
          <InputStatic value={receiverName} />
        </div>

        <div className="w-full max-w-[390px] bg-white px-[24px] text-body-2-normal font-medium">
          <div className="text-label-1-normal font-semibold ml-[8px] mt-[16px] mb-[8px]">
            배송 받으실 주소
          </div>
          <InputStatic value={savedSelectedAddress} />
        </div>
        {detailedAddress && (
          <div className="w-full max-w-[390px] mt-[8px] bg-white px-[24px] text-body-2-normal font-medium">
            <InputStatic value={detailedAddress} />
          </div>
        )}

        <div className="w-full max-w-[390px] bg-white px-[24px] text-body-2-normal font-medium">
          <div className="text-label-1-normal font-semibold ml-[8px] mt-[16px] mb-[8px]">
            공동현관 출입 방법
          </div>
          {(entryMethod === "공동현관 비밀번호" || entryMethod === "기타") ? (
            <div className="w-full max-w-[390px] mt-[8px] bg-white text-body-2-normal font-medium">
              <InputStatic value={entryInput} />
            </div>
          ) : (
            <div className="w-full max-w-[390px] mt-[8px] bg-white text-body-2-normal font-medium">
              <InputStatic value={entryMethod} />
            </div>
          )}
        </div>

        <div className="w-full max-w-[390px] bg-white px-[24px] text-body-2-normal font-medium">
          <div className="text-label-1-normal font-semibold ml-[8px] mt-[16px] mb-[8px]">
            캐리어 님께
          </div>
          {carrierOption === "직접 입력" ? (
            <div className="w-full max-w-[390px] mt-[8px] bg-white text-body-2-normal font-medium">
              <InputStatic value={carrierInput} />
            </div>
          ) : (
            <div className="w-full max-w-[390px] mt-[8px] bg-white text-body-2-normal font-medium">
              <InputStatic value={carrierOption} />
            </div>
          )}
        </div>

        <div className="mt-[24px] mb-[8px] bg-white w-full flex flex-col items-center rounded-md p-[24px]">
          <ActionButton label={"다음"} onClick={handleNextPageNavigation} />
        </div>
        <div className="mb-[24px]">
          <ResetButton label={"초기화"} onClick={handleReset} />
        </div>
      </div>
    </div>
  );
};

export default FinalSavedFieldsPage;
