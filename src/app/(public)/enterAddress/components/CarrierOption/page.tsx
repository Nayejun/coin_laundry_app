"use client";
import React, { useState, useEffect } from "react";
import CustomSelect from "@/components/others/CustomSelect"; // Adjust the path as needed

const CarrierOption: React.FC = () => {
  // Initialize state with empty strings
  const [carrierOption, setCarrierOption] = useState<string>("");
  const [carrierInput, setCarrierInput] = useState<string>("");

  // Load from localStorage on client side after component mounts
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCarrierOption(localStorage.getItem("carrierOption") || "문 앞에 놓아 주세요");
      setCarrierInput(localStorage.getItem("carrierInput") || "");
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("carrierOption", carrierOption);

      if (carrierOption !== "직접 입력") {
        localStorage.setItem("carrierInput", "");
        setCarrierInput("");
      }
    }
  }, [carrierOption]);

  useEffect(() => {
    if (typeof window !== "undefined" && carrierOption === "직접 입력") {
      localStorage.setItem("carrierInput", carrierInput);
    }
  }, [carrierInput, carrierOption]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCarrierInput(e.target.value);
  };

  return (
    <div>
      <div className="mt-[40px] text-label-1-normal mb-[8px]">캐리어 님께</div>

      <CustomSelect
        id="carrier-options"
        value={carrierOption}
        onChange={(e) => setCarrierOption(e.target.value)}
        options={[
          { value: "문 앞에 놓아 주세요", label: "문 앞에 놓아 주세요" },
          { value: "경비실에 맡겨 주세요", label: "경비실에 맡겨 주세요" },
          { value: "택배함에 넣어 주세요", label: "택배함에 넣어 주세요" },
          { value: "직접 입력", label: "직접 입력" },
        ]}
      />
      {carrierOption === "직접 입력" && (
        <div className="mt-2">
          <input
            id="carrier-custom-input"
            type="text"
            placeholder="직접 입력해 주세요"
            value={carrierInput}
            onChange={handleInputChange}
            className="border border-line-normal text-body-2-normal rounded-md px-3 py-2 w-full outline-none"
          />
        </div>
      )}
    </div>
  );
};

export default CarrierOption;
