"use client";
import React, { FC } from "react";
import ActionButtonGray from "@/components/ui/ActionButtonGray";

interface PageProps {
  label: string;
  onClick: () => void;
}

const Page: FC<PageProps> = ({ label, onClick }) => {

  return (
    <>
      <div>
        <ActionButtonGray label={label} onClick={onClick} />
      </div>
    </>
  );
};

export default Page;