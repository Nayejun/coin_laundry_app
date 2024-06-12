"use client";
import React, { FC, useState } from "react";
import { useRouter } from "next/navigation";
import SearchStaticPage from "@/app/(public)/enterAddress/components/SearchStaticPage/page";

const AddAddress: FC = ({}) => {
	return (
		<div>
			<SearchStaticPage />
		</div>
	);
};

export default AddAddress;
