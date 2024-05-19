"use client";

import React, { useState, FC } from "react";
import ActionButton from "@/components/ui/actionButton";
import { TabProps, DisabledContentProps } from "@/lib/types";

const ActionPage: FC<{ color: string }> = ({ color }) => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className="flex justify-center items-center h-40">
      <ActionButton label="행동" onClick={handleClick} disabled={false} color={color} />
    </div>
  );
};

const DisabledContent: FC<DisabledContentProps> = ({ color }) => {
  return (
    <div className="flex justify-center items-center h-40" style={{ backgroundColor: color }}>
      <p className="text-white">라벨 페이지</p>
    </div>
  );
};

const tabs: TabProps[] = [
  { label: "라벨", content: <ActionPage color="#13C2C2" /> },
  { label: "라벨", content: <ActionPage color="#00A5A1" /> },
  { label: "라벨", content: <ActionPage color="#008781" /> },
];

const TabNavigation: FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="w-full max-w-md mx-auto p-6 border rounded-lg shadow-md">
      <div className="relative mb-4">
        <div className="absolute inset-0 border-b border-gray-300 w-[328px] mx-auto"></div>
        <div className="flex justify-between relative z-10 w-[50%] mx-auto">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setSelectedTab(index)}
              className={`flex-1 py-2 text-center ${
                selectedTab === index
                  ? "text-[#13C2C2] border-b-2 border-[#13C2C2]"
                  : "text-gray-400"
              } focus:outline-none`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center p-4">
        {tabs[selectedTab].content}
      </div>
    </div>
  );
};

export default TabNavigation;
