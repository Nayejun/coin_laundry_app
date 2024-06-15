import React from "react";

interface MarkerImgProps {
	onClick?: () => void;
}
const MyLocationMarkerImg = ({ onClick }: MarkerImgProps) => {
	return (
		<svg
			width="40"
			height="40"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g filter="url(#filter0_ddd_2071_7436)">
				<circle cx="12" cy="11" r="10" fill="#00A5A1" />
			</g>
			<path
				d="M17.625 10.5313V16.1563C17.625 16.2806 17.5756 16.3999 17.4877 16.4878C17.3998 16.5757 17.2806 16.6251 17.1562 16.6251H13.875C13.7507 16.6251 13.6315 16.5757 13.5435 16.4878C13.4556 16.3999 13.4062 16.2806 13.4062 16.1563V13.1094C13.4062 13.0473 13.3816 12.9877 13.3376 12.9437C13.2936 12.8997 13.234 12.8751 13.1719 12.8751H10.8281C10.766 12.8751 10.7064 12.8997 10.6624 12.9437C10.6184 12.9877 10.5938 13.0473 10.5938 13.1094V16.1563C10.5938 16.2806 10.5444 16.3999 10.4565 16.4878C10.3685 16.5757 10.2493 16.6251 10.125 16.6251H6.84375C6.71943 16.6251 6.6002 16.5757 6.51229 16.4878C6.42439 16.3999 6.375 16.2806 6.375 16.1563V10.5313C6.37512 10.2827 6.47396 10.0443 6.6498 9.86861L11.3373 5.18111C11.5131 5.00543 11.7515 4.90674 12 4.90674C12.2485 4.90674 12.4869 5.00543 12.6627 5.18111L17.3502 9.86861C17.526 10.0443 17.6249 10.2827 17.625 10.5313Z"
				fill="white"
			/>
			<defs>
				<filter
					id="filter0_ddd_2071_7436"
					x="0"
					y="0"
					width="24"
					height="24"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset />
					<feGaussianBlur stdDeviation="0.5" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
					/>
					<feBlend
						mode="normal"
						in2="BackgroundImageFix"
						result="effect1_dropShadow_2071_7436"
					/>
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset />
					<feGaussianBlur stdDeviation="0.5" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
					/>
					<feBlend
						mode="normal"
						in2="effect1_dropShadow_2071_7436"
						result="effect2_dropShadow_2071_7436"
					/>
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy="1" />
					<feGaussianBlur stdDeviation="1" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
					/>
					<feBlend
						mode="normal"
						in2="effect2_dropShadow_2071_7436"
						result="effect3_dropShadow_2071_7436"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect3_dropShadow_2071_7436"
						result="shape"
					/>
				</filter>
			</defs>
		</svg>
	);
};

export default MyLocationMarkerImg;
