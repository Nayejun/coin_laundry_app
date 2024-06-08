"use client";
import React, { FC, useState } from "react";
import SearchInactivePage from "@/app/(app)/app/enterShippingAddress/components/SearchInactivePage/page"; // Import the new component
import SearchActivePage from "@/app/(app)/app/enterShippingAddress/components/SearchActivePage/page";
import { useRouter } from "next/navigation";

const Page: FC = ({}) => {
	const [isActive, setIsActive] = useState(false);

	const router = useRouter(); // Initialize the router
  
  const handleBackNavigation = () => {
    router.push("/"); // Navigate to the previous page
  };

	const handleActivate = () => {
		setIsActive(true);
	};

	return (
		<div>
			<div className="flex justify-center items-center bg-gray-50">
				{!isActive ? (
					<SearchInactivePage
						handleBackNavigation={handleBackNavigation}
						handleActivate={handleActivate}
					/>
				) : (
					<SearchActivePage />
				)}
			</div>
		</div>
	);
};

export default Page;
