"use client";

import React from "react";
import dynamic from "next/dynamic";
import ToggleSwitchCollection from "@/components/toggleSwitchCollection";

const ToggleSwitchWeb = dynamic(() => import("@/components/toggleSwitchWeb"), { ssr: false });
const ToggleSwitchAndroid = dynamic(() => import("@/components/toggleSwitchAndroid"), { ssr: false });
const ToggleSwitchIOS = dynamic(() => import("@/components/toggleSwitchIOS"), { ssr: false });


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
