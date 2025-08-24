"use client";
import { SelectHTMLAttributes, forwardRef } from "react";
import { clsx } from "clsx";

const Select = forwardRef<
  HTMLSelectElement,
  SelectHTMLAttributes<HTMLSelectElement>
>(({ className, ...props }, ref) => {
  return (
    <select
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

Select.displayName = "Select";
export default Select;
