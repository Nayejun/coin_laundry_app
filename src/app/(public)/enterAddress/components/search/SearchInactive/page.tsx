import React, { FC } from "react";
import SearchInactiveSmall from "@/assets/icons/others/searchInactiveSmall.svg"; // Adjust the path as necessary

interface SearchInactiveProps {
  onClick: () => void;
  onClickDetail: () => void;
}

const SearchInactive: FC<SearchInactiveProps> = ({ onClick, onClickDetail }) => {
  return (
    <div>
      <div
        className="flex items-center border rounded-md w-full max-w-[430px] h-[48px] px-[16px] py-[12px] text-body-1-reading mb-[8px]"
        onClick={onClick}
      >
        <SearchInactiveSmall className="mr-[12px]" />
        <input
          type="text"
          placeholder="건물, 지번 또는 도로명 검색"
          className="bg-transparent text-body-1-reading text-label-normal font-normal w-full outline-none"
        />
      </div>
      <div
        className="flex items-center border rounded-md w-full max-w-[430px] h-[48px] px-[16px] py-[12px] text-body-1-reading"
      >
        <input
          type="text"
          placeholder="상세 주소 입력"
          className="bg-transparent text-body-1-reading text-label-normal font-normal w-full outline-none"
          onClick={onClickDetail}
        />
      </div>
    </div>
  );
};

export default SearchInactive;
