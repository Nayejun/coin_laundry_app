
"use client";

import Divider from "@/components/ui/divider";
import React, { useEffect, useState } from "react";

const App = () => {
  const [lenght, setLength] = useState<string>("");
  const [margin, setMargin] = useState<string>("");
  const [thickness, setThickness] = useState<string>("");

  useEffect(() => {
    setLength("100px");
    setMargin("10px");
    setThickness("1px");
  }, []);

  return (
    <div className="grid place-items-center">
      Thickness : 선의 두께를 결정합니다.
      <input
        type="number"
        onChange={(e) => {
          setThickness(e.target.value + "px");
        }}
        placeholder="Thickness 입력"
        style={{ border: "5px solid black" }}
      />
      Length : Vertical 값에 따라서 세로선의 길이가 되고, 가로선의 길이가
      됩니다.
      <input
        type="number"
        onChange={(e) => {
          setLength(e.target.value + "px");
        }}
        placeholder="Length 입력"
        style={{ border: "5px solid black" }}
      />
      Margin : Divider과 다른 요소 사이의 간격을 결정합니다.
      <input
        type="number"
        onChange={(e) => {
          setMargin(e.target.value + "px");
        }}
        placeholder="Margin 입력"
        style={{ border: "5px solid black" }}
      />
      <div>
        {/* 가로선 Divider */}
        <div>
          <div>Item 1</div>
          <Divider
            color="red"
            thickness={thickness}
            length={lenght}
            margin={margin}
          />
          <div>Item 2</div>
        </div>
        {/* 세로선 Divider */}
        <div className="flex items-center">
          <div>Item 1</div>
          <Divider
            color="blue"
            thickness={thickness}
            vertical
            length={lenght}
            margin={margin}
          />
          <div>Item 2</div>
        </div>
      </div>
    </div>
  );
};

export default App;