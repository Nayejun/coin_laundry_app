"use client";
import React, { useState } from "react";
import ArrowDownIcon from "@/assets/icons/others/chevron-down-small.svg"; // Import your custom arrow icon
import CheckMarkIcon from "@/assets/icons/others/check-mark-icon.svg"; // Import your check mark icon

interface CustomSelectProps {
	id: string;
	value: string;
	onChange: (e: React.ChangeEvent<{ value: string }>) => void;
	options: { value: string; label: string }[];
}

const CustomSelect: React.FC<CustomSelectProps> = ({
	id,
	value,
	onChange,
	options,
}) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleSelect = (optionValue: string) => {
		onChange({ target: { value: optionValue } } as React.ChangeEvent<{
			value: string;
		}>);
		setIsOpen(false);
	};

	return (
		<div
			className="relative inline-block w-full cursor-pointer"
			onClick={() => setIsOpen(!isOpen)}
		>
			<div className="flex justify-between items-center border border-gray-300 rounded-md px-1 py-2">
				<span
					className={`${
						value === "default"
							? "text-body-2-reading font-semibold text-label-neutral"
							: "text-body-2-reading font-semibold text-label-neutral"
					} ml-[10px]`}
				>
					{options.find((option) => option.value === value)?.label}
				</span>
				<ArrowDownIcon
					className={`w-4 h-4 mr-[12px] transition-transform ${
						isOpen ? "transform rotate-180" : ""
					}`}
				/>
			</div>
			{isOpen && (
				<div className="absolute top-full left-0 right-0 bg-white border border-gray-300 z-10 max-h-48 overflow-y-auto rounded-md">
					{options.map((option) => (
						<div
							key={option.value}
							className={`pl-[12px] py-[10px] text-body-2-reading ${
								option.value === value
									? "text-primary-normal flex items-center bg-primary-color-cyan-50"
									: "text-label-assistive"
							}`}
							onClick={() => handleSelect(option.value)}
						>
							{option.label}
							{option.value === value && (
								<CheckMarkIcon className="absolute right-[16px] w-3 h-3" />
							)}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default CustomSelect;
