"use client";

import React, { FC } from "react";
import CTAButtonCollection from "@/components/CTAButtonCollection";

const Page: FC = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className="flex  mx-[10px] my-[10px] h-screen">
      <CTAButtonCollection />
    </div>
  );
};

export default Page;
