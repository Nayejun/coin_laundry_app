import React from "react";

import Alone from "@/assets/icons/userGuide/ico-serviceAlone.svg";
import Group from "@/assets/icons/userGuide/ico-serviceGroup.svg";
import Team from "@/assets/icons/userGuide/ico-serviceTeam.svg";

interface Box {
	name: string;
	disc: string;
	img: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
	className: string;
}

const ThreeServices = () => {
	const boxList: Box[] = [
		{
			name: "단독 세탁",
			disc: "배송도 세탁도 나 혼자",
			img: Alone,
			className: " w-[84px] h-[80px]",
		},
		{
			name: "알뜰 세탁",
			disc: "배송은 같이 세탁은 따로",
			img: Group,
			className: " w-[140px] h-[66px] my-2",
		},
		{
			name: "팀 세탁",
			disc: "배송도 세탁도 같이",
			img: Team,
			className: " w-[109px] h-[84px] ",
		},
	];

	return (
		<section className=" px-5">
			<div className="flex flex-row justify-center mt-12 mb-8">
				<span className="text-primary-normal text-2xl font-bold ">
					3가지
				</span>
				<p className="text-2xl font-bold pl-3">세탁 서비스</p>
			</div>
			<div className=" mb-12">
				{boxList.map((box, i) => (
					<div
						key={i}
						className=" border-2 border-line-solid-natural rounded-lg p-6 flex flex-row justify-between items-center mb-6"
					>
						<div className=" flex flex-col ">
							<p className="text-label-normal text-lg font-semibold">
								{box.name}
							</p>
							<p className="text-primary-strong text-sm">
								{box.disc}
							</p>
						</div>
						<box.img className={` ${box.className}`} />
					</div>
				))}
			</div>
		</section>
	);
};

export default ThreeServices;
