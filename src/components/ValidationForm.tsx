"use client";

import React, { useState, FC } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCircleCheck,
	faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import ActionButton from "@/components/ui/ActionButton"; // Importing ActionButton
import { ValidationFormWithTitleProps } from "@/lib/types";
// Define the validation schema using Yup
const validationSchema = Yup.object().shape({
	email: Yup.string().email("Invalid email address"),
	title: Yup.string(),
});

const ValidationFormWithTitle: FC<ValidationFormWithTitleProps> = ({
	hasTitle,
}) => {
	const [isTitleDisabled, setIsTitleDisabled] = useState(false);
	const [showMismatchError, setShowMismatchError] = useState(false);
	const {
		control,
		handleSubmit,
		formState: { errors },
		getValues,
	} = useForm({
		resolver: yupResolver(validationSchema),
		mode: "onTouched",
	});

	const onSubmit = (data: any) => {
		if (data.email === data.title) {
			setIsTitleDisabled(true);
			setShowMismatchError(false);
		} else {
			setIsTitleDisabled(false);
			setShowMismatchError(true);
		}
	};

	return (
		<div className="flex">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="w-full max-w-lg bg-white p-8 rounded-lg space-y-4"
			>
				<div className="relative">
					{hasTitle && (
						<label
							htmlFor="email"
							className="block text-gray-700 font-bold mb-2"
							style={{ fontSize: "14px" }}
						>
							이메일
						</label>
					)}
					<Controller
						name="email"
						control={control}
						defaultValue=""
						render={({ field }) => (
							<div className="relative">
								<input
									{...field}
									type="text"
									className={`border rounded w-[328px] h-[48px] py-[12px] px-[16px] focus:outline-none focus:shadow-outline ${
										errors.email
											? "border-red-500"
											: "border-gray-300"
									}`}
									style={{
										fontSize: "16px",
										color: "#171719", // Text color with 100% opacity
										borderColor: "rgba(112, 115, 124, 0.22)", // Border color with 22% opacity
										borderRadius: "10px",
									}}
								/>
							</div>
						)}
					/>
					{errors.email && errors.email.message && (
						<div className="text-red-500 text-xs mt-2">
							{errors.email.message}
						</div>
					)}
				</div>

				<div className="relative">
					{hasTitle && (
						<label
							htmlFor="title"
							className="block text-gray-700 font-bold mb-2"
							style={{ fontSize: "14px" }}
						>
							Title
						</label>
					)}
					<Controller
						name="title"
						control={control}
						defaultValue=""
						render={({ field }) => (
							<div className="relative">
								<input
									{...field}
									type="text"
									disabled={isTitleDisabled}
									className={`shadow appearance-none rounded w-[328px] h-[48px] py-[12px] px-[16px] focus:outline-none focus:shadow-outline ${
										isTitleDisabled
											? "bg-[#F8F8FA] text-[#171719] border-none cursor-not-allowed"
											: errors.title
											? "border-red-500"
											: getValues("title") === getValues("email")
											? "border-green-500"
											: "border-[#00BF40]"
									}`}
									style={{
										fontSize: "16px",
										backgroundColor: "#F8F8FA",
										borderWidth: "1px",
										borderRadius: "10px",
										...(isTitleDisabled && {
											border: "none",
											color: "#171719",
										}),
									}}
								/>
								{field.value &&
									!errors.title &&
									getValues("title") === getValues("email") &&
									!isTitleDisabled && (
										<FontAwesomeIcon
											icon={faCircleCheck}
											className="absolute right-3 top-1/2 transform -translate-y-1/2"
											style={{ fontSize: "14px", color: "#00BF40" }}
										/>
									)}
								{field.value &&
									!errors.title &&
									getValues("title") !== getValues("email") &&
									getValues("title") && (
										<FontAwesomeIcon
											icon={faCircleXmark}
											className="absolute right-3 top-1/2 transform -translate-y-1/2"
											style={{ fontSize: "14px", color: "#FF4242" }}
										/>
									)}
							</div>
						)}
					/>
					{errors.title &&
						errors.title.message &&
						!isTitleDisabled && (
							<div className="text-red-500 text-xs mt-2">
								{errors.title.message}
							</div>
						)}
					{showMismatchError && (
						<div
							className="text-red-500 text-xs mt-2"
							style={{ fontSize: "12px", color: "#FF4242" }}
						>
							The title must match
						</div>
					)}
				</div>

				<div className="flex items-center justify-center gap-4">
					<ActionButton
						label="확인"
						onClick={handleSubmit(onSubmit)}
					/>
				</div>
			</form>
		</div>
	);
};

export default ValidationFormWithTitle;
