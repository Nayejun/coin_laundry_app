import EntryMethod from "@/app/(public)/enterAddress/components/EntryMethod/page";
import CarrierOption from "@/app/(public)/enterAddress/components/CarrierOption/page";

export default function DeliveryMethodContainer() {
	return (
		<div className="p-[24px]">
			<div className="text-headline-1 font-semibold mb-[6px]">
				공동현관 출입 방법
			</div>
			<div className="text-label-1-reading text-label-alternative font-normal mb-[20px]">
				입력된 공동현관 비밀번호는 새벽 배송을 위해 필요한 정보로,{" "}
				<br />
				서비스 이용 후 파기됨을 약속드립니다.
			</div>
			<EntryMethod />
			<CarrierOption />
		</div>
	);
}
