import Link from "next/link";
import React from "react";
import SidebarRoutes from "./SidebarRoutes";

const Sidebar = () => {
  return (
    <div className="w-full h-full py-12 space-y-20 flex flex-col relative after:absolute after:w-0.5 after:h-full after:bg-cardBg-alt after:dark:bg-cardBg-dark after:top-0 after:rig1ht-0">
      <Link href="/">
        <h2 className="text-2xl font-lora font-bold pl-6">ABDLMS</h2>
      </Link>
      <div>
        <SidebarRoutes />
      </div>
    </div>
  );
};

export default Sidebar;
