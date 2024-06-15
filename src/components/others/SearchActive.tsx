import React, { useEffect, useRef } from "react";
import SearchActiveSmall from "@/assets/icons/others/searchActiveSmall.svg"; // Adjust the path as necessary
import "@/app/global.css";

interface SearchActiveProps {
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchActive: React.FC<SearchActiveProps> = ({
	value,
	onChange,
}) => {
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}, []);

	return (
		<div className="flex items-center border rounded-[10px] w-[342px] h-[48px] px-[16px] py-[12px] bg-gray-100 border-cool-neutral-22">
			<button>
				<SearchActiveSmall className="mr-[12px]" />
			</button>
			<input
				type="text"
				placeholder="건물, 지번 또는 도로명 검색"
				className="input-common bg-background-normal-alternative text-black w-full outline-none"
				ref={inputRef}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};

export default SearchActive;
