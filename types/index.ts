export type TIconName =
  | "dashboard"
  | "compass"
  | "menu-expand"
  | "menu-close"
  | "logout"
  | "list"
  | "bar-chart"
  | "pencil"
  | "upload"
  | "add"
  | "image"
  | "check"
  | "up-down"
  | "search"
  | "cross";
export interface ISidebarRoute {
  iconName: TIconName;
  label: string;
  url: string;
}

export interface IIconLibItem {
  iconName: TIconName;
  icon: () => JSX.Element;
}

export interface IComboBoxOpt {
  value: string;
  label: string;
}
