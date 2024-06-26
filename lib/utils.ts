import {
  AddIcon,
  BarChartIcon,
  CheckIcon,
  CompassIcon,
  CrossIcon,
  DashboardIcon,
  DollarIcon,
  FileIcon,
  ImageIcon,
  ListIcon,
  LoadIcon,
  LogoutIcon,
  MenuCloseIcon,
  MenuExpandIcon,
  PencilIcon,
  SearchIcon,
  UpDownIcon,
  UploadIcon,
} from "@/assets/Icons/icons";
import { IIconLibItem, TIconName } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const IconsLib: IIconLibItem[] = [
  { iconName: "dashboard", icon: DashboardIcon },
  { iconName: "compass", icon: CompassIcon },
  { iconName: "menu-expand", icon: MenuExpandIcon },
  { iconName: "menu-close", icon: MenuCloseIcon },
  { iconName: "logout", icon: LogoutIcon },
  { iconName: "list", icon: ListIcon },
  { iconName: "bar-chart", icon: BarChartIcon },
  { iconName: "pencil", icon: PencilIcon },
  { iconName: "upload", icon: UploadIcon },
  { iconName: "add", icon: AddIcon },
  { iconName: "image", icon: ImageIcon },
  { iconName: "check", icon: CheckIcon },
  { iconName: "up-down", icon: UpDownIcon },
  { iconName: "search", icon: SearchIcon },
  { iconName: "cross", icon: CrossIcon },
  { iconName: "dollar", icon: DollarIcon },
  { iconName: "file", icon: FileIcon },
  { iconName: "load", icon: LoadIcon },
];

export const getIcon = (name: TIconName): JSX.Element => {
  const iconObj = IconsLib.find((item) => item.iconName === name);
  if (iconObj) {
    return iconObj.icon();
  } else {
    return CrossIcon();
  }
};

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};
