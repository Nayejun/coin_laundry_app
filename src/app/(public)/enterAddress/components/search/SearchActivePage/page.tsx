"use client";
import React, { FC, useState, useEffect } from "react";
import { fakeData } from "@/data/fakeData";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation
import TopNavigation from "@/app/(public)/enterAddress/components/common/TopNavigation/page";
import SearchActive from "@/app/(public)/enterAddress/components/search/SearchActive/page";
import { ClipLoader } from "react-spinners";
import BasicDivider from "@/app/(public)/enterAddress/components/common/BasicDivider/page";
import ProgressBar from "@/app/(public)/enterAddress/components/common/ProgressBar/page";

const SearchActivePage: FC = () => {
	const router = useRouter(); // Initialize the router
	const [query, setQuery] = useState("");
	const [results, setResults] = useState(fakeData);
	const [loading, setLoading] = useState(false);

	const handleBackNavigation = () => {
		router.push("/enterAddress/inputAddress/receiverName"); // Navigate to the root page
	};

	const handleSearch = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const keyword = e.target.value;
		setQuery(keyword);
		setLoading(true);
		setTimeout(() => {
			if (keyword) {
				const filteredData = fakeData.filter((item) =>
					item.address.includes(keyword)
				);
				setResults(filteredData);
			} else {
				setResults(fakeData);
			}
			setLoading(false);
		}, 500); // Simulate a delay for loading
	};

	const handleSelect = (address: string) => {
		if (typeof window !== "undefined") {
			localStorage.setItem("selectedAddress", address);
			console.log(`Saved address: ${address}`);
			alert(`Saved address: ${address}`);
		}
		router.push("/enterAddress/inputAddress/addDetailedAddress");
	};

	return (
		<div className="flex flex-col items-center bg-gray-50 min-h-screen">
			<div className="w-full max-w-[430px] bg-static-white flex flex-col pb-[16px]">
				<ProgressBar progress={37.5} />
				<TopNavigation
					text={`배송지 검색`}
					onClick={handleBackNavigation}
				/>
				<div className="mx-[24px] mt-[16px] mb-[20px]">
					<SearchActive value={query} onChange={handleSearch} />
				</div>
				{!query ? (
					<>
						<BasicDivider
							className="absolute"
							variant="thick"
							vertical={false}
							width="w-full max-w-[430px]" // Adjust width calculation
						/>
						<div className="self-start ml-[20px] mt-[20px] mb-[20px] text-body-1-normal">
							이렇게 검색해보세요.
						</div>

						<div className="flex flex-col self-start">
							<div className="text-label-1-normal text-label-normal ml-[20px]">
								&nbsp;&nbsp;•&nbsp;&nbsp;도로명 + 건물번호
							</div>
							<div className="text-caption-1 text-label-alternative ml-[42px] mt-[5px]">
								예시) 서빙고로 17
							</div>
							<div className="text-label-1-normal text-label-normal ml-[20px] mt-[10px]">
								&nbsp;&nbsp;•&nbsp;&nbsp;지역명 + 번지
							</div>
							<div className="text-caption-1 text-label-alternative ml-[42px] mt-[5px]">
								예시) 한강로2가 427
							</div>
							<div className="text-label-1-normal text-label-normal ml-[20px] mt-[10px]">
								&nbsp;&nbsp;•&nbsp;&nbsp;건물명(아파트명)
							</div>
							<div className="text-caption-1 text-label-alternative ml-[42px] mt-[5px]">
								예시) 이촌동 코인 세탁소
							</div>
						</div>
					</>
				) : loading ? (
					<div className="flex justify-center items-center w-full h-full">
						<ClipLoader
							color="#00A5A1"
							loading={loading}
							size={35}
						/>
					</div>
				) : (
					results.map((item) => (
						<div
							key={item.id}
							className="self-start py-[10px] cursor-pointer w-full max-w-[430px]"
							onClick={() => handleSelect(item.address)}
						>
							<div className="text-caption-1 font-medium text-primary-strong ml-[24px]">
								{item.serviceAvailable}
							</div>
							<div className="text-label-1-normal mt-[1px] ml-[24px]">
								{item.address}
							</div>
							<div className="flex items-center mt-[2px]">
								<span className="border-[0.5px] px-[4px] py-[2px] text-caption-2 text-label-assistive rounded-[4px] text-center ml-[24px]">
									지번
								</span>
								<div className="text-caption-1 text-label-alternative ml-[5px]">
									{item.detail}
								</div>
							</div>
							<div className="mt-[16px]">
								<BasicDivider
									width="calc(100% - 40px)" // Adjust width calculation
									className="!bg-line-neutral mx-[20px] max-w-[430px]"
									variant="normal"
									vertical={false}
								/>
							</div>
						</div>
					))
				)}
			</div>
			<div className="flex-grow w-full max-w-[430px] bg-static-white"></div>
		</div>
	);
};

export default SearchActivePage;
