import { FC } from "react";
import { RadiusBoxProps } from "@/lib/types";

const RadiusBox: FC<RadiusBoxProps> = ({ boxWidth, boxHeight, borderThickness,additionalClasses }) => {
  return (
    <div
      className={`bg-[#E6FFFB] border-[#08979C] ${additionalClasses}`}
      style={{ width: boxWidth, height: boxHeight, borderWidth: borderThickness}}
    ></div>
  );
};

export default RadiusBox;