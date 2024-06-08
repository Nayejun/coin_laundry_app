import React, { FC } from "react";
import { Rate } from "antd";
import { RatingStarsProps } from "@/lib/types";

const RatingStars: FC<RatingStarsProps> = ({ defaultValue, onChange }) => {
  return (
    <div className="mx-[10px] ">
      <Rate allowHalf defaultValue={defaultValue} onChange={onChange} />
    </div>
  );
};

export default RatingStars;
