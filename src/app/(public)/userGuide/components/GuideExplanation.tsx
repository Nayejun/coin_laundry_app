import Image from "next/image";
import React from "react";

import mainIco from "@/assets/icons/userGuide/ico-UserGuide.png";

const GuideExplanation = () => {
	return (
		<section className=" flex flex-col w-full py-12 px-5 ">
			<div className="text-center text-label-neutral mb-4">
				<p>코인 세탁소에서 하염없이 기다리느라 지루하셨죠?</p>
				<p>이제 저희가 배송해드릴게요.</p>
			</div>
			<Image src={mainIco} alt="main icon" width={400} height={400} />
		</section>
	);
};

export default GuideExplanation;
