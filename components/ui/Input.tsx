"use client";
import { InputHTMLAttributes, forwardRef } from "react";
import { clsx } from "clsx";

const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={clsx(
        "w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm",
        "focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700",
        className
      )}
      {...props}
    />
  );
});

Input.displayName = "Input";
export default Input;
