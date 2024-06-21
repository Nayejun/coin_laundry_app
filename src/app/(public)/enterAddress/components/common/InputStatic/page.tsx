import React, { FC } from "react";

interface InputStaticProps {
  value: string;
}

const InputStatic: FC<InputStaticProps> = ({ value }) => {
  return (
    <div>
      <div className="flex items-center w-full max-w-[430px] h-[48px] px-[16px] py-[12px] rounded-md bg-[#F8F8FA] cursor-not-allowed">
        <input
          type="text"
          value={value}
          readOnly // Add this attribute to make the input read-only
          className="bg-[#F8F8FA] text-body-1-reading font-medium text-label-normal outline-none w-full"
        />
      </div>
    </div>
  );
};

export default InputStatic;
