"use client";

import { ButtonHTMLAttributes } from "react";
import { clsx } from "clsx";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
  size?: "default" | "icon";
};

const variantClasses: Record<string, string> = {
  default:
    "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 disabled:bg-gray-400",
  outline:
    "border border-gray-300 bg-white text-gray-900 hover:bg-white active:bg-white disabled:bg-gray-200",
};

const sizeClasses: Record<string, string> = {
  default: "px-4 py-2 text-sm font-medium",
  icon: "p-2 h-10 w-10 flex items-center justify-center",
};

export default function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-xl shadow-sm transition-colors",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    />
  );
}
