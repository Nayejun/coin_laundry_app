"use client";

import React, { useState } from "react";
import ToggleSwitchForIOS from "@/components/ui/toggleSwitchForIOS";

export default function ToggleSwitchIOS() {
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
        {/* Reduced padding and space-y */}
        <h1 className="text-lg font-bold mb-2">iOS</h1>
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
              <ToggleSwitchForIOS
                initialChecked={false}
                onToggle={handleActiveToggle}
                knobSizeOn="27px"
                knobSizeOff="27px"
                knobColorOn="#FFF"
                knobColorOff="#FFF"
                trackColorOn="#0066FF"
                trackColorOff="#70737C29"
                borderColor="#0066FF"
                borderThickness="0px"
                opacity={1}
              />
              <ToggleSwitchForIOS
                initialChecked={isActive}
                onToggle={handleActiveToggle}
                knobSizeOn="27px"
                knobSizeOff="27px"
                knobColorOff="#FFF"
                knobColorOn="#FFF"
                trackColorOff="#70737C29"
                trackColorOn="#0066FF"
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
              <ToggleSwitchForIOS
                initialChecked={false} // Set initial checked state directly
                knobSizeOff="27px"
                knobSizeOn="27px"
                knobColorOn="#FFF"
                knobColorOff="#FFF"
                trackColorOn="#0066FF"
                trackColorOff="#70737C29"
                borderColor="#70737C29"
                borderThickness="0px"
                opacity={1}
                disabled={true}
              />
              <ToggleSwitchForIOS
                initialChecked={false} // Set initial checked state directly
                knobSizeOff="27px"
                knobSizeOn="27px"
                knobColorOn="#FFF"
                knobColorOff="#FFF"
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
              <ToggleSwitchForIOS
                initialChecked={true} // Set initial checked state directly
                knobSizeOff="27px"
                knobSizeOn="27px"
                knobColorOn="#FFF"
                knobColorOff="#FFF"
                trackColorOn="#0066FF"
                trackColorOff="#70737C29"
                borderColor="#70737C29"
                borderThickness="0px"
                opacity={1}
                disabled={true}
              />
              <ToggleSwitchForIOS
                initialChecked={true} // Set initial checked state directly
                knobSizeOff="27px"
                knobSizeOn="27px"
                knobColorOn="#FFF"
                knobColorOff="#FFF"
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
