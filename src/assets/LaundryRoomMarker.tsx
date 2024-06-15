import React from "react";

interface MarkerImgProps {
	onClick?: () => void;
}
const LaundryRoomMarkerImg = ({ onClick }: MarkerImgProps) => {
	return (
		<svg
			width="40"
			height="40"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			onClick={onClick}
		>
			<g filter="url(#filter0_ddd_2071_7440)">
				<circle cx="12" cy="11" r="10" fill="black" />
			</g>
			<path
				d="M7 7.55319V16.1677C7 16.543 7.31718 17 7.70769 17H16.2251C16.6146 17 17 16.543 17 16.1677V7.55319H7ZM11.9897 14.3896C10.4872 14.3896 9.26897 13.2167 9.26897 11.7693C9.26897 10.3219 10.4872 9.14894 11.9897 9.14894C13.4923 9.14894 14.7105 10.3219 14.7105 11.7693C14.7105 13.2169 13.4923 14.3896 11.9897 14.3896ZM16.2251 5H7.70769C7.31718 5 7 5.26374 7 5.63957V7.04255H17V5.63957C17 5.26374 16.6146 5 16.2251 5ZM10.3333 6.53191H7.51282V5.51064H10.3333V6.53191ZM15.2426 6.46043C14.9223 6.46043 14.6636 6.21047 14.6636 5.90179C14.6636 5.59362 14.9223 5.34366 15.2426 5.34366C15.5628 5.34366 15.8223 5.59362 15.8223 5.90179C15.8221 6.21021 15.5628 6.46043 15.2426 6.46043Z"
				fill="white"
			/>
			<defs>
				<filter
					id="filter0_ddd_2071_7440"
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
						result="effect1_dropShadow_2071_7440"
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
						in2="effect1_dropShadow_2071_7440"
						result="effect2_dropShadow_2071_7440"
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
						in2="effect2_dropShadow_2071_7440"
						result="effect3_dropShadow_2071_7440"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect3_dropShadow_2071_7440"
						result="shape"
					/>
				</filter>
			</defs>
		</svg>
	);
};

export default LaundryRoomMarkerImg;
