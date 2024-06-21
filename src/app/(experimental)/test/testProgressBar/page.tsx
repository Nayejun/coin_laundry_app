import React from "react";
import ProgressBar from "@/components/progressbar/ProgressBar";

const ExampleComponent = () => {
	return (
		<div>
      <ProgressBar progress={0} />
			<ProgressBar progress={12.5} />
			<ProgressBar progress={25} />
			<ProgressBar progress={37.5} />
			<ProgressBar progress={50} />
			<ProgressBar progress={62.5} />
			<ProgressBar progress={75} />
			<ProgressBar progress={87.5} />
			<ProgressBar progress={100} />
		</div>
	);
};

export default ExampleComponent;