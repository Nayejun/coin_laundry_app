"use client";
import React, { FC, useState } from "react";
import SearchInactivePage from "@/app/(public)/enterAddress/components/search/SearchInactivePage/page"; // Import the new component
import SearchActivePage from "@/app/(public)/enterAddress/components/search/SearchActivePage/page";
import { useRouter } from "next/navigation";

const SearchToggle: FC = ({}) => {
	const [isActive, setIsActive] = useState(false);
	const router = useRouter(); // Initialize the router

	const handleActivate = () => {
		setIsActive(true);
	};

	return (
		<div>
			
				{!isActive ? (
					<SearchInactivePage handleActivate={handleActivate} />
				) : (
					<SearchActivePage />
				)}
			
		</div>
	);
};

export default SearchToggle;
