"use client";
import React, { useState } from "react";

interface CustomPhoneInputProps {
	value: string;
	onChange: (value: string) => void;
}

const CustomPhoneInput: React.FC<CustomPhoneInputProps> = ({ value, onChange }) => {
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		let inputValue = e.target.value.replace(/[^0-9]/g, ""); // Remove all non-numeric characters

		if (inputValue.length > 3 && inputValue.length <= 7) {
			inputValue = `${inputValue.slice(0, 3)}-${inputValue.slice(3)}`;
		} else if (inputValue.length > 7) {
			inputValue = `${inputValue.slice(0, 3)}-${inputValue.slice(3, 7)}-${inputValue.slice(7, 11)}`;
		}

		onChange(inputValue);
	};

	return (
		<input
			type="text"
			value={value}
			onChange={handleInputChange}
			placeholder="전화번호를 입력해 주세요"
			className="border border-line-normal text-body-1-normal rounded-md px-[16px] py-[12px] w-full max-w-[430px] outline-none"
		/>
	);
};

export default CustomPhoneInput;
