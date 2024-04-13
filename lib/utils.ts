import {
  BarChartIcon,
  CompassIcon,
  CrossIcon,
  DashboardIcon,
  ListIcon,
  LogoutIcon,
  MenuCloseIcon,
  MenuExpandIcon,
} from "@/assets/Icons/icons";
import { IIconLibItem } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const IconsLib: IIconLibItem[] = [
  { name: "dashboard", icon: DashboardIcon },
  { name: "compass", icon: CompassIcon },
  { name: "menu-expand", icon: MenuExpandIcon },
  { name: "menu-close", icon: MenuCloseIcon },
  { name: "logout", icon: LogoutIcon },
  { name: "list", icon: ListIcon },
  { name: "bar-chart", icon: BarChartIcon },
];

export const getIcon = (name: string): JSX.Element => {
  const iconObj = IconsLib.find((item) => item.name === name);
  if (iconObj) {
    return iconObj.icon();
  } else {
    return CrossIcon();
  }
};
