"use client";
import React, { useState, useEffect } from 'react';
import RadioSmallActive from '@/assets/icons/others/radioSmallActive.svg';
import RadioSmallInactive from '@/assets/icons/others/radioSmallInactive.svg';
import EnterPlaceholderSmaller from '@/app/(app)/app/enterShippingAddress/components/EnterPlaceHolderSmaller/page';
import InfoIcon from '@/assets/icons/others/information.svg';

interface CustomRadioButtonProps {
  id: string;
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: () => void;
}

const CustomRadioButton: React.FC<CustomRadioButtonProps> = ({
  id,
  name,
  value,
  label,
  checked,
  onChange,
}) => {
  return (
    <label htmlFor={id} className={`flex items-center cursor-pointer ${checked ? 'text-body-2-normal font-medium' : 'text-body-2-normal text-label-assistive'}`}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      {checked ? (
        <RadioSmallActive width={24} height={24} className="mr-2 inline-block align-middle" />
      ) : (
        <RadioSmallInactive width={24} height={24} className="mr-2 inline-block align-middle" />
      )}
      <span className="inline-block align-middle mt-[2px]">{label}</span>
    </label>
  );
};

const EntryMethod: React.FC = () => {
  const [entryMethod, setEntryMethod] = useState<string>('공동현관 비밀번호');
  const [entryInput, setEntryInput] = useState<string>(localStorage.getItem("entryInput") || '');

  useEffect(() => {
    localStorage.setItem("entryMethod", entryMethod);
    localStorage.setItem("entryInput", "");
    setEntryInput("");
  }, [entryMethod]);

  useEffect(() => {
    localStorage.setItem("entryInput", entryInput);
  }, [entryInput]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEntryInput(e.target.value);
  };

  return (
    <>
      <div className="text-body-2-normal mb-4">
        <CustomRadioButton
          id="password"
          name="entry-method"
          value="password"
          label="공동현관 비밀번호"
          checked={entryMethod === '공동현관 비밀번호'}
          onChange={() => setEntryMethod('공동현관 비밀번호')}
        />
        {entryMethod === '공동현관 비밀번호' && (
          <div className="mt-2 ml-[28px]">
            <EnterPlaceholderSmaller
              id="password-input"
              placeholder="예) 종 1234 열쇠"
              value={entryInput}
              onChange={handleInputChange}
            />
            <div className="flex items-center text-caption-2 font-medium mt-[8px]">
              <InfoIcon className="ml-[8px] mr-[4px]"/>
              입력한 방법으로 출입이 불가능한 경우, 수거/배송이 어렵습니다.
            </div>
          </div>
        )}
      </div>
      <div className="mb-4">
        <CustomRadioButton
          id="free-access"
          name="entry-method"
          value="free-access"
          label="자유출입 가능 (공동현관 없음)"
          checked={entryMethod === '자유출입 가능 (공동현관 없음)'}
          onChange={() => setEntryMethod('자유출입 가능 (공동현관 없음)')}
        />
      </div>
      <div className="mb-4">
        <CustomRadioButton
          id="guard-call"
          name="entry-method"
          value="guard-call"
          label="경비실 호출"
          checked={entryMethod === '경비실 호출'}
          onChange={() => setEntryMethod('경비실 호출')}
        />
      </div>
      <div className="mb-4">
        <CustomRadioButton
          id="house-call"
          name="entry-method"
          value="house-call"
          label="세대 호출"
          checked={entryMethod === '세대 호출'}
          onChange={() => setEntryMethod('세대 호출')}
        />
      </div>
      <div className="mb-4">
        <CustomRadioButton
          id="other"
          name="entry-method"
          value="other"
          label="기타"
          checked={entryMethod === '기타'}
          onChange={() => setEntryMethod('기타')}
        />
        {entryMethod === '기타' && (
          <div className="mt-2 ml-[28px]">
            <EnterPlaceholderSmaller
              id="other-input"
              placeholder="예) 뒤쪽 문은 항상 열려있습니다"
              value={entryInput}
              onChange={handleInputChange}
            />
            <div className="flex items-center text-caption-2 font-medium mt-[8px]">
              <InfoIcon className="ml-[8px] mr-[4px]"/>
              입력한 방법으로 출입이 불가능한 경우, 수거/배송이 어렵습니다.
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default EntryMethod;
