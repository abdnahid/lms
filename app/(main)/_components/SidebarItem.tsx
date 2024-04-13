"use client";

import { cn, getIcon } from "@/lib/utils";
import { ISidebarRoute } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarItem = ({ route }: { route: ISidebarRoute }) => {
  const pathname = usePathname();
  const isActive =
    pathname === route.url || pathname.startsWith(`${route.url}/`);
  return (
    <Link
      href={route.url}
      className={cn(
        "flex items-center p-2 gap-x-2 text-cardBg-darkAlt dark:text-cardBg-alt hover:text-theme hover:after:bg-theme dark:hover:after:bg-theme-dark dark:hover:text-theme-dark pl-6 relative after:absolute after:w-1 after:h-full  after:top-0 after:-right-[1px] after:z-50 transition-colors duration-300 after:transition-colors after:duration-300",
        isActive &&
          "text-theme dark:text-theme-dark after:bg-theme after:dark:bg-theme-dark"
      )}
    >
      <span>{getIcon(route.iconName)}</span>
      <span>{route.label}</span>
    </Link>
  );
};

export default SidebarItem;
