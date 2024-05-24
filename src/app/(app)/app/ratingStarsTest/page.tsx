"use client"

import React, { FC, useState } from "react";
import RatingStars from "@/components/ui/ratingStars";
import { Space } from "antd"; // Use Space from antd instead of Flex

const Page: FC = () => {
  const [ratings, setRatings] = useState<number[]>([5, 0, 0.5, 1.5, 2, 2.5, 3, 3.5, 4, 4.5]);

  const handleRatingChange = (index: number, value: number) => {
    const newRatings = [...ratings];
    newRatings[index] = value;
    setRatings(newRatings);
  };

  return (
    <div className="mx-[10px] my-[10px]">
      <Space direction="vertical" size="middle">
        {ratings.map((rating, index) => (
          <RatingStars
            key={index}
            defaultValue={rating}
            onChange={(value) => handleRatingChange(index, value)}
          />
        ))}
      </Space>
    </div>
  );
};

export default Page;
