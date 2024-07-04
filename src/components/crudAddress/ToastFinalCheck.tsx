// src/components/crudAddress/Toast.tsx
"use client";
import React from 'react';
import GreenCheckIcon from "@/assets/icons/editAddress/green-check.svg";

interface ToastProps {
  message: string;
  show: boolean;
}

const Toast: React.FC<ToastProps> = ({ message, show }) => {
  return (
    <div className={`fixed top-0 px-[16px] w-full max-w-[430px] left-1/2 transform -translate-x-1/2 transition-all duration-300 ${show ? 'opacity-100 translate-y-[24px]' : 'opacity-0 -translate-y-full'}`}>
    
      <div className="flex items-center bg-green-500 text-white text-sm font-medium px-[16px] py-[12px] rounded-lg shadow-md">
        <GreenCheckIcon width="18px" height="18px" className="mr-[12px]"/>
        &nbsp;
        {message}
      </div>
    </div>
  );
};

export default Toast;