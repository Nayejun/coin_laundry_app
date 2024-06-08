"use client";

import React from "react";
import dynamic from "next/dynamic";

const ToggleSwitchWeb = dynamic(() => import("@/components/ToggleSwitchWeb"), { ssr: false });
const ToggleSwitchAndroid = dynamic(() => import("@/components/ToggleSwitchAndroid"), { ssr: false });
const ToggleSwitchIOS = dynamic(() => import("@/components/ToggleSwitchIOS"), { ssr: false });
const ToggleSwitchCollection = dynamic(() => import("@/components/ToggleSwitchCollection"), { ssr: false });

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
