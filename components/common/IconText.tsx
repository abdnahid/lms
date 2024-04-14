import { getIcon } from "@/lib/utils";
import { TIconName } from "@/types";

type IIconTextProps = {
  label: string;
  iconName: TIconName;
};

type DivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  IIconTextProps;

export default function IconText({ iconName, label, ...props }: DivProps) {
  return (
    <div className={`flex items-center gap-2 ${props.className}`} {...props}>
      <span>{getIcon(iconName)}</span>
      <span>{label}</span>
    </div>
  );
}
