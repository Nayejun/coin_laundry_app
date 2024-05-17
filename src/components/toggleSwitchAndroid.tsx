"use client";

import React, { useState } from "react";
import ToggleSwitch from "@/components/ui/toggleSwitchForAndroid"; // Update this import path if necessary

export default function ToggleSwitchAndroid() {
  const [isActive, setIsActive] = useState(true); // Set initial state to true

  const handleActiveToggle = (
    checked: boolean | ((prevState: boolean) => boolean)
  ) => {
    setIsActive(checked);
    console.log("Active toggle is now:", checked ? "On" : "Off");
  };

  return (
    <div className="p-5 bg-background-light min-h-full flex">
      <div className="bg-white rounded-3xl px-5 py-5 space-y-8">
        <h1 className="text-lg font-bold mb-2">Android</h1>
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="mr-2 font-bold">active = </span>
              <span className="flex items-center">
                <span
                  className="px-2 py-1 rounded text-black mr-2"
                  style={{ backgroundColor: "#70737C26" }}
                  onClick={() => handleActiveToggle(false)}
                >
                  false
                </span>
                <span
                  className="px-2 py-1 rounded text-black"
                  style={{ backgroundColor: "#70737C26" }}
                  onClick={() => handleActiveToggle(true)}
                >
                  true
                </span>
              </span>
            </div>
            <div className="space-x-4">
              <ToggleSwitch
                initialChecked={false}
                onToggle={handleActiveToggle}
                knobSizeOff="16px"
                knobSizeOn="24px"
                knobColorOff="#74757F"
                knobColorOn="#FFF"
                trackColorOn="#0066FF"
                trackColorOff="#E1E2EC"
                borderColor="#74757F"
                borderThickness="2px"
                opacity={1}
              />
              <ToggleSwitch
                initialChecked={isActive}
                onToggle={handleActiveToggle}
                knobSizeOff="16px"
                knobSizeOn="24px"
                knobColorOff="#74757F"
                knobColorOn="#FFF"
                trackColorOn="#0066FF"
                trackColorOff="#70737C29"
                borderColor="#70737C29"
                borderThickness="2px"
                opacity={1}
                borderOpacity={1}
              />
            </div>
          </div>
          <div className="space-y-4">
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
            <ToggleSwitch
                initialChecked={false}
                onToggle={handleActiveToggle}
                knobSizeOff="16px"
                knobSizeOn="24px"
                knobColorOff="#74757F"
                knobColorOn="#FFF"
                trackColorOn="#0066FF"
                trackColorOff="#E1E2EC"
                borderColor="#74757F"
                borderThickness="2px"
                opacity={1}
                disabled={true}
              />
              <ToggleSwitch
                initialChecked={false}
                onToggle={handleActiveToggle}
                knobSizeOff="16px"
                knobSizeOn="24px"
                knobColorOff="#1B1B1F"
                knobColorOn="#FFF"
                trackColorOn="#0066FF"
                trackColorOff="#FFF"
                borderColor="#1B1B1F"
                borderThickness="2px"
                opacity={0.38}
                borderOpacity={0.40}
                disabled={true}
              />
            </div>
            <div className="space-x-4">
              <ToggleSwitch
                initialChecked={isActive}
                onToggle={handleActiveToggle}
                knobSizeOff="16px"
                knobSizeOn="24px"
                knobColorOff="#74757F"
                knobColorOn="#FFF"
                trackColorOn="#0066FF"
                trackColorOff="#70737C29"
                borderColor="#70737C29"
                borderThickness="2px"
                opacity={1}
                borderOpacity={1}
                disabled={true}
              />
              <ToggleSwitch
                initialChecked={isActive}
                onToggle={handleActiveToggle}
                knobSizeOff="16px"
                knobSizeOn="24px"
                knobColorOff="#74757F"
                knobColorOn="#FFF"
                trackColorOn="#1B1B1F"
                trackColorOff="#70737C29"
                borderColor="#70737C29"
                borderThickness="2px"
                borderOpacity={1}
                opacity={0.12}
                disabled={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
