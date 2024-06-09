"use client";
import React, { FC } from "react";
import SearchInactive from "@/components/others/SearchInactive";
import TopNavigation from "@/app/(app)/app/enterShippingAddress/components/TopNavigation/page";
import { useRouter } from "next/navigation";

interface SearchInactivePageProps {
	handleBackNavigation?: () => void;
	handleActivate: () => void;
}

const SearchInactivePage: FC<SearchInactivePageProps> = ({
	handleActivate,
}) => {
  const router = useRouter(); // Initialize the router
	const handleBackNavigation = () => {
		router.push(
			"/app/enterShippingAddress/inputAddress/B-receiverName"
		); // Navigate to the previous page
	};

	return (
		<div className="flex flex-col justify-center items-center bg-gray-50">
			<div className="w-[390px] bg-white flex flex-col justify-center items-center">
				<TopNavigation
					text={`배송지 추가`}
					onClick={handleBackNavigation}
				/>
				<div className="self-start ml-[24px] mt-[16px] mb-[8px] text-label-1-normal">
					배송 받으실 주소
				</div>
			</div>
			<div className="w-[390px] bg-white pl-[24px]">
			<SearchInactive onClick={handleActivate} />
			</div>
		</div>
	);
};

export default SearchInactivePage;
