import React, { FC } from "react";

interface InputStaticProps {
  value: string;
}

const InputStatic: FC<InputStaticProps> = ({ value }) => {
  return (
    <div>
      <div className="flex items-center rounded-[10px] w-[342px] h-[48px] px-[16px] py-[12px] bg-[#F8F8FA] cursor-not-allowed">
        <input
          type="text"
          value={value}
          className="bg-transparent text-body-2-normal text-label-normal outline-none w-full"
          disabled
        />
      </div>
    </div>
  );
};

export default InputStatic;
