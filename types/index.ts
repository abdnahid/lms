export interface ISidebarRoute {
  iconName: string;
  label: string;
  url: string;
}

export interface IIconLibItem {
  name: string;
  icon: () => JSX.Element;
}
