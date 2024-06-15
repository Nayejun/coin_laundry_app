import React from "react";

export type CTAButtonProps = {
	buttonWidth?: string;
	buttonHeight?: string;
	buttonColor?: string;
	borderColor?: string;
	borderThickness?: string;
	borderRadius?: string;
	buttonText?: string;
	buttonTextSize?: string;
	buttonTextColor?: string;
	buttonTextWeight?: number;
	onClick?: () => void;
	disabled?: boolean;
};

const CTAButtonSmall: React.FC<CTAButtonProps> = ({
	buttonWidth = "140px",
	buttonHeight = "52px",
	buttonColor,
	borderColor,
	borderThickness,
	borderRadius = "8px",
	buttonText,
	buttonTextSize = "16px",
	buttonTextWeight = 600,
	buttonTextColor,
	disabled = false,
	onClick,
}) => {
	return (
		<button
			style={{
				width: buttonWidth,
				height: buttonHeight,
				backgroundColor: buttonColor,
				borderColor: borderColor,
				borderWidth: borderThickness,
				borderRadius: borderRadius,
				fontSize: buttonTextSize,
				fontWeight: buttonTextWeight,
				color: buttonTextColor,
			}}
			disabled={disabled}
			onClick={onClick} // Attach onClick handler here
			className="flex items-center justify-center"
		>
			{buttonText}
		</button>
	);
};

export default CTAButtonSmall;
