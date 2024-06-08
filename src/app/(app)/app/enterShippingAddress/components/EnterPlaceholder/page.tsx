import React, { FC } from "react";

interface EnterPlaceholderProps {
  id?: string;
  placeholder: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const EnterPlaceholder: FC<EnterPlaceholderProps> = ({ id, placeholder, disabled }) => {
  return (
    <div>
      <div className={`flex items-center border rounded-[10px] w-[342px] h-[48px] px-[16px] py-[12px] ${disabled ? 'bg-gray-200 border-gray-400 cursor-not-allowed' : 'bg-[#FFF] border-line-normal'}`}>
        <input
          id={id}
          type="text"
          placeholder={placeholder}
          className="bg-transparent text-label-assistive font-normal w-full outline-none"
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default EnterPlaceholder;
