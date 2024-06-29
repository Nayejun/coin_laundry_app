import React from "react";

interface MarkerImgProps {
	onClick?: () => void;
}
const LaundryRoomMarkerImg = ({ onClick }: MarkerImgProps) => {
	return (
		<svg
			width="32"
			height="32"
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				x="0.5"
				y="0.5"
				width="31"
				height="31"
				rx="15.5"
				fill="#212225"
			/>
			<rect
				x="0.5"
				y="0.5"
				width="31"
				height="31"
				rx="15.5"
				stroke="#AEB0B6"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M9.33331 10.1071C9.33331 9.6809 9.50891 9.27212 9.82147 8.97072C10.134 8.66932 10.558 8.5 11 8.5H21C21.442 8.5 21.8659 8.66932 22.1785 8.97072C22.4911 9.27212 22.6666 9.6809 22.6666 10.1071V11.1582H9.33331V10.1071ZM9.33331 12.4975V21.8929C9.33331 22.3191 9.50891 22.7279 9.82147 23.0293C10.134 23.3307 10.558 23.5 11 23.5H21C21.442 23.5 21.8659 23.3307 22.1785 23.0293C22.4911 22.7279 22.6666 22.3191 22.6666 21.8929V12.4975H9.33331ZM11.9911 17.6071C11.9915 17.1685 12.0689 16.733 12.22 16.3193C12.5546 15.4058 13.2325 14.6467 14.1198 14.1922C15.007 13.7377 16.0388 13.6209 17.0111 13.8649C17.9834 14.1089 18.8252 14.6959 19.3701 15.5099C19.915 16.3238 20.1232 17.3053 19.9535 18.2602C19.7838 19.215 19.2485 20.0737 18.4537 20.6662C17.6589 21.2587 16.6623 21.542 15.6613 21.4599C14.6602 21.3778 13.7276 20.9363 13.0479 20.2229C12.3683 19.5094 11.9911 18.5759 11.9911 17.6071ZM13.2244 17.2857C13.2462 17.1608 13.3132 17.0474 13.4135 16.9656C13.5138 16.8838 13.6409 16.8389 13.7722 16.8389H14.1655C15.0155 16.8389 15.5133 17.0393 15.9611 17.2182L16.0278 17.245C16.4466 17.4132 16.87 17.5707 17.7066 17.5707H18.2589C18.3395 17.5707 18.4192 17.5877 18.4923 17.6204C18.5655 17.6531 18.6304 17.7008 18.6825 17.7602C18.7346 17.8195 18.7727 17.8891 18.7942 17.964C18.8156 18.039 18.8199 18.1176 18.8066 18.1943C18.6693 18.8969 18.2515 19.5195 17.6432 19.9282C17.0348 20.337 16.2845 20.4993 15.5534 20.3803C14.8222 20.2613 14.1687 19.8705 13.7332 19.2919C13.2977 18.7132 13.1151 17.9929 13.2244 17.2857Z"
				fill="#AEB0B6"
			/>
		</svg>
	);
};

export default LaundryRoomMarkerImg;
