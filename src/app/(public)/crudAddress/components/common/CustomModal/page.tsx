"use client";
import React from 'react';
import { Portal } from 'react-portal';

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children?: React.ReactNode;
  onConfirm: () => void;
}

const CustomModal: React.FC<CustomModalProps> = ({ isOpen, onClose, title, children, onConfirm }) => {
  if (!isOpen) {
    return null;
  }

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <Portal>
      <div onClick={handleClickOutside} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-static-white p-[12px] rounded-xl shadow-lg w-full max-w-[318px]">
          <div className="text-headline-1 font-semibold mb-[55px] mt-[55px] text-center">{title}</div>
          {/* <div className="mb-4">{children}</div> */}
          <div className="flex justify-center items-center">
            <button onClick={onClose} className="flex items-center justify-center text-center w-full max-w-[129px] h-full max-h-[52px] px-[24px] py-[20px] shadow-elevation-shadow-normal rounded-lg mr-[20px] text-body-1-normal font-semibold">취소</button>
            <button onClick={onConfirm} className="flex items-center justify-center text-center w-full max-w-[129px] h-full max-h-[52px] px-[24px] py-[20px] bg-primary-normal text-white rounded-lg text-body-1-normal font-semibold">확인</button>
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default CustomModal;
