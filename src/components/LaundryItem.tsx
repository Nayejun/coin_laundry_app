// src/components/LaundryItem.tsx
import React from 'react';

type ItemProps = {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  iconContainerStyle?: string;
};

const LaundryItem: React.FC<ItemProps> = ({ icon, title, description, iconContainerStyle }) => {
  return (
    <div className="flex flex-col bg-white rounded-xl text-center w-[165px] h-[165px]">
      <button className="flex flex-col items-center my-[30px]">
        <div className={iconContainerStyle}>
          {icon}
          <div className="h-[12px]"></div>
        </div>
        <h3 className="text-headline-2 font-semibold">{title}</h3>
        <div className="text-label-alternative font-medium text-caption-1 whitespace-pre-line">
          {description}
        </div>
      </button>
    </div>
  );
};

export default LaundryItem;
