import React from "react";

const InputCommon = ({ placeholder }) => {
	return (
		<div>
			<div
				className="flex items-center border rounded-[10px] w-[342px] h-[48px] px-[16px] py-[12px] bg-[#FFF] border-line-normal"
			>
				<input
					type="text"
					placeholder={placeholder}
					className="input-common bg-[#FFF] text-black font-normal w-full outline-none"
				/>
			</div>
		</div>
	);
};

export default InputCommon;
