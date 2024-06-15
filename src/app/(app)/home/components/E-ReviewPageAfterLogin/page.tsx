"use client";
import React, { useState, useEffect } from "react";
import { Rate, Upload, Space, Input } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import ChevronDownIcon from "@/assets/icons/main/chevron-down.svg";
import ChevronUpIcon from "@/assets/icons/main/chevron-up.svg";
import StarIcon from "@/assets/icons/main/star-icon.svg"; // Adjust the path as necessary
import Image from "next/image";
import { ReviewProps } from "@/lib/types"; // Import the ReviewType type from the appropriate location

const { TextArea } = Input;

const ReviewPage = ({ isEditable }) => {
	const [isTextExpanded, setIsTextExpanded] = useState(false);
	const [rating, setRating] = useState<number>(0);
	const [loading, setLoading] = useState(true);
	const [reviewText, setReviewText] = useState("");
	const [uploadedImages, setUploadedImages] = useState([""]);

	useEffect(() => {
		// Simulate loading delay
		const timer = setTimeout(() => {
			setLoading(false);
			setRating(4.5); // Set actual rating after loading
			setReviewText(
				"이 어플을 알게 된 후 삶의 질이 올라갔어요! 주변에 세탁소가 없어서 드라이도 못했는데 이 어플 덕분에 문앞에서 바로 빨래를 받을 수 있어서 너무 좋았어요. 때에 찌든 옷을 맡겼는데 때가 싹 빠져서 너무 흐뭇했어요! 옷도 하나 서비스로 해주셨는데 감동이었습니다."
			);
			setUploadedImages([
				"/assets/images/laundry-pic-1.png",
				"/assets/images/laundry-pic-2.png",
				"/assets/images/laundry-pic-3.png",
				"/assets/images/laundry-pic-4.png",
			]);
		}, 0); // Adjust the delay as needed

		return () => clearTimeout(timer);
	}, []);

	const handleRatingChange = (value: number) => {
		setRating(value); // Update the ratings state with the new value
	};

	const handleTextChange = (
		e: React.ChangeEvent<HTMLTextAreaElement>
	) => {
		setReviewText(e.target.value);
	};

	const handleUpload = ({ fileList }) => {
		setUploadedImages(
			fileList.map((file) => URL.createObjectURL(file.originFileObj))
		);
	};

	const toggleTextExpansion = () => {
		setIsTextExpanded(!isTextExpanded);
	};

	const Text = (
		<span className="text-label-2 font-medium text-label-neutral">
			{reviewText.slice(0, 60)}...
		</span>
	);
	const fullText = (
		<span className="text-label-2 font-medium text-label-neutral">
			{reviewText}
		</span>
	);

	const StarSkeleton = () => (
		<div className="flex items-center space-x-[8px]">
			{[...Array(5)].map((_, i) => (
				<StarIcon key={i} className="w-5 h-5 text-gray-300" />
			))}
		</div>
	);

	return (
		<div
			className="p-4 bg-white rounded-md border mx-auto relative border-line-neutral"
			style={{ width: "350px" }}
		>
			<div className="flex justify-between items-start">
				<div className="flex flex-col">
					<div className="flex items-center  mb-1">
						<Space size="middle">
							{loading ? (
								<StarSkeleton />
							) : isEditable ? (
								<Rate
									allowHalf
									defaultValue={rating}
									onChange={handleRatingChange}
									style={{ color: "#ffc107", fontSize: "20px" }}
								/>
							) : (
								<Rate
									allowHalf
									disabled
									value={rating}
									style={{ color: "#ffc107", fontSize: "20px" }}
								/>
							)}
						</Space>
					</div>
					<div className="">idf*****</div>
				</div>
				<div className="text-label-alternative text-caption-2">
					2024.05.01
				</div>
			</div>
			<div className="mt-2 text-label-alternative text-caption-1">
				마포구 세탁소123 ∙ 팀 세탁
			</div>

			{isEditable ? (
				<TextArea
					value={reviewText}
					onChange={handleTextChange}
					className="mt-2"
					rows={4}
				/>
			) : (
				<div className="mt-2 flex">
					<div className="flex-1">
						{isTextExpanded ? fullText : Text}
						<button onClick={toggleTextExpansion}>
							{isTextExpanded ? (
								<ChevronUpIcon className="w-4 h-4 inline ml-1" />
							) : (
								<ChevronDownIcon className="w-4 h-4 inline ml-1" />
							)}
						</button>
					</div>
					{!isTextExpanded && uploadedImages.length > 0 && (
						<div
							className={`relative w-20 h-20 ml-4 cursor-pointer ${
								!uploadedImages[0] ? "bg-[#F7F7F8]" : ""
							}`}
							onClick={toggleTextExpansion}
						>
							{uploadedImages[0] && (
								<Image
									src={uploadedImages[0]}
									alt="First uploaded image"
									layout="fill"
									objectFit="cover"
									className="bg-[#F7F7F8]"
								/>
							)}
							<div className="absolute bottom-0 right-0 bg-gray-800 text-white text-xs flex items-center justify-center w-6 h-6 rounded-md">
								{uploadedImages.length}
							</div>
						</div>
					)}
				</div>
			)}

			{isEditable && (
				<Upload
					listType="picture-card"
					fileList={uploadedImages.map((url, index) => ({
						uid: index.toString(),
						name: `image-${index}`,
						status: "done",
						url,
					}))}
					onChange={handleUpload}
					beforeUpload={() => false}
					multiple
				>
					{uploadedImages.length < 8 && "+ Upload"}
				</Upload>
			)}

			{isTextExpanded && uploadedImages.length > 0 && (
				<div
					className="mt-2 overflow-x-auto"
					style={{ whiteSpace: "nowrap" }}
				>
					<div className="flex">
						{uploadedImages.map((src, index) => (
							<div
								key={index}
								className="relative w-[100px] h-[80px] bg-gray-100"
								style={{
									flexShrink: 0,
									marginRight: index === 3 ? "10px" : "0",
								}}
							>
								<Image
									src={src}
									alt={`Uploaded image ${index + 1}`}
									layout="fill"
									objectFit="cover"
								/>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default ReviewPage;
