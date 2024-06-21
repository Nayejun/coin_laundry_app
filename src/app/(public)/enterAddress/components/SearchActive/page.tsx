"use client";
import React, { useEffect, useRef } from "react";
import SearchActiveSmall from "@/assets/icons/others/searchActiveSmall.svg"; // Adjust the path as necessary
import Cancel from "@/assets/icons/others/cancel.svg";
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

	const handleCancel = () => {
		if (inputRef.current && onChange) {
			const event = {
				target: { value: "" }
			} as React.ChangeEvent<HTMLInputElement>;
			onChange(event); // Trigger the onChange with an empty value
		}
	};

	return (
		<div className="flex items-center border rounded-md w-full max-w-[430px] h-[48px] px-[16px] py-[12px] bg-gray-100 border-cool-neutral-22">
			<button>
				<SearchActiveSmall className="mr-[12px]" />
			</button>
			<input
				type="text"
				placeholder="건물, 지번 또는 도로명 검색"
				className="input-common bg-background-normal-alternative text-label-normal w-full outline-none"
				ref={inputRef}
				value={value}
				onChange={onChange}
			/>
			<button onClick={handleCancel}>
				<Cancel className="w-[16px] h-[16px]"/>
			</button>
		</div>
	);
};

export default SearchActive;
