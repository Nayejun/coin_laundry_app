"use client";

import React from "react";
import dynamic from "next/dynamic";

const ToggleSwitchWeb = dynamic(() => import("@/components/toggleSwitchWeb"), { ssr: false });
const ToggleSwitchAndroid = dynamic(() => import("@/components/toggleSwitchAndroid"), { ssr: false });

export default function Page() {
  return (
    <div>
      <ToggleSwitchWeb />
      <ToggleSwitchAndroid />
    </div>
  );
}
