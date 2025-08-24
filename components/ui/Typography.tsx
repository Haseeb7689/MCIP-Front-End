import { ReactNode } from "react";
import cn from "classnames";

interface TypographyProps {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  variant?: string;
  className?: string;
}

export function Typography({
  children,
  as = "p",
  variant,
  className,
}: TypographyProps) {
  const Component = as;

  const variantClasses: Record<string, string> = {
    "7xl/medium": "text-7xl font-medium",
    "5xl/bold": "text-5xl font-bold",
    "4xl/semibold": "text-4xl font-semibold",
    "3xl/semibold": "text-3xl font-semibold",
    "2xl/medium": "text-2xl font-medium",
    "xl/normal": "text-xl font-normal",
    "lg/normal": "text-lg font-normal",
    "base/normal": "text-base font-normal",
    "sm/medium": "text-sm font-medium",
    "sm/normal": "text-sm font-normal",
  };

  return (
    <Component
      className={cn(variant ? variantClasses[variant] : "", className)}
    >
      {children}
    </Component>
  );
}
