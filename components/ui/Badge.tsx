import { ReactNode } from "react";
import cn from "classnames";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-gray-200 px-2 py-1 text-xs font-semibold text-gray-800",
        className
      )}
    >
      {children}
    </span>
  );
}
