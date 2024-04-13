import { getIcon } from "@/lib/utils";

type IIconTextProps = {
  label: string;
  iconName: string;
};

type DivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  IIconTextProps;

export default function IconText(props: DivProps) {
  return (
    <div className={`flex items-center gap-2 ${props.className}`} {...props}>
      <span>{getIcon(props.iconName)}</span>
      <span>{props.label}</span>
    </div>
  );
}
