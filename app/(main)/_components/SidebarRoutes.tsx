"use client";

import React from "react";
import SidebarItem from "./SidebarItem";
import { ISidebarRoute } from "@/types";
import { usePathname } from "next/navigation";

const guestRoutes: ISidebarRoute[] = [
  { iconName: "dashboard", label: "Dashboard", url: "/" },
  { iconName: "compass", label: "Browse", url: "/search" },
];

const teacherRoutes: ISidebarRoute[] = [
  { iconName: "list", label: "Courses", url: "/teacher/courses" },
  { iconName: "bar-chart", label: "Analytics", url: "/teacher/analytics" },
];

const SidebarRoutes = () => {
  const pathname = usePathname();
  const routes = pathname.startsWith("/teacher") ? teacherRoutes : guestRoutes;
  return (
    <div className="flex flex-col ">
      {routes.map((route, index) => (
        <SidebarItem route={route} key={index} />
      ))}
    </div>
  );
};

export default SidebarRoutes;
