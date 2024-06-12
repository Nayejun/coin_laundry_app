import InactiveLaundryPage from "@/app/(public)/beforeLogin/components/C-DetailedLaundryPageBeforeLogin/page";
import ChevronRightIconLarge from "@/assets/icons/others/chevron-right-large.svg";

const ContainerInactiveLaundryPage = () => {
	return (
		<div className="flex justify-center items-center bg-gray-50">
			<div className="w-[390px] bg-white flex flex-col justify-center items-center">
				<div className="w-[390px] mb-4">
					<div className="flex justify-between items-center">
						<div className="flex-1">
							<div className="flex items-center justify-between mt-[35px]">
								<h2 className="text-headline-1 font-semibold ml-[20px]">
									함께 세탁하고 할인받아요!
								</h2>
								<span className="mr-[20px] flex-shrink-0">
									<ChevronRightIconLarge className="w-[20px] h-[20px]" />
								</span>
							</div>
							<p className="text-label-1-normal font-medium text-label-alternative ml-[20px]">
								내 위치에서 가까운 사람들과 함께 세탁해 보세요
							</p>
						</div>
					</div>
				</div>
				<div className="flex justify-center items-center ml-[20px]">
					<div className="w-[286px]">
						<div className="flex">
							<InactiveLaundryPage />
						</div>
					</div>
					<div className="ml-[16px] w-[64px] overflow-hidden">
						<InactiveLaundryPage />
					</div>
				</div>
				<div className="h-[60px] bg-white"></div>
			</div>
		</div>
	);
};

export default ContainerInactiveLaundryPage;
