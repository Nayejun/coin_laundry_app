"use client";
import React, { FC, useState } from "react";
import SearchInactivePage from "@/app/(public)/enterAddress/components/SearchInactivePage/page"; // Import the new component
import SearchActivePage from "@/app/(public)/enterAddress/components/SearchActivePage/page";
import { useRouter } from "next/navigation";

const SearchToggle: FC = ({}) => {
	const [isActive, setIsActive] = useState(false);
	const router = useRouter(); // Initialize the router

	const handleActivate = () => {
		setIsActive(true);
	};

	return (
		<div>
			<div className="flex justify-center items-center bg-gray-50">
				{!isActive ? (
					<SearchInactivePage handleActivate={handleActivate} />
				) : (
					<SearchActivePage />
				)}
			</div>
		</div>
	);
};

export default SearchToggle;
