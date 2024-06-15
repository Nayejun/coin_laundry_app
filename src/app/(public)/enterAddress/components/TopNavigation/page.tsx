"use client";

import React, { FC } from "react";
import TopNavigation from "@/components/others/TopNavigation";

interface PageProps {
  text: string;
  onClick: () => void;
}

const Page: FC<PageProps> = ({ text, onClick }) => {
  return (
    <div>
      <TopNavigation text={text} onClick={onClick} />
    </div>
  );
};

export default Page;
