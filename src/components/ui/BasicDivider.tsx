import React from "react";
import { BasicDividerProps } from "@/lib/types";

export const BasicDivider = ({
  variant,
  vertical,
  className,
  width = "w-full max-w-[430px]", // Adjust width calculation
}: BasicDividerProps): JSX.Element => {
  return (
    <div
      className={`relative ${vertical ? "w-px" : ""} ${
        vertical ? "flex" : ""
      } ${vertical ? "flex-col" : ""} ${
        vertical ? "items-center" : ""
      } ${
        variant === "normal" && !vertical
          ? "h-px"
          : variant === "thick"
          ? "h-[8px]"
          : vertical
          ? "h-[32px]"
          : ""
      } ${vertical ? "justify-center" : ""} ${
        variant === "normal" && !vertical
          ? "bg-line-normal"
          : variant === "thick"
          ? "bg-background-normal-alternative"
          : ""
      } ${className}`}
      style={{ width: !vertical ? width : undefined }} // Apply width if not vertical
    >
      {vertical && (
        <div className="relative flex-1 w-px grow bg-line-normal" />
      )}
    </div>
  );
};
