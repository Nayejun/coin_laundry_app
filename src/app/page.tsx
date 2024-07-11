// src/pages/index.tsx
"use client";
import React from "react";
import { useAuth } from "@/context/AuthContext";
import BeforeLoginHomePage from "@/app/(public)/beforeLogin/page";
import AfterLoginHomePage from "@/app/(app)/home/page";

export default function HomePage() {
	const { isLoggedin } = useAuth();

	console.log("HomePage rendered");
	console.log("isLoggedin:", isLoggedin);

	return (
		<div>
			{isLoggedin ? (
				<AfterLoginHomePage />
			) : (
				<BeforeLoginHomePage />
			)}
		</div>
	);
}
