"use client";

import React, { FC } from "react";
import ActionButton from "@/components/ui/actionButton";

const Page: FC = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className="flex  mx-[10px] my-[10px] h-screen">
      <ActionButton label="행동" onClick={handleClick} />
    </div>
  );
};

export default Page;
