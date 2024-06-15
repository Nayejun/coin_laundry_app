import React from "react";
import SearchInactiveSmall from "@/assets/icons/others/searchInactiveSmall.svg"; // Adjust the path as necessary

const SearchInactive = ({ onClick, onClickDetail }) => {
	return (
		<div>
			<div
				className="flex items-center border rounded-[10px] w-[342px] h-[48px] px-[16px] py-[12px] bg-[#FFF] border-line-normal"
				onClick={onClick}
			>
				<SearchInactiveSmall className="mr-[12px]" />
				<input
					type="text"
					placeholder="건물, 지번 또는 도로명 검색"
					className="input-common bg-[#FFF] text-black w-full outline-none"
					
				/>
			</div>
      <div
				className="flex items-center border rounded-[10px] w-[342px] h-[48px] mt-[8px] px-[16px] py-[12px] bg-[#FFF] border-line-normal"
			>
				<input
					type="text"
					placeholder="상세 주소 입력"
					className="input-common bg-[#FFF] text-black w-full outline-none"
					onClick={onClickDetail}
				/>
			</div>
		</div>
	);
};

export default SearchInactive;
