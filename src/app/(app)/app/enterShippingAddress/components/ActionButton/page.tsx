"use client";
import React, { FC } from "react";
import ActionButton from "@/components/ui/ActionButton";

interface PageProps {
  label: string;
  onClick: () => void;
}

const Page: FC<PageProps> = ({ label, onClick }) => {

  return (
    <>
      <div>
        <ActionButton label={label} onClick={onClick} />
      </div>
    </>
  );
};

export default Page;