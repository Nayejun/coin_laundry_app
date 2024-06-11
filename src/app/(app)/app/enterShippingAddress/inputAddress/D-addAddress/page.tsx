"use client";
import React, { FC, useState } from "react";
import { useRouter } from "next/navigation";
import SearchStaticPage from "@/app/(app)/app/enterShippingAddress/components/SearchStaticPage/page";

const Page: FC = ({}) => {


	return (
		<div>
			<SearchStaticPage />
		</div>
	);
};

export default Page;
