"use client";
import React, { FC, useState, useEffect } from "react";
import { fakeData } from "@/data/fakeData";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation
import TopNavigation from "@/app/(app)/app/enterShippingAddress/components/TopNavigation/page";
import SearchActive from "@/components/others/SearchActive";
import { ClipLoader } from "react-spinners";
import { BasicDivider } from "@/components/ui/BasicDivider";

const SearchActivePage: FC = ({}) => {
  const router = useRouter(); // Initialize the router
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(fakeData);
  const [loading, setLoading] = useState(false);

  const handleBackNavigation = () => {
    router.push("/app/enterShippingAddress/inputAddress/B-receiverName"); // Navigate to the root page
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    localStorage.setItem("selectedAddress", address);
    console.log(`Saved address: ${address}`);
    alert(`Saved address: ${address}`);
    router.push("/app/enterShippingAddress/inputAddress/D-addAddress");
  };

  return (
    <div>
      <div className="flex justify-center items-center bg-gray-50">
        <div className="w-[390px] bg-white flex flex-col justify-center items-center">
          <TopNavigation text={`배송지 검색`} onClick={handleBackNavigation} />
          <div className="m-[20px]">
            <SearchActive value={query} onChange={handleSearch} />
          </div>
          {!query ? (
            <>
              <BasicDivider
                className=""
                variant="thick"
                vertical={false}
              />
              <div className="self-start ml-[20px] mt-[16px] mb-[8px] text-body-1-normal">
                이렇게 검색해보세요.
              </div>
              <div className="mb-[10px]"></div>
              <div className="flex flex-col self-start">
                <div className="text-label-1-normal text-label-normal ml-[25px] mt-[5px]">
                  • 도로명 + 건물번호
                </div>
                <div className="text-caption-1 text-label-alternative ml-[33px] mt-[5px]">
                  {`예시) 서빙고로 17`}
                </div>
                <div className="text-label-1-normal text-label-normal ml-[25px] mt-[10px]">
                  • 지역명 + 번지
                </div>
                <div className="text-caption-1 text-label-alternative ml-[33px] mt-[5px]">
                  {`예시) 한강로2가 427`}
                </div>
                <div className="text-label-1-normal text-label-normal ml-[25px] mt-[10px]">
                  • 건물명(아파트명)
                </div>
                <div className="text-caption-1 text-label-alternative ml-[33px] mt-[5px]">
                  {`예시) 이촌동 코인 세탁소`}
                </div>
              </div>
            </>
          ) : loading ? (
            <div className="flex justify-center items-center w-full h-full">
              <ClipLoader color="#00A5A1" loading={loading} size={35} />
            </div>
          ) : (
            results.map((item) => (
              <div
                key={item.id}
                className="self-start py-[10px] ml-[20px] cursor-pointer"
                onClick={() => handleSelect(item.address)}
              >
                <div className="text-caption-1 font-medium text-primary-strong">
                  {item.serviceAvailable}
                </div>
                <div className="text-label-1-normal mt-[1px]">
                  {item.address}
                </div>
                <div className="flex items-center mt-[2px]">
                  <span className="border-[0.5px] px-[4px] py-[2px] text-caption-2 text-label-assistive rounded-[4px] text-center">
                    지번
                  </span>
                  <div className="text-caption-1 text-label-alternative ml-[5px]">
                    {item.detail}
                  </div>
                </div>
                <div className="mt-[16px]">
                  <BasicDivider
                    width="350px"
                    className="!bg-line-neutral"
                    variant="normal"
                    vertical={false}
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchActivePage;
