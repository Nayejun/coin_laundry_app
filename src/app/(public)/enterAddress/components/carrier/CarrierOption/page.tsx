"use client";
import React, { useState, useEffect } from "react";
import CustomSelect from "@/app/(public)/enterAddress/components/carrier/CustomSelect/page"; // Adjust the path as needed
import { Option } from "@/lib/types"; // Adjust the path as needed
import EnterPlaceholder from "@/app/(public)/enterAddress/components/common/EnterPlaceholder/page";

const CarrierOption: React.FC = () => {
	const [carrierOption, setCarrierOption] = useState<string>("");
	const [carrierInput, setCarrierInput] = useState<string>("");

	useEffect(() => {
		if (typeof window !== "undefined") {
			setCarrierOption(
				localStorage.getItem("carrierOption") ||
					"문 앞에 놓아 주세요"
			);
			setCarrierInput(
				localStorage.getItem("carrierInput") || ""
			);
		}
	}, []);

	useEffect(() => {
		if (typeof window !== "undefined") {
			localStorage.setItem("carrierOption", carrierOption);

			if (carrierOption !== "직접 입력") {
				localStorage.setItem("carrierInput", "");
				setCarrierInput("");
			}
		}
	}, [carrierOption]);

	useEffect(() => {
		if (
			typeof window !== "undefined" &&
			carrierOption === "직접 입력"
		) {
			localStorage.setItem("carrierInput", carrierInput);
		}
	}, [carrierInput, carrierOption]);

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setCarrierInput(e.target.value);
	};

	const options: Option[] = [
		"문 앞에 놓아 주세요",
		"경비실에 맡겨 주세요",
		"택배함에 넣어 주세요",
		"직접 입력",
	].map((option) => ({ value: option, label: option }));

	return (
		<div>
			<div className="mt-[16px] text-label-1-normal mb-[8px]">
				캐리어 님께
			</div>
			<div className="mb-[40px]">
				<CustomSelect
					id="carrier-options"
					value={carrierOption}
					onChange={(e: React.ChangeEvent<{ value: string }>) =>
						setCarrierOption(e.target.value)
					}
					options={options}
				/>
				{carrierOption === "직접 입력" && (
					<div className="mt-[12px]">
						<EnterPlaceholder
							type="text"
							id="carrier-custom-input"
							placeholder="직접 입력해 주세요"
							value={carrierInput}
							onChange={handleInputChange}
							
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default CarrierOption;
