"use client";

import React, { useState } from "react";
import ToggleSwitch from "@/components/ui/toggleSwitch";

export default function ToggleSwitchWeb() {
  const [isActive, setIsActive] = useState(true); // Set initial state to true

  const handleActiveToggle = (checked: boolean | ((prevState: boolean) => boolean)) => {
    setIsActive(checked);
    console.log("Active toggle is now:", checked ? "On" : "Off");
  };

  return (
    <div className="p-5 bg-background-light min-h-full flex">
      <div className="bg-white rounded-3xl px-5 py-5 space-y-8">
        {/* Reduced padding and space-y */}
        <h1 className="text-lg font-bold mb-2">Web</h1>
        {/* Reduced margin-bottom */}
        <div className="space-y-8">
          {/* Reduced vertical space */}
          <div className="space-y-4">
            {/* Reduced vertical space */}
            <div className="flex items-center">
              <span className="mr-2 font-bold">active = </span>
              <span className="flex items-center">
                <span
                  className="px-2 py-1 rounded text-black mr-2"
                  style={{ backgroundColor: "#70737C26" }}
                >
                  false
                </span>
                <span
                  className="px-2 py-1 rounded text-black"
                  style={{ backgroundColor: "#70737C26" }}
                >
                  true
                </span>
              </span>
            </div>
            <div className="space-x-4">
              <ToggleSwitch
                initialChecked={false}
                onToggle={handleActiveToggle}
                knobSize="24px"
                knobColor="#FFF"
                trackColorOn="#0066FF"
                trackColorOff="#70737C29"
                borderColor="#0066FF"
                borderThickness="0px"
                opacity={1}
              />
              <ToggleSwitch
                initialChecked={isActive}
                onToggle={handleActiveToggle}
                knobSize="24px"
                knobColor="#FFF"
                trackColorOn="#0066FF"
                trackColorOff="#70737C29"
                borderColor="#70737C29"
                borderThickness="0px"
                opacity={1}
                borderOpacity={1}
              />
            </div>
          </div>
          <div className="space-y-4">
            {/* Reduced vertical space */}
            <div className="flex items-center">
              <span className="mr-2 font-bold">disable = </span>
              <span className="flex items-center">
                <span
                  className="px-2 py-1 rounded text-black mr-2"
                  style={{ backgroundColor: "#70737C26" }}
                >
                  false
                </span>
                <span
                  className="px-2 py-1 rounded text-black"
                  style={{ backgroundColor: "#70737C26" }}
                >
                  true
                </span>
              </span>
            </div>
            <div className="space-x-4">
              {/* Reduced horizontal space */}
              <ToggleSwitch
                initialChecked={false} // Set initial checked state directly
                knobSize="24px"
                knobColor="#FFF"
                trackColorOn="#0066FF"
                trackColorOff="#70737C29"
                borderColor="#70737C29"
                borderThickness="0px"
                opacity={1}
                disabled={true}
              />
              <ToggleSwitch
                initialChecked={false} // Set initial checked state directly
                knobSize="24px"
                knobColor="#FFF"
                trackColorOn="#0066FF"
                trackColorOff="#70737C29"
                borderColor="#70737C29"
                borderThickness="0px"
                opacity={0.5}
                disabled={true}
              />
            </div>
            <div className="space-x-4">
              {/* Reduced horizontal space */}
              <ToggleSwitch
                initialChecked={true} // Set initial checked state directly
                knobSize="24px"
                knobColor="#FFF"
                trackColorOn="#0066FF"
                trackColorOff="#70737C29"
                borderColor="#70737C29"
                borderThickness="0px"
                opacity={1}
                disabled={true}
              />
              <ToggleSwitch
                initialChecked={true} // Set initial checked state directly
                knobSize="24px"
                knobColor="#FFF"
                trackColorOn="#0066FF"
                trackColorOff="#70737C29"
                borderColor="#70737C29"
                borderThickness="0px"
                opacity={0.5}
                disabled={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
