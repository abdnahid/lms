import { cva, type VariantProps } from "class-variance-authority";

import { cn, getIcon } from "@/lib/utils";
import { TIconName } from "@/types";

// Trying to replicate Shadcn's Component Styling System
const backgroundVariants = cva(
  "rounded-full flex items-center justify-center",
  {
    variants: {
      variant: {
        default: "bg-sky-100",
        success: "bg-emerald-100",
      },
      size: {
        default: "p-2",
        sm: "p-1",
        xl: "p-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const iconVariants = cva("", {
  variants: {
    variant: {
      default: "text-sky-700",
      success: "text-emerald-700",
    },
    size: {
      default: "text-2xl",
      sm: "text-lg",
      xl: "text-7xl",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type BackgroundVariantsProps = VariantProps<typeof backgroundVariants>;
type IconVariantsProps = VariantProps<typeof iconVariants>;

interface IconBadgeProps extends BackgroundVariantsProps, IconVariantsProps {
  iconName: TIconName;
}

export const IconBadge = ({
  iconName, // immediate map to Icon
  variant,
  size,
}: IconBadgeProps) => {
  return (
    <div className={cn(backgroundVariants({ variant, size }))}>
      <span className={cn(iconVariants({ variant, size }))}>
        {getIcon(iconName)}
      </span>
    </div>
  );
};
