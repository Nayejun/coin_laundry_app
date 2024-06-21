// Progess bar component for the laundry app
// usage: <ProgressBar progress={12.5} />
// progress: number; // Progress as a percentage (e.g., 12.5, 25, 37.5, etc.)

import React from "react";

type ProgressBarProps = {
	progress: number; // Progress as a percentage (e.g., 12.5, 25, 37.5, etc.)
};

const ProgressBar: React.FC<ProgressBarProps> = ({
	progress,
}) => {
	const totalSegments = 8;
	const filledSegments = Math.round(
		(progress / 100) * totalSegments
	);
	const segments = Array.from(
		{ length: totalSegments },
		(_, i) => i < filledSegments
	);

	return (
		<div>
			<div className="mt-[8px] mb-[10px] mx-[20px]">
				<div className="flex">
					{segments.map((isFilled, index) => (
						<div
							key={index}
							className={`w-full max-w-[48.75px] h-[8px] ${
								isFilled
									? "bg-primary-normal"
									: "bg-label-disable"
							} ${index === 0 ? "rounded-l-full" : ""} ${
								index === totalSegments - 1
									? "rounded-r-full"
									: ""
							}`}
						></div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProgressBar;
