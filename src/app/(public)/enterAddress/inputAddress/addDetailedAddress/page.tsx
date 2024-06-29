"use client";
import React, { FC, useState } from "react";
import { useRouter } from "next/navigation";
import DetailedAddress from "@/app/(public)/enterAddress/components/details/DetailedAddress/page";

const AddDetailedAddress: FC = ({}) => {
	return (
		<div>
			<DetailedAddress />
		</div>
	);
};

export default AddDetailedAddress;
