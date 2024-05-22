import React from "react";
import { DividerProps } from "@/lib/types";

const Divider = ({
  color,
  vertical,
  margin,
  length,
  thickness,
}: DividerProps) => {
  return (
    <div
      style={{
        backgroundColor: color,
        height: vertical ? length : thickness,
        width: vertical ? thickness : length,
        marginLeft: vertical ? margin : "0",
        marginRight: vertical ? margin : "0",
        marginTop: vertical ? "0" : margin,
        marginBottom: vertical ? "0" : margin,
      }}
    />
  );
};

export default Divider;