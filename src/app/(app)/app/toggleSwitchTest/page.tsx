"use client";

import React from "react";
import dynamic from "next/dynamic";

const ToggleSwitchWeb = dynamic(() => import("@/components/toggleSwitchWeb"), { ssr: false });
const ToggleSwitchAndroid = dynamic(() => import("@/components/toggleSwitchAndroid"), { ssr: false });
const ToggleSwitchIOS = dynamic(() => import("@/components/toggleSwitchIOS"), { ssr: false });
const ToggleSwitchCollection = dynamic(() => import("@/components/toggleSwitchCollection"), { ssr: false });

export default function Page() {
  return (
    <>  
    <div className="flex">
      <ToggleSwitchWeb />
      <ToggleSwitchAndroid />
      <ToggleSwitchIOS />
      
    </div>

    <div>
      <ToggleSwitchCollection />
    </div>
    </>

  );
}
